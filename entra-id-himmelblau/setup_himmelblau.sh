#!/bin/bash

################################################################################
# Script Unificado de Himmelblau para Ubuntu 22.04
# Instalación, Configuración y Verificación Todo-en-Uno
# Integración con Azure AD / Microsoft Entra ID
################################################################################

set -e  # Salir si hay algún error

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
MAGENTA='\033[0;35m'
NC='\033[0m' # No Color

# Variables globales
# Versión a instalar (sobrescribible: HIMMELBLAU_VERSION=4.0.1 ./setup_himmelblau.sh)
# 2.1.0 tiene un bug conocido en el registro MDM de Intune (CSR rechazado:
# 'must be a valid PEM-encoded PKCS#10 ... RSA key of at least 2048 bits').
# Usar >= 3.x. Última estable disponible: 4.0.2
HIMMELBLAU_VERSION="${HIMMELBLAU_VERSION:-4.0.2}"
UBUNTU_VERSION=""
UBUNTU_CODENAME=""
BASE_URL=""
DOMAIN=""
ENTRA_USER=""
INSTALL_COMPLETED=false
CONFIG_COMPLETED=false

# Comprobar disponibilidad de interfaz TUI (whiptail)
has_tui() {
    command -v whiptail &>/dev/null && [ -t 0 ] && [ "$TERM" != "dumb" ] && [ -n "$TERM" ]
}

# Funciones de impresión
print_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[✓]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[!]${NC} $1"
}

print_error() {
    echo -e "${RED}[✗]${NC} $1"
}

print_step() {
    echo -e "${CYAN}[PASO]${NC} $1"
}

# Banner principal
show_banner() {
    clear
    echo -e "${MAGENTA}"
    echo "╔═══════════════════════════════════════════════════════════════════╗"
    echo "║                                                                   ║"
    echo "║       INSTALADOR UNIFICADO DE HIMMELBLAU                          ║"
    echo "║       Ubuntu 22.04 / 24.04 / 25.10 + Azure AD / Entra ID          ║"
    echo "║                                                                   ║"
    echo "╚═══════════════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
}

# Verificar permisos root
check_root() {
    if [ "$EUID" -ne 0 ]; then 
        print_error "Este script debe ejecutarse como root (sudo)"
        exit 1
    fi
}

# Verificar versión de Ubuntu
check_ubuntu_version() {
    print_info "Verificando versión de Ubuntu..."
    if grep -q "Ubuntu 22.04" /etc/os-release; then
        UBUNTU_VERSION="ubuntu22.04"
        BASE_URL="https://packages.himmelblau-idm.org/stable/${HIMMELBLAU_VERSION}/deb/${UBUNTU_VERSION}"
        print_success "Detectado Ubuntu 22.04 (Instalación vía paquetes .deb manuales)"
    elif grep -q "Ubuntu 24.04" /etc/os-release; then
        UBUNTU_VERSION="ubuntu24.04"
        BASE_URL="https://packages.himmelblau-idm.org/stable/${HIMMELBLAU_VERSION}/deb/${UBUNTU_VERSION}"
        print_success "Detectado Ubuntu 24.04 (Instalación vía paquetes .deb manuales)"
    elif grep -q "Ubuntu 25.10" /etc/os-release; then
        UBUNTU_VERSION="ubuntu25.10"
        print_success "Detectado Ubuntu 25.10 (Instalación vía Repositorio Nightly)"
    else
        print_warning "Este script está diseñado para Ubuntu 22.04, 24.04 o 25.10"
        print_info "Versión detectada en /etc/os-release:"
        cat /etc/os-release | grep PRETTY_NAME
        
        local CONT=false
        if has_tui; then
            if whiptail --title "Versión de Ubuntu no probada" \
                --yesno "Este script está diseñado para Ubuntu 22.04, 24.04 o 25.10.\n\nVersión detectada: $(grep PRETTY_NAME /etc/os-release | cut -d'=' -f2 | tr -d '\"')\n\n¿Desea continuar de todas formas?" 12 70; then
                CONT=true
            fi
        else
            read -p "¿Desea continuar de todas formas? (s/N): " -n 1 -r
            echo
            if [[ $REPLY =~ ^[Ss]$ ]]; then
                CONT=true
            fi
        fi

        if [ "$CONT" = false ]; then
            exit 1
        fi
        # Fallback por defecto a 22.04 si se fuerza
        UBUNTU_VERSION="ubuntu22.04"
        BASE_URL="https://packages.himmelblau-idm.org/stable/${HIMMELBLAU_VERSION}/deb/${UBUNTU_VERSION}"
    fi
}

# Verificar sincronización de tiempo
check_time_sync() {
    # Verificar si hay problemas de tiempo que puedan afectar apt
    if ! apt-get update -qq 2>&1 | grep -q "no es válido"; then
        return 0
    fi
    
    print_warning "Detectado posible problema de sincronización de tiempo"
    print_info "Esto puede causar errores con repositorios apt, pero no afectará"
    print_info "la instalación de paquetes locales de Himmelblau"
    echo ""
    print_info "Puedes corregir el tiempo con: sudo timedatectl set-ntp true"
    echo ""
    sleep 2
}

# Verificar si ya está instalado
check_installation_status() {
    if systemctl list-units --type=service 2>/dev/null | grep -q himmelblaud; then
        INSTALL_COMPLETED=true
        print_info "Himmelblau ya está instalado en el sistema"
    fi
    
    if [ -f /etc/himmelblau/himmelblau.conf ]; then
        CONFIG_COMPLETED=true
        DOMAIN=$(grep "^domains =" /etc/himmelblau/himmelblau.conf 2>/dev/null | cut -d'=' -f2 | tr -d ' ')
        if [ -n "$DOMAIN" ]; then
            print_info "Configuración encontrada para dominio: $DOMAIN"
        fi
    fi
}

################################################################################
# FASE 1: INSTALACIÓN
################################################################################

install_himmelblau() {
    echo ""
    echo -e "${CYAN}═══════════════════════════════════════════════════════════════${NC}"
    echo -e "${CYAN}                  FASE 1: INSTALACIÓN${NC}"
    echo -e "${CYAN}═══════════════════════════════════════════════════════════════${NC}"
    echo ""

    if [ "$INSTALL_COMPLETED" = true ]; then
        print_warning "Himmelblau ya está instalado"
        local REINSTALL=false
        if has_tui; then
            if whiptail --title "Himmelblau ya instalado" \
                --yesno "Himmelblau ya se encuentra instalado y detectado en el sistema.\n\n¿Desea forzar la reinstalación de los paquetes?" 11 68; then
                REINSTALL=true
            fi
        else
            read -p "¿Desea reinstalar? (s/N): " -n 1 -r
            echo
            if [[ $REPLY =~ ^[Ss]$ ]]; then
                REINSTALL=true
            fi
        fi

        if [ "$REINSTALL" = false ]; then
            print_info "Saltando instalación..."
            return 0
        fi
    fi

    # Lógica bifurcada de instalación
    if [ "$UBUNTU_VERSION" == "ubuntu25.10" ]; then
        # Instalación vía Repositorio (SOLO Ubuntu 25.10)
        print_step "Modo: Instalación vía Repositorio Nightly (Ubuntu 25.10)"
        
        # 1. Instalar dependencias previas (curl, gpg, software-properties-common)
        print_info "Instalando prerrequisitos..."
        apt-get install -y -qq curl gpg software-properties-common

        # 2. Importar clave GPG
        print_info "Importando clave GPG de Himmelblau..."
        curl -fsSL https://packages.himmelblau-idm.org/himmelblau.asc | gpg --dearmor -o /etc/apt/trusted.gpg.d/himmelblau.gpg
        
        # 3. Añadir repositorio
        print_info "Añadiendo repositorio Nightly..."
        add-apt-repository -y "deb [arch=amd64] https://packages.himmelblau-idm.org/nightly/latest/deb/${UBUNTU_VERSION}/ ./"
        
        # 4. Actualizar repositorios
        print_info "Actualizando lista de paquetes..."
        apt-get update -qq

        # 5. Instalar paquetes
        print_step "Instalando paquetes de Himmelblau desde repositorio..."
        if apt-get install -y himmelblau pam-himmelblau nss-himmelblau himmelblau-sso himmelblau-sshd-config o365; then
             print_success "Paquetes de Himmelblau instalados correctamente desde repositorio"
        else
             print_error "Error en la instalación desde repositorio"
             exit 1
        fi

    else
        # Instalación vía Paquetes .deb Manuales (Ubuntu 22.04, 24.04 y otros)
        if [ -z "$BASE_URL" ]; then
             print_error "URL base no definida para esta versión."
             exit 1
        fi
        
        # Paquetes a descargar (conjunto completo desde 3.x: broker/orchestrator/apparmor/policies)
        declare -a PACKAGES=(
            "himmelblau_${HIMMELBLAU_VERSION}-${UBUNTU_VERSION}_amd64.deb"
            "pam-himmelblau_${HIMMELBLAU_VERSION}-${UBUNTU_VERSION}_amd64.deb"
            "nss-himmelblau_${HIMMELBLAU_VERSION}-${UBUNTU_VERSION}_amd64.deb"
            "himmelblau-sso_${HIMMELBLAU_VERSION}-${UBUNTU_VERSION}_amd64.deb"
            "himmelblau-sso-policies_${HIMMELBLAU_VERSION}-${UBUNTU_VERSION}_amd64.deb"
            "himmelblau-broker_${HIMMELBLAU_VERSION}-${UBUNTU_VERSION}_amd64.deb"
            "himmelblau-orchestrator_${HIMMELBLAU_VERSION}-${UBUNTU_VERSION}_amd64.deb"
            "himmelblau-apparmor_${HIMMELBLAU_VERSION}-${UBUNTU_VERSION}_amd64.deb"
            "himmelblau-sshd-config_${HIMMELBLAU_VERSION}-${UBUNTU_VERSION}_amd64.deb"
            "himmelblau-qr-greeter_${HIMMELBLAU_VERSION}-${UBUNTU_VERSION}_amd64.deb"
            "o365_${HIMMELBLAU_VERSION}-${UBUNTU_VERSION}_amd64.deb"
        )

        # Determinar directorio de descargas
        # Si se ejecuta con sudo, obtener el usuario real
        if [ -n "$SUDO_USER" ]; then
            DOWNLOAD_DIR="/home/$SUDO_USER/Downloads/himmelblau_packages"
        else
            DOWNLOAD_DIR="$HOME/Downloads/himmelblau_packages"
        fi

        # Crear directorio de descargas si no existe
        mkdir -p "$DOWNLOAD_DIR"
        
        # Cambiar permisos para que el usuario pueda acceder
        if [ -n "$SUDO_USER" ]; then
            chown -R "$SUDO_USER:$SUDO_USER" "$DOWNLOAD_DIR"
        fi
        
        cd "$DOWNLOAD_DIR"
        print_info "Directorio de descargas: $DOWNLOAD_DIR"
        print_info "Los paquetes se conservarán para futuras reinstalaciones"

        # Descargar paquetes
        print_step "Descargando paquetes de Himmelblau ${HIMMELBLAU_VERSION}..."
        for package in "${PACKAGES[@]}"; do
            if [ -f "$package" ]; then
                print_success "Ya existe: $package (omitiendo descarga)"
            else
                print_info "Descargando $package..."
                if wget -q --show-progress "${BASE_URL}/${package}"; then
                    print_success "Descargado: $package"
                else
                    print_error "Error al descargar $package"
                    print_info "URL intentada: ${BASE_URL}/${package}"
                    exit 1
                fi
            fi
        done

        # Actualizar lista de paquetes
        print_step "Actualizando lista de paquetes del sistema..."
        if apt-get update -qq 2>/dev/null; then
            print_success "Lista de paquetes actualizada"
        else
            print_warning "No se pudo actualizar la lista de paquetes (puede ser un problema de sincronización de tiempo)"
            print_info "Continuando con la instalación de paquetes locales..."
        fi

        # Instalar dependencias necesarias
        print_step "Instalando dependencias..."
        apt-get install -y -qq libpam0g libnss3 2>/dev/null || true
        print_success "Dependencias verificadas"

        # Limpiar posibles unidades residuales u obsoletas en /etc/systemd/system/
        # En versiones previas (ej. 2.1.0) se copiaban unidades a /etc/systemd/system/
        # que referencian 'hsm-pin.enc' en lugar de 'hsm-pin-nopcr.enc', lo que bloquea
        # el arranque en la versión 4.x con error 243/CREDENTIALS.
        if ls /etc/systemd/system/himmelblaud*.service >/dev/null 2>&1; then
            print_warning "Detectadas unidades obsoletas en /etc/systemd/system/. Limpiando para usar las oficiales de /usr/lib/systemd/system/..."
            mkdir -p /root/himmelblau_legacy_systemd_backup
            mv /etc/systemd/system/himmelblaud*.service /root/himmelblau_legacy_systemd_backup/ 2>/dev/null || true
            systemctl daemon-reload
            print_success "Unidades obsoletas respaldadas en /root/himmelblau_legacy_systemd_backup/"
        fi

        # Instalar paquetes de Himmelblau
        print_step "Instalando paquetes de Himmelblau..."
        if apt install -y ./*.deb; then
            dpkg --configure -a
            systemctl daemon-reload
            print_success "Paquetes de Himmelblau instalados correctamente"
        else
            print_error "Error en la instalación de paquetes"
            print_info "Los paquetes se encuentran en: $DOWNLOAD_DIR"
            exit 1
        fi
        
        # Volver al directorio original
        cd /
        print_success "Paquetes conservados en: $DOWNLOAD_DIR"
    fi

    # En Ubuntu 24.04+, pam_lastlog.so fue removido. Evitar avisos de fallo en syslog/login
    if grep -q "^session\s\+optional\s\+pam_lastlog\.so" /etc/pam.d/login 2>/dev/null; then
        sed -i 's/^session\s\+optional\s\+pam_lastlog\.so/-session    optional   pam_lastlog.so/' /etc/pam.d/login 2>/dev/null || true
    fi

    # Crear configuración básica ANTES de iniciar el servicio
    print_step "Creando configuración básica..."
    mkdir -p /etc/himmelblau
    
    # Si no hay configuración previa, crear una por defecto
    if [ ! -f /etc/himmelblau/himmelblau.conf ]; then
        print_info "Creando configuración por defecto..."
        cat > /etc/himmelblau/himmelblau.conf << 'EOF'
[global]
# Configuración básica de Himmelblau
# Este archivo será actualizado durante la configuración

# Dominio corporativo (DEBE SER CONFIGURADO)
domains = contoso.com

# Grupos locales a los que se añadirán los usuarios
local_groups = users

# Atributo del directorio usado para el directorio home
home_attr = CN
home_alias = CN

# Usar /etc/skel para directorios home nuevos
use_etc_skel = true

# Permitir inicio de sesión local por consola/GDM con contraseña sin MFA repetitivo
allow_console_password_only = true

# Deshabilitar flujo MFA experimental para evitar error de colisión de sondeo y AADSTS500121
enable_experimental_mfa = false

# Windows Hello para Linux (TPM + PIN rápido para evitar MFA en cada inicio de sesión)
enable_hello = true
hello_pin_min_length = 6

# Aplicar políticas de Azure AD
apply_policy = true
EOF
        print_success "Configuración básica creada"
    else
        print_info "Usando configuración existente"
    fi

    # Habilitar y arrancar los servicios de Himmelblau (daemon, tasks y orchestrator)
    print_step "Habilitando servicios de Himmelblau..."
    systemctl daemon-reload
    systemctl enable himmelblaud himmelblaud-tasks himmelblaud-orchestrator > /dev/null 2>&1 || systemctl enable himmelblaud > /dev/null 2>&1
    print_success "Servicios habilitados"

    print_step "Iniciando servicios de Himmelblau..."
    systemctl restart himmelblaud himmelblaud-tasks himmelblaud-orchestrator 2>/dev/null || systemctl restart himmelblaud
    sleep 2

    # Verificar estado del servicio principal
    if systemctl is-active --quiet himmelblaud; then
        print_success "Servicio himmelblaud está activo y ejecutándose"
        if systemctl is-active --quiet himmelblaud-tasks; then
            print_success "Servicio himmelblaud-tasks está activo y ejecutándose"
        fi
    else
        print_error "El servicio himmelblaud no se pudo iniciar"
        print_warning "Mostrando información de diagnóstico..."
        echo ""
        echo "═══ Estado del Servicio ═══"
        systemctl status himmelblaud --no-pager || true
        echo ""
        echo "═══ Últimas líneas del log ═══"
        journalctl -xeu himmelblaud -n 20 --no-pager || true
        echo ""
        print_info "Revisa los errores anteriores para diagnosticar el problema"
        print_info "Posibles causas:"
        echo "  - Problema de conectividad con Azure AD / Entra ID"
        echo "  - Unidades obsoletas en /etc/systemd/system/ sobreescribiendo el servicio"
        echo "  - Configuración de red/firewall"
        echo "  - Permisos del sistema o conflicto de credenciales TPM"
        echo ""
        print_warning "NOTA: Esto es normal en algunos casos. El servicio puede iniciarse"
        print_warning "correctamente después de la configuración completa."
        echo ""
        local CONT_SVC=true
        if has_tui; then
            if ! whiptail --title "Aviso de Estado del Servicio" \
                --yesno "El servicio himmelblaud no arrancó inmediatamente (esto es habitual antes del registro en Entra ID).\n\n¿Deseas continuar con la configuración de todas formas?" 12 72; then
                CONT_SVC=false
            fi
        else
            read -p "¿Deseas continuar con la configuración de todas formas? (S/n): " -n 1 -r
            echo
            if [[ $REPLY =~ ^[Nn]$ ]]; then
                CONT_SVC=false
            fi
        fi

        if [ "$CONT_SVC" = false ]; then
            print_info "Puedes ejecutar la configuración más tarde con:"
            print_info "sudo $0  (opción 3 del menú)"
            exit 0
        fi
    fi

    # (Bloque eliminado, movido dentro del if/else de 22.04)

    INSTALL_COMPLETED=true
    
    echo ""
    print_success "¡INSTALACIÓN COMPLETADA EXITOSAMENTE!"
    echo ""
}

################################################################################
# FASE 2: CONFIGURACIÓN
################################################################################

configure_himmelblau() {
    echo ""
    echo -e "${CYAN}═══════════════════════════════════════════════════════════════${NC}"
    echo -e "${CYAN}                  FASE 2: CONFIGURACIÓN${NC}"
    echo -e "${CYAN}═══════════════════════════════════════════════════════════════${NC}"
    echo ""

    # Verificar que himmelblaud está instalado
    if [ "$INSTALL_COMPLETED" = false ]; then
        if ! systemctl list-units --type=service 2>/dev/null | grep -q himmelblaud; then
            print_error "El servicio himmelblaud no está instalado"
            print_info "Debes ejecutar la instalación primero"
            return 1
        fi
    fi

    # Detener el servicio para reconfigurar
    print_step "Deteniendo servicio para configuración..."
    systemctl stop himmelblaud 2>/dev/null || true

    # Configuración del dominio
    print_step "Configuración del dominio corporativo"
    echo ""
    if [ -n "$DOMAIN" ]; then
        print_info "Dominio actual: $DOMAIN"
        local CHANGE_DOM=false
        if has_tui; then
            if whiptail --title "Dominio Entra ID" \
                --yesno "Dominio configurado actual: ${DOMAIN}\n\n¿Desea cambiar el dominio corporativo?" 11 68; then
                CHANGE_DOM=true
            fi
        else
            read -p "¿Desea cambiar el dominio? (s/N): " -n 1 -r
            echo
            if [[ $REPLY =~ ^[Ss]$ ]]; then
                CHANGE_DOM=true
            fi
        fi

        if [ "$CHANGE_DOM" = true ]; then
            if has_tui; then
                DOMAIN=$(whiptail --title "Cambio de Dominio" \
                    --inputbox "Ingrese el nuevo dominio corporativo de Microsoft Entra ID:" 11 68 "$DOMAIN" 3>&1 1>&2 2>&3)
            else
                read -p "Ingrese el nuevo dominio corporativo: " DOMAIN
            fi
        fi
    else
        if has_tui; then
            DOMAIN=$(whiptail --title "Dominio Microsoft Entra ID" \
                --inputbox "Ingrese el dominio corporativo de Microsoft Entra ID:\n(ej. contoso.com o su-inquilino.onmicrosoft.com)" 12 70 "$DOMAIN" 3>&1 1>&2 2>&3)
        else
            read -p "Ingrese el dominio corporativo de Microsoft Entra ID (ej. contoso.com): " DOMAIN
        fi
    fi

    # Fallback si el usuario dejó el dominio vacío
    if [ -z "$DOMAIN" ]; then
        DOMAIN="contoso.com"
    fi
    print_success "Dominio configurado: $DOMAIN"

    # Configuración del usuario
    print_step "Usuario para registro en Entra ID"
    echo ""
    print_info "Ingrese el nombre de usuario que se registrará en Azure AD/Entra ID"
    print_warning "Ejemplo: usuario@${DOMAIN}"

    local DEFAULT_UPN=""
    if [ -n "$SUDO_USER" ] && [ "$SUDO_USER" != "root" ]; then
        DEFAULT_UPN="${SUDO_USER}@${DOMAIN}"
    else
        DEFAULT_UPN="usuario@${DOMAIN}"
    fi

    if has_tui; then
        ENTRA_USER=$(whiptail --title "Usuario de Microsoft Entra ID" \
            --inputbox "Ingrese el usuario de Entra ID / Azure AD (UPN de inicio de sesión):\nEjemplo: ${DEFAULT_UPN}" 12 70 "$DEFAULT_UPN" 3>&1 1>&2 2>&3)
    else
        read -p "Usuario [ej. ${DEFAULT_UPN}]: " ENTRA_USER
        if [ -z "$ENTRA_USER" ]; then
            ENTRA_USER="$DEFAULT_UPN"
        fi
    fi

    if [[ -z "$ENTRA_USER" ]]; then
        print_error "El usuario no puede estar vacío"
        return 1
    fi

    print_success "Usuario configurado: $ENTRA_USER"

    # Crear backup de nsswitch.conf
    print_step "Configurando archivos del sistema..."
    if ! ls /etc/nsswitch.conf.backup.* > /dev/null 2>&1; then
        cp /etc/nsswitch.conf /etc/nsswitch.conf.backup.$(date +%Y%m%d_%H%M%S)
        print_success "Backup de nsswitch.conf creado"
    fi

    # Configurar nsswitch.conf
    cat > /etc/nsswitch.conf << 'EOF'
# /etc/nsswitch.conf
#
# Example configuration of GNU Name Service Switch functionality.
# Configurado por Himmelblau

passwd:         files systemd sss himmelblau
group:          files systemd sss himmelblau
shadow:         files systemd sss himmelblau
gshadow:        files systemd

hosts:          files mdns4_minimal [NOTFOUND=return] dns myhostname
networks:       files

protocols:      db files
services:       db files
ethers:         db files
rpc:            db files

netgroup:       nis
EOF

    print_success "Archivo /etc/nsswitch.conf configurado"

    # Crear directorio de configuración si no existe
    mkdir -p /etc/himmelblau

    # Crear backup del archivo de configuración si existe
    if [ -f /etc/himmelblau/himmelblau.conf ]; then
        cp /etc/himmelblau/himmelblau.conf /etc/himmelblau/himmelblau.conf.backup.$(date +%Y%m%d_%H%M%S)
        print_info "Backup de configuración anterior creado"
    fi

    # Configurar himmelblau.conf
    print_step "Escribiendo configuración de Himmelblau..."
    cat > /etc/himmelblau/himmelblau.conf << EOF
[global]
# Configuración de Himmelblau para ${DOMAIN}
# Generado automáticamente el $(date)

# Dominio corporativo de Azure AD / Microsoft Entra ID
domains = ${DOMAIN}

# Grupos locales a los que se añadirán los usuarios
local_groups = users

# Atributo del directorio usado para el directorio home
home_attr = CN
home_alias = CN

# Usar /etc/skel para directorios home nuevos
use_etc_skel = true

# Permitir inicio de sesión local por consola/GDM con contraseña sin MFA repetitivo
allow_console_password_only = true

# Deshabilitar flujo MFA experimental para evitar error de colisión de sondeo y AADSTS500121
enable_experimental_mfa = false

# Windows Hello para Linux (TPM + PIN rápido para evitar MFA en cada inicio de sesión)
enable_hello = true
hello_pin_min_length = 6

# Aplicar políticas de Azure AD
apply_policy = true
EOF

    print_success "Archivo /etc/himmelblau/himmelblau.conf configurado"
    
    # Mostrar configuración creada
    print_info "Configuración creada:"
    echo ""
    grep -v "^#" /etc/himmelblau/himmelblau.conf | grep -v "^$" | sed 's/^/   /'
    echo ""

    # Actualizar configuración PAM y habilitar creación automática de carpetas home
    print_step "Actualizando configuración PAM (incluyendo mkhomedir para crear /home automáticamente)..."
    if command -v pam-auth-update &> /dev/null; then
        # Habilitar perfiles de paquete y pam_mkhomedir
        DEBIAN_FRONTEND=noninteractive pam-auth-update --package --enable mkhomedir
        print_success "Configuración PAM actualizada (pam_himmelblau y pam_mkhomedir habilitados)"
    else
        print_warning "pam-auth-update no disponible, omitiendo..."
    fi

    # Reiniciar servicios de Himmelblau
    print_step "Reiniciando servicios de Himmelblau..."
    systemctl daemon-reload
    systemctl restart himmelblaud himmelblaud-tasks himmelblaud-orchestrator 2>/dev/null || systemctl restart himmelblaud
    sleep 3

    if systemctl is-active --quiet himmelblaud; then
        print_success "Servicios de Himmelblau reiniciados correctamente"
    else
        print_error "Error al reiniciar el servicio himmelblaud"
        systemctl status himmelblaud
        return 1
    fi

    # Configuración de sudo (opcional)
    echo ""
    print_step "Configuración de permisos sudo (opcional)"
    echo ""
    local GIVE_SUDO=false
    if has_tui; then
        if whiptail --title "Permisos Administrativos" \
            --yesno "¿Desea otorgar permisos de administrador (sudo) a ${ENTRA_USER}?" 11 70; then
            GIVE_SUDO=true
        fi
    else
        read -p "¿Desea dar permisos de sudo a ${ENTRA_USER}? (s/N): " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Ss]$ ]]; then
            GIVE_SUDO=true
        fi
    fi

    if [ "$GIVE_SUDO" = true ]; then
        # Crear archivo de configuración en sudoers.d (incluyendo UPN y nombre corto POSIX)
        SHORT_USER="${ENTRA_USER%%@*}"
        SUDO_FILE="/etc/sudoers.d/himmelblau_${ENTRA_USER//[@.]/_}"
        cat << EOF > "$SUDO_FILE"
${ENTRA_USER} ALL=(ALL:ALL) ALL
${SHORT_USER} ALL=(ALL:ALL) ALL
EOF
        chmod 0440 "$SUDO_FILE"
        
        print_success "Permisos sudo configurados para ${ENTRA_USER} (${SHORT_USER})"
    else
        print_info "Se omitió la configuración de sudo"
    fi

    # Configuración de accesos directos de Microsoft 365 (paquete o365 de Himmelblau)
    print_step "Configurando accesos directos de Microsoft 365 en el escritorio..."
    mkdir -p /etc/skel/Escritorio
    declare -a O365_TARGET_DIRS=("/etc/skel/Escritorio:root")

    for u_dir in /home/*; do
        [ -d "$u_dir" ] || continue
        u_name=$(basename "$u_dir")
        case "$u_name" in root|nobody) continue ;; esac
        for dt in "Escritorio" "Desktop"; do
            if [ -d "$u_dir/$dt" ]; then
                O365_TARGET_DIRS+=("$u_dir/$dt:$u_name")
            fi
        done
    done

    for o365_app in "o365-word:word.desktop" "o365-excel:excel.desktop" "o365-outlook:outlook.desktop" "o365-powerpoint:powerpoint.desktop" "o365-onedrive:onedrive.desktop"; do
        IFS=":" read -r app_id out_file <<< "$o365_app"
        src="/usr/share/applications/${app_id}.desktop"
        if [ -f "$src" ]; then
            for target in "${O365_TARGET_DIRS[@]}"; do
                dir="${target%%:*}"
                user="${target##*:}"
                mkdir -p "$dir"
                cp -u "$src" "$dir/$out_file"
                chmod +x "$dir/$out_file"
                chown "$user:$user" "$dir/$out_file" 2>/dev/null || true
                if [ "$user" != "root" ]; then
                    runuser -u "$user" -- gio set "$dir/$out_file" metadata::trusted true 2>/dev/null || true
                fi
            done
        fi
    done
    print_success "Accesos directos de Microsoft 365 (Word, Excel, Outlook...) configurados"

    # Configuración de clave SSH RSA 4096 para usuarios (Azure DevOps)
    print_step "Verificando par de claves SSH (RSA 4096) para Azure DevOps..."
    for u_dir in /home/*; do
        [ -d "$u_dir" ] || continue
        u_name=$(basename "$u_dir")
        case "$u_name" in root|nobody) continue ;; esac

        ssh_dir="$u_dir/.ssh"
        key_file="$ssh_dir/id_rsa"
        pub_file="$ssh_dir/id_rsa.pub"
        cfg_file="$ssh_dir/config"

        mkdir -p "$ssh_dir"
        chmod 700 "$ssh_dir"

        if [ ! -f "$key_file" ]; then
            ssh-keygen -t rsa -b 4096 -N "" -C "${u_name}@${DOMAIN:-contoso.com}" -f "$key_file" >/dev/null 2>&1 || true
            chmod 600 "$key_file" 2>/dev/null || true
            chmod 644 "$pub_file" 2>/dev/null || true
            print_success "Clave SSH RSA 4096 generada para $u_name: $pub_file"
        fi

        cat << 'CONFIG_EOF' > "$cfg_file"
Host ssh.dev.azure.com
  HostkeyAlgorithms +ssh-rsa
  PubkeyAcceptedAlgorithms +ssh-rsa
  IdentityFile ~/.ssh/id_rsa
CONFIG_EOF
        chmod 600 "$cfg_file"
        chown -R "$u_name:$u_name" "$ssh_dir" 2>/dev/null || true
    done

    mkdir -p /etc/skel/.ssh
    cat << 'CONFIG_EOF' > /etc/skel/.ssh/config
Host ssh.dev.azure.com
  HostkeyAlgorithms +ssh-rsa
  PubkeyAcceptedAlgorithms +ssh-rsa
  IdentityFile ~/.ssh/id_rsa
CONFIG_EOF
    chmod 600 /etc/skel/.ssh/config

    CONFIG_COMPLETED=true
    
    echo ""
    print_success "¡CONFIGURACIÓN COMPLETADA EXITOSAMENTE!"
    echo ""
}

################################################################################
# FASE 3: VERIFICACIÓN
################################################################################

verify_installation() {
    echo ""
    echo -e "${CYAN}═══════════════════════════════════════════════════════════════${NC}"
    echo -e "${CYAN}                  FASE 3: VERIFICACIÓN${NC}"
    echo -e "${CYAN}═══════════════════════════════════════════════════════════════${NC}"
    echo ""

    local ERRORS=0

    # 1. Verificar servicios de Himmelblau
    print_step "1. Verificando servicios de Himmelblau..."
    if systemctl is-active --quiet himmelblaud; then
        print_success "Servicio principal (himmelblaud) está activo"
        local STATUS=$(systemctl show himmelblaud --no-page --property=ActiveState,SubState)
        echo "   $STATUS"
    else
        print_error "Servicio himmelblaud NO está activo"
        ((ERRORS++))
    fi

    if systemctl is-active --quiet himmelblaud-tasks; then
        print_success "Servicio de tareas (himmelblaud-tasks) está activo"
    else
        print_warning "Servicio himmelblaud-tasks no está activo (se recomienda para asignar grupos locales)"
    fi

    if systemctl is-active --quiet himmelblaud-orchestrator; then
        print_success "Servicio orquestador OIDC (himmelblaud-orchestrator) está activo"
    fi

    # Comprobar que no existan unidades conflictivas en /etc/systemd/system/
    if ls /etc/systemd/system/himmelblaud*.service >/dev/null 2>&1; then
        print_error "Se encontraron unidades en /etc/systemd/system/ que pueden sobreescribir y romper la v4 (error 243/CREDENTIALS)"
        ((ERRORS++))
    fi

    # 2. Verificar estado de Entra ID vía aad-tool
    echo ""
    print_step "2. Verificando estado del demonio con aad-tool..."
    if command -v aad-tool &>/dev/null; then
        local AAD_STATUS
        AAD_STATUS=$(aad-tool status 2>&1 || true)
        if echo "$AAD_STATUS" | grep -q "working"; then
            print_success "aad-tool status: $AAD_STATUS"
        else
            print_warning "aad-tool status devolvió: $AAD_STATUS"
        fi
        
        local TPM_STATUS
        TPM_STATUS=$(aad-tool tpm 2>&1 || true)
        print_info "Estado TPM: $TPM_STATUS"
    else
        print_warning "aad-tool no encontrado en el PATH"
    fi

    # 3. Verificar configuración de nsswitch.conf
    echo ""
    print_step "3. Verificando /etc/nsswitch.conf..."
    if [ -f /etc/nsswitch.conf ]; then
        if grep -q "himmelblau" /etc/nsswitch.conf; then
            print_success "nsswitch.conf contiene configuración de himmelblau"
            echo ""
            echo "   Configuración actual:"
            grep -E "^(passwd|group|shadow):" /etc/nsswitch.conf | sed 's/^/   /'
        else
            print_error "nsswitch.conf NO contiene 'himmelblau'"
            ((ERRORS++))
        fi
    else
        print_error "/etc/nsswitch.conf no existe"
        ((ERRORS++))
    fi

    # 4. Verificar configuración de himmelblau.conf
    echo ""
    print_step "4. Verificando /etc/himmelblau/himmelblau.conf..."
    if [ -f /etc/himmelblau/himmelblau.conf ]; then
        print_success "Archivo de configuración existe"
        
        # Extraer dominio configurado
        local CONF_DOMAIN=$(grep -E "^domains? =" /etc/himmelblau/himmelblau.conf | head -1 | cut -d'=' -f2 | tr -d ' ')
        if [ -n "$CONF_DOMAIN" ]; then
            print_success "Dominio configurado: $CONF_DOMAIN"
        else
            print_error "No se encontró dominio configurado"
            ((ERRORS++))
        fi
        
        echo ""
        echo "   Configuración actual:"
        grep -v "^#" /etc/himmelblau/himmelblau.conf | grep -v "^$" | sed 's/^/   /'
    else
        print_error "/etc/himmelblau/himmelblau.conf no existe"
        ((ERRORS++))
    fi

    # 5. Verificar configuración PAM (mkhomedir)
    echo ""
    print_step "5. Verificando configuración PAM (creación automática de /home)..."
    if grep -q "pam_mkhomedir.so" /etc/pam.d/common-session 2>/dev/null; then
        print_success "pam_mkhomedir está habilitado en /etc/pam.d/common-session"
    else
        print_warning "pam_mkhomedir NO está habilitado (los usuarios Entra ID nuevos no tendrán /home creado automáticamente)"
        print_info "Puedes habilitarlo ejecutando: sudo pam-auth-update --enable mkhomedir"
    fi

    # 6. Verificar paquetes instalados
    echo ""
    print_step "6. Verificando paquetes instalados..."
    local PACKAGES=("himmelblau" "pam-himmelblau" "nss-himmelblau" "himmelblau-sso" "himmelblau-broker" "himmelblau-orchestrator" "himmelblau-apparmor" "himmelblau-sshd-config")
    for pkg in "${PACKAGES[@]}"; do
        if dpkg -l 2>/dev/null | grep -q -E "^ii\s+${pkg}(:[^ ]+)?\s"; then
            local VERSION=$(dpkg -l 2>/dev/null | grep -E "^ii\s+${pkg}(:[^ ]+)?\s" | awk '{print $3}')
            print_success "$pkg instalado (versión: $VERSION)"
        else
            print_warning "$pkg no detectado o en estado incompleto"
        fi
    done

    # 7. Verificar logs recientes del servicio
    echo ""
    print_step "7. Últimas líneas del log del servicio:"
    echo ""
    journalctl -u himmelblaud -n 10 --no-pager 2>/dev/null | sed 's/^/   /' || print_warning "No se pudieron leer los logs"

    # Resumen
    echo ""
    echo "═══════════════════════════════════════════════════════════════"
    if [ $ERRORS -eq 0 ]; then
        echo -e "${GREEN}✓ VERIFICACIÓN COMPLETADA SIN ERRORES${NC}"
        echo "═══════════════════════════════════════════════════════════════"
        echo ""
        print_success "La instalación de Himmelblau es correcta"
    else
        echo -e "${RED}✗ ENCONTRADOS $ERRORS ERROR(ES)${NC}"
        echo "═══════════════════════════════════════════════════════════════"
        echo ""
        print_warning "Se encontraron $ERRORS error(es) en la configuración"
    fi
    echo ""

    # Prueba de conectividad / usuario (opcional)
    if [ $ERRORS -eq 0 ]; then
        if [ -n "$ENTRA_USER" ]; then
            local TEST_USER=false
            if has_tui; then
                if whiptail --title "Prueba de Integración Entra ID" \
                    --yesno "¿Desea probar la resolución y mapeo del usuario ${ENTRA_USER} en el sistema?" 10 70; then
                    TEST_USER=true
                fi
            else
                read -p "¿Desea probar la resolución de ${ENTRA_USER}? (s/N): " -n 1 -r
                echo
                if [[ $REPLY =~ ^[Ss]$ ]]; then
                    TEST_USER=true
                fi
            fi

            if [ "$TEST_USER" = true ]; then
                print_info "Probando: id $ENTRA_USER"
                if id "$ENTRA_USER" 2>/dev/null; then
                    print_success "¡Usuario encontrado y mapeado correctamente en el sistema!"
                else
                    print_warning "No se pudo encontrar el usuario con 'id'"
                    print_info "Probando: getent passwd $ENTRA_USER"
                    if getent passwd "$ENTRA_USER" 2>/dev/null; then
                        print_success "¡Usuario encontrado en Entra ID / NSS!"
                    else
                        print_warning "No se encontró el usuario. Comprueba que el dominio y UPN son correctos."
                    fi
                fi
            fi
        fi
    fi

    return $ERRORS
}

################################################################################
# DESINSTALACIÓN COMPLETA
################################################################################

uninstall_himmelblau() {
    echo ""
    echo -e "${RED}╔═══════════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${RED}║                      DESINSTALACIÓN DE HIMMELBLAU                  ║${NC}"
    echo -e "${RED}╚═══════════════════════════════════════════════════════════════════╝${NC}"
    echo ""
    
    print_warning "Esta acción eliminará Himmelblau y sus configuraciones del sistema"
    echo ""
    local CONFIRM_UNINSTALL=false
    if has_tui; then
        if whiptail --title "Desinstalación de Himmelblau" \
            --yesno "¡ATENCIÓN!\nEsta acción eliminará Himmelblau y sus componentes del sistema.\n\n¿Estás seguro de que deseas continuar con la desinstalación?" 12 70; then
            CONFIRM_UNINSTALL=true
        fi
    else
        read -p "¿Estás seguro que deseas desinstalar Himmelblau? (s/N): " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Ss]$ ]]; then
            CONFIRM_UNINSTALL=true
        fi
    fi

    if [ "$CONFIRM_UNINSTALL" = false ]; then
        print_info "Desinstalación cancelada"
        return 0
    fi
    
    echo ""
    print_step "1. Deteniendo y deshabilitando servicios de Himmelblau..."
    systemctl stop himmelblaud himmelblaud-tasks himmelblaud-orchestrator 2>/dev/null || true
    systemctl disable himmelblaud himmelblaud-tasks himmelblaud-orchestrator 2>/dev/null || true
    rm -f /etc/systemd/system/himmelblaud*.service 2>/dev/null || true
    systemctl daemon-reload
    print_success "Servicios detenidos y deshabilitados"
    
    # Desinstalar paquetes
    print_step "2. Desinstalando paquetes de Himmelblau..."
    
    local PACKAGES_TO_REMOVE=(
        "himmelblau"
        "pam-himmelblau"
        "nss-himmelblau"
        "himmelblau-sso"
        "himmelblau-sso-policies"
        "himmelblau-broker"
        "himmelblau-orchestrator"
        "himmelblau-apparmor"
        "himmelblau-sshd-config"
        "himmelblau-qr-greeter"
        "o365"
    )
    local REMOVED_COUNT=0
    
    for pkg in "${PACKAGES_TO_REMOVE[@]}"; do
        if dpkg -l 2>/dev/null | grep -q "^ii.*$pkg"; then
            print_info "Eliminando $pkg..."
            apt-get remove -y "$pkg" > /dev/null 2>&1 || true
            apt-get purge -y "$pkg" > /dev/null 2>&1 || true
            ((REMOVED_COUNT++))
        fi
    done
    
    if [ $REMOVED_COUNT -gt 0 ]; then
        print_success "Eliminados $REMOVED_COUNT paquetes"
        apt-get autoremove -y > /dev/null 2>&1 || true
    else
        print_info "No se encontraron paquetes instalados"
    fi
    
    # Restaurar nsswitch.conf
    print_step "3. Restaurando archivos de configuración del sistema..."
    
    LATEST_BACKUP=$(ls -t /etc/nsswitch.conf.backup.* 2>/dev/null | head -1)
    if [ -n "$LATEST_BACKUP" ]; then
        cp "$LATEST_BACKUP" /etc/nsswitch.conf
        print_success "Archivo /etc/nsswitch.conf restaurado desde backup"
    else
        print_warning "No se encontró backup de nsswitch.conf"
        print_info "Eliminando configuración de Himmelblau manualmente..."
        
        # Restaurar configuración por defecto de Ubuntu
        cat > /etc/nsswitch.conf << 'EOF'
# /etc/nsswitch.conf
#
# Example configuration of GNU Name Service Switch functionality.

passwd:         files systemd
group:          files systemd
shadow:         files
gshadow:        files

hosts:          files mdns4_minimal [NOTFOUND=return] dns
networks:       files

protocols:      db files
services:       db files
ethers:         db files
rpc:            db files

netgroup:       nis
EOF
        print_success "Configuración por defecto restaurada"
    fi
    
    # Manejar archivos de configuración de Himmelblau
    echo ""
    local DEL_CONFIG=false
    if has_tui; then
        if whiptail --title "Archivos de Configuración" \
            --yesno "¿Deseas eliminar los archivos de configuración (/etc/himmelblau)?\n\n(Se creará una copia de respaldo en /root/ antes de eliminarlos)" 12 72; then
            DEL_CONFIG=true
        fi
    else
        read -p "¿Deseas eliminar los archivos de configuración de Himmelblau? (s/N): " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Ss]$ ]]; then
            DEL_CONFIG=true
        fi
    fi

    if [ "$DEL_CONFIG" = true ]; then
        print_step "4. Eliminando archivos de configuración..."
        if [ -d /etc/himmelblau ]; then
            # Crear backup final antes de eliminar
            BACKUP_DIR="/root/himmelblau_backup_$(date +%Y%m%d_%H%M%S)"
            mkdir -p "$BACKUP_DIR"
            cp -r /etc/himmelblau "$BACKUP_DIR/" 2>/dev/null || true
            print_info "Backup final guardado en: $BACKUP_DIR"
            
            rm -rf /etc/himmelblau
            print_success "Archivos de configuración eliminados"
        else
            print_info "No se encontraron archivos de configuración"
        fi
    else
        print_info "Archivos de configuración conservados en /etc/himmelblau"
    fi
    
    # Manejar paquetes descargados
    echo ""
    if [ -n "$SUDO_USER" ]; then
        DOWNLOAD_DIR="/home/$SUDO_USER/Downloads/himmelblau_packages"
    else
        DOWNLOAD_DIR="$HOME/Downloads/himmelblau_packages"
    fi
    
    if [ -d "$DOWNLOAD_DIR" ]; then
        local DEL_PKGS=false
        if has_tui; then
            if whiptail --title "Paquetes Descargados" \
                --yesno "¿Deseas eliminar los paquetes .deb descargados en:\n${DOWNLOAD_DIR}?" 11 72; then
                DEL_PKGS=true
            fi
        else
            read -p "¿Deseas eliminar los paquetes descargados en $DOWNLOAD_DIR? (s/N): " -n 1 -r
            echo
            if [[ $REPLY =~ ^[Ss]$ ]]; then
                DEL_PKGS=true
            fi
        fi

        if [ "$DEL_PKGS" = true ]; then
            rm -rf "$DOWNLOAD_DIR"
            print_success "Paquetes descargados eliminados"
        else
            print_info "Paquetes conservados en: $DOWNLOAD_DIR"
        fi
    fi
    
    # Limpiar archivos sudo si existen
    print_step "5. Limpiando configuraciones sudo de Himmelblau..."
    SUDO_FILES=$(ls /etc/sudoers.d/himmelblau_* 2>/dev/null)
    if [ -n "$SUDO_FILES" ]; then
        rm -f /etc/sudoers.d/himmelblau_*
        print_success "Configuraciones sudo eliminadas"
    else
        print_info "No se encontraron configuraciones sudo"
    fi
    
    # Resumen final
    echo ""
    echo -e "${GREEN}═══════════════════════════════════════════════════════════════${NC}"
    echo -e "${GREEN}           DESINSTALACIÓN COMPLETADA${NC}"
    echo -e "${GREEN}═══════════════════════════════════════════════════════════════${NC}"
    echo ""
    print_success "Himmelblau ha sido desinstalado del sistema"
    echo ""
    print_info "Archivos que pueden quedar:"
    echo "   - Backups en /etc/nsswitch.conf.backup.*"
    echo "   - Backups en /etc/himmelblau/*.backup.* (si no eliminaste configuración)"
    echo "   - Backup final en /root/himmelblau_backup_* (si elegiste eliminar config)"
    echo ""
}

################################################################################
# RESUMEN FINAL
################################################################################

show_final_summary() {
    echo ""
    echo -e "${GREEN}╔═══════════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${GREEN}║                                                                   ║${NC}"
    echo -e "${GREEN}║        🎉 INSTALACIÓN COMPLETADA EXITOSAMENTE 🎉                  ║${NC}"
    echo -e "${GREEN}║                                                                   ║${NC}"
    echo -e "${GREEN}╚═══════════════════════════════════════════════════════════════════╝${NC}"
    echo ""
    print_info "Resumen de la configuración:"
    echo ""
    echo "   🌐 Dominio:  $DOMAIN"
    echo "   👤 Usuario:  $ENTRA_USER"
    echo "   ✅ Servicio: $(systemctl is-active himmelblaud 2>/dev/null || echo 'inactivo')"
    echo ""
    echo -e "${YELLOW}═══════════════════════════════════════════════════════════════${NC}"
    echo -e "${YELLOW}                    PASOS SIGUIENTES${NC}"
    echo -e "${YELLOW}═══════════════════════════════════════════════════════════════${NC}"
    echo ""
    print_info "1. Probar autenticación del usuario:"
    echo "   getent passwd ${ENTRA_USER}"
    echo ""
    print_info "2. Para iniciar sesión gráficamente:"
    echo "   - Cierra sesión del usuario actual"
    echo "   - En la pantalla de login, ingresa: ${ENTRA_USER}"
    echo "   - Usa tu contraseña de Azure AD/Entra ID"
    echo ""
    print_info "3. Si es necesario, reinicia el sistema:"
    echo "   sudo reboot"
    echo ""
    print_warning "IMPORTANTE: Asegúrate de tener otro usuario con sudo activo"
    print_warning "antes de cerrar sesión, por si hay problemas."
    echo ""
}

################################################################################
# MENÚ PRINCIPAL
################################################################################

show_menu() {
    echo ""
    echo -e "${CYAN}═══════════════════════════════════════════════════════════════${NC}"
    echo -e "${CYAN}                    MENÚ PRINCIPAL${NC}"
    echo -e "${CYAN}═══════════════════════════════════════════════════════════════${NC}"
    echo ""
    echo "  1) Instalación completa automática (recomendado)"
    echo "  2) Solo instalación de paquetes"
    echo "  3) Solo configuración"
    echo "  4) Solo verificación"
    echo "  5) Desinstalar Himmelblau completamente"
    echo "  6) Salir"
    echo ""
}

################################################################################
# MAIN
################################################################################

main() {
    show_banner
    check_root
    check_ubuntu_version
    check_time_sync
    check_installation_status

    # Si se pasa argumento --auto, ejecutar instalación completa
    if [ "$1" = "--auto" ] || [ "$1" = "-a" ]; then
        print_info "Modo automático activado"
        install_himmelblau
        configure_himmelblau
        verify_installation
        show_final_summary
        exit 0
    fi

    # Menú interactivo
    while true; do
        local choice=""
        if has_tui; then
            choice=$(whiptail --title "INSTALADOR UNIFICADO DE HIMMELBLAU" \
                --menu "Ubuntu 22.04 / 24.04 / 25.10 + Microsoft Entra ID / Azure AD\n\nSeleccione una opción y presione Enter:" 18 78 6 \
                "1" "Instalación completa automática (recomendado)" \
                "2" "Solo instalación de paquetes" \
                "3" "Solo configuración" \
                "4" "Solo verificación del estado" \
                "5" "Desinstalar Himmelblau completamente" \
                "6" "Salir" 3>&1 1>&2 2>&3)
            
            # Si el usuario pulsa Cancelar o ESC
            if [ $? -ne 0 ]; then
                print_info "Operación cancelada por el usuario. Saliendo..."
                exit 0
            fi
        else
            show_menu
            read -p "Seleccione una opción [1-6]: " choice
        fi
        
        case $choice in
            1)
                install_himmelblau
                configure_himmelblau
                verify_installation
                show_final_summary
                break
                ;;
            2)
                install_himmelblau
                ;;
            3)
                configure_himmelblau
                ;;
            4)
                verify_installation
                ;;
            5)
                uninstall_himmelblau
                break
                ;;
            6)
                print_info "Saliendo..."
                exit 0
                ;;
            *)
                if ! has_tui; then
                    print_error "Opción inválida. Por favor seleccione 1-6."
                fi
                ;;
        esac
    done
}

# Ejecutar script principal
main "$@"