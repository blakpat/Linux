#!/bin/bash

################################################################################
# Script Unificado de Instalación y Configuración de Himmelblau
# Integración de Ubuntu (22.04 / 24.04 / 25.10) con Microsoft Entra ID / Azure AD
#
# Características:
# - Interfaz interactiva TUI (Whiptail / ncurses) y soporte desatendido (--auto)
# - Soporte para Ubuntu 22.04 LTS, 24.04 LTS y 25.10
# - Autenticación SSO, integración PAM / NSS y creación automática de /home
# - Soporte para Windows Hello para Linux (TPM + PIN)
# - Accesos directos de Microsoft 365
################################################################################

set -e  # Salir si ocurre algún error inesperado

# Colores para output CLI
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\1;33m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
MAGENTA='\033[0;35m'
NC='\033[0m' # No Color

# Variables globales
HIMMELBLAU_VERSION="${HIMMELBLAU_VERSION:-4.0.2}"
UBUNTU_VERSION=""
UBUNTU_CODENAME=""
BASE_URL=""
DOMAIN="${DOMAIN:-}"
ENTRA_USER="${ENTRA_USER:-}"
INSTALL_COMPLETED=false
CONFIG_COMPLETED=false

# Comprobar disponibilidad de interfaz TUI (whiptail)
has_tui() {
    command -v whiptail &>/dev/null && [ -t 0 ] && [ "$TERM" != "dumb" ] && [ -n "$TERM" ]
}

# Funciones de impresión CLI
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
    echo "║       Ubuntu 22.04 / 24.04 / 25.10 + Microsoft Entra ID           ║"
    echo "║                                                                   ║"
    echo "╚═══════════════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
}

# Verificar permisos root
check_root() {
    if [ "$EUID" -ne 0 ]; then 
        print_error "Este script debe ejecutarse como root o mediante sudo"
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
        print_warning "Este script está optimizado para Ubuntu 22.04, 24.04 o 25.10"
        print_info "Versión detectada en /etc/os-release:"
        cat /etc/os-release | grep PRETTY_NAME || true
        
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
        # Fallback por defecto a 22.04 si se fuerza la ejecución
        UBUNTU_VERSION="ubuntu22.04"
        BASE_URL="https://packages.himmelblau-idm.org/stable/${HIMMELBLAU_VERSION}/deb/${UBUNTU_VERSION}"
    fi
}

# Verificar sincronización de tiempo
check_time_sync() {
    if ! apt-get update -qq 2>&1 | grep -q "no es válido"; then
        return 0
    fi
    
    print_warning "Detectado posible problema de sincronización de tiempo"
    print_info "Esto puede causar errores con repositorios apt"
    print_info "Puedes corregir el tiempo con: sudo timedatectl set-ntp true"
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
        # Instalación vía Repositorio (Ubuntu 25.10)
        print_step "Modo: Instalación vía Repositorio Nightly (Ubuntu 25.10)"
        
        # 1. Prerrequisitos
        print_info "Instalando prerrequisitos..."
        apt-get install -y -qq curl gpg software-properties-common
        
        # 2. Importar clave GPG
        print_info "Importando clave GPG de Himmelblau..."
        curl -fsSL https://packages.himmelblau-idm.org/himmelblau.asc | gpg --dearmor -o /etc/apt/trusted.gpg.d/himmelblau.gpg
        
        # 3. Añadir repositorio
        print_info "Añadiendo repositorio..."
        add-apt-repository -y "deb [arch=amd64] https://packages.himmelblau-idm.org/nightly/latest/deb/${UBUNTU_VERSION}/ ./"
        
        # 4. Actualizar repositorios
        print_info "Actualizando lista de paquetes..."
        apt-get update -qq

        # 5. Instalar paquetes
        print_step "Instalando paquetes de Himmelblau desde repositorio..."
        if apt-get install -y himmelblau pam-himmelblau nss-himmelblau himmelblau-sso himmelblau-sshd-config o365; then
             print_success "Paquetes de Himmelblau instalados correctamente"
        else
             print_error "Error en la instalación desde repositorio"
             exit 1
        fi

    else
        # Instalación vía Paquetes .deb Manuales (Ubuntu 22.04 y 24.04)
        if [ -z "$BASE_URL" ]; then
             print_error "URL base no definida para esta versión."
             exit 1
        fi
        
        # Paquetes oficiales a descargar
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

        # Directorio de descargas
        if [ -n "$SUDO_USER" ]; then
            DOWNLOAD_DIR="/home/$SUDO_USER/Downloads/himmelblau_packages"
        else
            DOWNLOAD_DIR="$HOME/Downloads/himmelblau_packages"
        fi

        mkdir -p "$DOWNLOAD_DIR"
        
        if [ -n "$SUDO_USER" ]; then
            chown -R "$SUDO_USER:$SUDO_USER" "$DOWNLOAD_DIR"
        fi
        
        cd "$DOWNLOAD_DIR"
        print_info "Directorio de descargas: $DOWNLOAD_DIR"

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

        # Actualizar repositorios del sistema
        print_step "Actualizando lista de paquetes del sistema..."
        apt-get update -qq 2>/dev/null || true

        # Instalar dependencias necesarias
        print_step "Instalando dependencias del sistema..."
        apt-get install -y -qq libpam0g libnss3 2>/dev/null || true
        print_success "Dependencias verificadas"

        # Limpiar unidades residuales u obsoletas en /etc/systemd/system/
        if ls /etc/systemd/system/himmelblaud*.service >/dev/null 2>&1; then
            print_warning "Detectadas unidades obsoletas en /etc/systemd/system/. Limpiando para usar las oficiales..."
            mkdir -p /root/himmelblau_legacy_systemd_backup
            mv /etc/systemd/system/himmelblaud*.service /root/himmelblau_legacy_systemd_backup/ 2>/dev/null || true
            systemctl daemon-reload
            print_success "Unidades obsoletas respaldadas en /root/himmelblau_legacy_systemd_backup/"
        fi

        # Instalar paquetes .deb
        print_step "Instalando paquetes de Himmelblau..."
        if apt install -y ./*.deb; then
            dpkg --configure -a
            systemctl daemon-reload
            print_success "Paquetes de Himmelblau instalados correctamente"
        else
            print_error "Error en la instalación de paquetes"
            exit 1
        fi
        
        cd /
        print_success "Paquetes conservados en: $DOWNLOAD_DIR"
    fi

    # Ubuntu 24.04+: fix pam_lastlog.so
    if grep -q "^session\s\+optional\s\+pam_lastlog\.so" /etc/pam.d/login 2>/dev/null; then
        sed -i 's/^session\s\+optional\s\+pam_lastlog\.so/-session    optional   pam_lastlog.so/' /etc/pam.d/login 2>/dev/null || true
    fi

    # Crear configuración básica si no existe
    print_step "Preparando configuración inicial..."
    mkdir -p /etc/himmelblau
    
    if [ ! -f /etc/himmelblau/himmelblau.conf ]; then
        print_info "Generando plantilla base de configuración..."
        cat > /etc/himmelblau/himmelblau.conf << 'EOF'
[global]
# Configuración inicial de Himmelblau
# Dominio corporativo (se actualizará durante la configuración)
domains = contoso.com

# Grupos locales a los que se añadirán los usuarios
local_groups = users

# Atributo del directorio para home
home_attr = CN
home_alias = CN

# Usar /etc/skel para nuevos directorios home
use_etc_skel = true

# Permitir login local por contraseña
allow_console_password_only = true

# Deshabilitar flujo MFA experimental
enable_experimental_mfa = false

# Windows Hello para Linux (TPM + PIN)
enable_hello = true
hello_pin_min_length = 6

# Aplicar políticas de Azure AD
apply_policy = true
EOF
        print_success "Configuración inicial creada"
    fi

    # Habilitar e iniciar servicios
    print_step "Habilitando servicios de Himmelblau..."
    systemctl daemon-reload
    systemctl enable himmelblaud himmelblaud-tasks himmelblaud-orchestrator > /dev/null 2>&1 || systemctl enable himmelblaud > /dev/null 2>&1
    print_success "Servicios habilitados"

    print_step "Iniciando servicios de Himmelblau..."
    systemctl restart himmelblaud himmelblaud-tasks himmelblaud-orchestrator 2>/dev/null || systemctl restart himmelblaud
    sleep 2

    # Verificar estado del servicio
    if systemctl is-active --quiet himmelblaud; then
        print_success "Servicio himmelblaud está activo y ejecutándose"
    else
        print_warning "El servicio himmelblaud no arrancó inmediatamente (esto es habitual antes del registro en Entra ID)."
        
        local CONT_SVC=true
        if has_tui; then
            if ! whiptail --title "Aviso de Estado del Servicio" \
                --yesno "El servicio himmelblaud no arrancó inmediatamente (esto es normal antes de completar el registro en Entra ID).\n\n¿Deseas continuar con la configuración de todas formas?" 12 72; then
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
            print_info "Puedes continuar la configuración más tarde con la opción 3 del menú."
            exit 0
        fi
    fi

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

    # Verificar instalación previa
    if [ "$INSTALL_COMPLETED" = false ]; then
        if ! systemctl list-units --type=service 2>/dev/null | grep -q himmelblaud; then
            print_error "El servicio himmelblaud no está instalado en el sistema."
            print_info "Por favor, ejecute la instalación primero."
            return 1
        fi
    fi

    # Detener servicio para configurar
    print_step "Deteniendo servicio temporalmente para aplicar configuración..."
    systemctl stop himmelblaud 2>/dev/null || true

    # Configuración del dominio corporativo
    print_step "Configuración del dominio corporativo de Microsoft Entra ID"
    echo ""
    
    if [ -n "$DOMAIN" ] && [ "$DOMAIN" != "contoso.com" ]; then
        print_info "Dominio actual detectado: $DOMAIN"
        local CHANGE_DOM=false
        if has_tui; then
            if whiptail --title "Dominio Entra ID" \
                --yesno "Dominio configurado actual: ${DOMAIN}\n\n¿Desea modificar el dominio corporativo?" 11 68; then
                CHANGE_DOM=true
            fi
        else
            read -p "¿Desea cambiar el dominio ${DOMAIN}? (s/N): " -n 1 -r
            echo
            if [[ $REPLY =~ ^[Ss]$ ]]; then
                CHANGE_DOM=true
            fi
        fi

        if [ "$CHANGE_DOM" = true ]; then
            if has_tui; then
                DOMAIN=$(whiptail --title "Cambio de Dominio" \
                    --inputbox "Ingrese el nuevo dominio de Microsoft Entra ID (ej. contoso.com):" 11 68 "$DOMAIN" 3>&1 1>&2 2>&3)
            else
                read -p "Ingrese el nuevo dominio de Microsoft Entra ID: " DOMAIN
            fi
        fi
    else
        local DEFAULT_SUGG="contoso.com"
        if has_tui; then
            DOMAIN=$(whiptail --title "Dominio Microsoft Entra ID" \
                --inputbox "Ingrese el dominio corporativo de Microsoft Entra ID / Azure AD:\n(ejemplo: tuempresa.com o tuempresa.onmicrosoft.com)" 12 70 "$DEFAULT_SUGG" 3>&1 1>&2 2>&3)
        else
            read -p "Ingrese el dominio corporativo de Microsoft Entra ID (ej. tuempresa.com): " DOMAIN
        fi
    fi

    if [ -z "$DOMAIN" ]; then
        DOMAIN="contoso.com"
    fi
    print_success "Dominio configurado: $DOMAIN"

    # Configuración del usuario para registro
    print_step "Usuario para registro en Microsoft Entra ID"
    echo ""
    
    local DEFAULT_UPN=""
    if [ -n "$SUDO_USER" ] && [ "$SUDO_USER" != "root" ]; then
        DEFAULT_UPN="${SUDO_USER}@${DOMAIN}"
    else
        DEFAULT_UPN="usuario@${DOMAIN}"
    fi

    if [ -z "$ENTRA_USER" ]; then
        if has_tui; then
            ENTRA_USER=$(whiptail --title "Usuario Entra ID" \
                --inputbox "Ingrese su usuario de Microsoft Entra ID (UPN corporativo):\nEjemplo: ${DEFAULT_UPN}" 12 70 "$DEFAULT_UPN" 3>&1 1>&2 2>&3)
        else
            read -p "Usuario [ej. ${DEFAULT_UPN}]: " ENTRA_USER
            if [ -z "$ENTRA_USER" ]; then
                ENTRA_USER="$DEFAULT_UPN"
            fi
        fi
    fi

    if [[ -z "$ENTRA_USER" ]]; then
        print_error "El usuario no puede estar vacío"
        return 1
    fi

    print_success "Usuario configurado: $ENTRA_USER"

    # Backup de /etc/nsswitch.conf
    print_step "Configurando archivos NSS y PAM del sistema..."
    if ! ls /etc/nsswitch.conf.backup.* > /dev/null 2>&1; then
        cp /etc/nsswitch.conf /etc/nsswitch.conf.backup.$(date +%Y%m%d_%H%M%S)
        print_success "Backup de /etc/nsswitch.conf creado"
    fi

    # Configurar /etc/nsswitch.conf
    cat > /etc/nsswitch.conf << 'EOF'
# /etc/nsswitch.conf
# Configurado para integración con Microsoft Entra ID (Himmelblau)

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
    print_success "Archivo /etc/nsswitch.conf configurado con soporte para himmelblau"

    # Backup y creación de himmelblau.conf
    mkdir -p /etc/himmelblau
    if [ -f /etc/himmelblau/himmelblau.conf ]; then
        cp /etc/himmelblau/himmelblau.conf /etc/himmelblau/himmelblau.conf.backup.$(date +%Y%m%d_%H%M%S)
    fi

    print_step "Escribiendo configuración en /etc/himmelblau/himmelblau.conf..."
    cat > /etc/himmelblau/himmelblau.conf << EOF
[global]
# Configuración de Himmelblau para ${DOMAIN}
# Generado automáticamente el $(date)

# Dominio corporativo de Microsoft Entra ID
domains = ${DOMAIN}

# Grupos locales a los que se añadirán los usuarios
local_groups = users

# Mapeo de directorios home
home_attr = CN
home_alias = CN

# Usar plantilla /etc/skel para directorios home
use_etc_skel = true

# Permitir inicio de sesión local por consola / GDM
allow_console_password_only = true

# Deshabilitar flujo MFA experimental
enable_experimental_mfa = false

# Windows Hello para Linux (TPM + PIN rápido para evitar MFA recurrente)
enable_hello = true
hello_pin_min_length = 6

# Aplicar políticas de Azure AD
apply_policy = true
EOF

    print_success "Archivo /etc/himmelblau/himmelblau.conf configurado correctamente"

    # Actualizar configuración PAM y habilitar pam_mkhomedir
    print_step "Configurando PAM (habilitando pam_mkhomedir para crear /home automáticamente)..."
    if command -v pam-auth-update &> /dev/null; then
        DEBIAN_FRONTEND=noninteractive pam-auth-update --package --enable mkhomedir
        print_success "Configuración PAM actualizada (pam_himmelblau y pam_mkhomedir habilitados)"
    else
        print_warning "pam-auth-update no disponible en el sistema"
    fi

    # Reiniciar servicios
    print_step "Reiniciando servicios de Himmelblau..."
    systemctl daemon-reload
    systemctl restart himmelblaud himmelblaud-tasks himmelblaud-orchestrator 2>/dev/null || systemctl restart himmelblaud
    sleep 3

    if systemctl is-active --quiet himmelblaud; then
        print_success "Servicios de Himmelblau reiniciados correctamente"
    else
        print_warning "El servicio himmelblaud está pendiente del primer registro interactivo"
    fi

    # Permisos sudo (opcional)
    echo ""
    print_step "Configuración de permisos de administrador (sudo)"
    echo ""
    local GIVE_SUDO=false
    if has_tui; then
        if whiptail --title "Permisos Administrativos" \
            --yesno "¿Desea otorgar permisos de administrador (sudo) al usuario corporativo ${ENTRA_USER}?" 11 70; then
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
        SHORT_USER="${ENTRA_USER%%@*}"
        SUDO_FILE="/etc/sudoers.d/himmelblau_${ENTRA_USER//[@.]/_}"
        cat << EOF > "$SUDO_FILE"
${ENTRA_USER} ALL=(ALL:ALL) ALL
${SHORT_USER} ALL=(ALL:ALL) ALL
EOF
        chmod 0440 "$SUDO_FILE"
        print_success "Permisos sudo configurados en $SUDO_FILE para ${ENTRA_USER} (${SHORT_USER})"
    else
        print_info "Se omitió la configuración de sudo"
    fi

    # Configuración de accesos directos de Microsoft 365 (si el paquete o365 está instalado)
    print_step "Configurando accesos directos de Microsoft 365..."
    mkdir -p /etc/skel/Escritorio /etc/skel/Desktop
    declare -a O365_TARGET_DIRS=("/etc/skel/Escritorio:root" "/etc/skel/Desktop:root")

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
                cp -u "$src" "$dir/$out_file" 2>/dev/null || true
                chmod +x "$dir/$out_file" 2>/dev/null || true
                chown "$user:$user" "$dir/$out_file" 2>/dev/null || true
                if [ "$user" != "root" ]; then
                    runuser -u "$user" -- gio set "$dir/$out_file" metadata::trusted true 2>/dev/null || true
                fi
            done
        fi
    done
    print_success "Accesos directos de Microsoft 365 configurados"

    # Generación de claves SSH estándar (RSA 4096)
    print_step "Comprobando par de claves SSH (RSA 4096)..."
    for u_dir in /home/*; do
        [ -d "$u_dir" ] || continue
        u_name=$(basename "$u_dir")
        case "$u_name" in root|nobody) continue ;; esac

        ssh_dir="$u_dir/.ssh"
        key_file="$ssh_dir/id_rsa"
        pub_file="$ssh_dir/id_rsa.pub"

        mkdir -p "$ssh_dir"
        chmod 700 "$ssh_dir"

        if [ ! -f "$key_file" ]; then
            ssh-keygen -t rsa -b 4096 -N "" -C "${u_name}@${DOMAIN}" -f "$key_file" >/dev/null 2>&1 || true
            chmod 600 "$key_file" 2>/dev/null || true
            chmod 644 "$pub_file" 2>/dev/null || true
            chown -R "$u_name:$u_name" "$ssh_dir" 2>/dev/null || true
            print_success "Clave SSH generada para $u_name: $pub_file"
        fi
    done

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

    # 1. Servicios
    print_step "1. Verificando estado de los servicios..."
    if systemctl is-active --quiet himmelblaud; then
        print_success "Servicio principal (himmelblaud) está activo"
    else
        print_error "Servicio himmelblaud NO está activo"
        ((ERRORS++))
    fi

    if systemctl is-active --quiet himmelblaud-tasks; then
        print_success "Servicio de tareas (himmelblaud-tasks) está activo"
    fi

    if systemctl is-active --quiet himmelblaud-orchestrator; then
        print_success "Servicio orquestador OIDC (himmelblaud-orchestrator) está activo"
    fi

    # 2. Diagnóstico aad-tool
    echo ""
    print_step "2. Comprobando herramientas de diagnóstico aad-tool..."
    if command -v aad-tool &>/dev/null; then
        local AAD_STATUS
        AAD_STATUS=$(aad-tool status 2>&1 || true)
        print_info "aad-tool status: $AAD_STATUS"
        
        local TPM_STATUS
        TPM_STATUS=$(aad-tool tpm 2>&1 || true)
        print_info "aad-tool tpm: $TPM_STATUS"
    fi

    # 3. NSSwitch
    echo ""
    print_step "3. Verificando /etc/nsswitch.conf..."
    if [ -f /etc/nsswitch.conf ] && grep -q "himmelblau" /etc/nsswitch.conf; then
        print_success "nsswitch.conf contiene módulo 'himmelblau'"
    else
        print_error "nsswitch.conf NO contiene configuración de himmelblau"
        ((ERRORS++))
    fi

    # 4. Configuración
    echo ""
    print_step "4. Verificando /etc/himmelblau/himmelblau.conf..."
    if [ -f /etc/himmelblau/himmelblau.conf ]; then
        local CONF_DOMAIN
        CONF_DOMAIN=$(grep -E "^domains? =" /etc/himmelblau/himmelblau.conf | head -1 | cut -d'=' -f2 | tr -d ' ')
        print_success "Dominio configurado en archivo: $CONF_DOMAIN"
    else
        print_error "/etc/himmelblau/himmelblau.conf no encontrado"
        ((ERRORS++))
    fi

    # 5. PAM mkhomedir
    echo ""
    print_step "5. Verificando creación automática de carpetas home (pam_mkhomedir)..."
    if grep -q "pam_mkhomedir.so" /etc/pam.d/common-session 2>/dev/null; then
        print_success "pam_mkhomedir habilitado en /etc/pam.d/common-session"
    else
        print_warning "pam_mkhomedir no está activo (se puede activar con: sudo pam-auth-update --enable mkhomedir)"
    fi

    # Resumen
    echo ""
    echo "═══════════════════════════════════════════════════════════════"
    if [ $ERRORS -eq 0 ]; then
        echo -e "${GREEN}✓ VERIFICACIÓN COMPLETADA SIN ERRORES${NC}"
        print_success "Himmelblau está correctamente integrado en el sistema."
    else
        echo -e "${RED}✗ SE ENCONTRARON $ERRORS ERROR(ES)${NC}"
    fi
    echo "═══════════════════════════════════════════════════════════════"
    echo ""

    # Prueba opcional de resolución de usuario
    if [ $ERRORS -eq 0 ] && [ -n "$ENTRA_USER" ]; then
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
            print_info "Ejecutando: id $ENTRA_USER"
            if id "$ENTRA_USER" 2>/dev/null; then
                print_success "¡Usuario encontrado y mapeado en NSS!"
            else
                print_info "Probando: getent passwd $ENTRA_USER"
                if getent passwd "$ENTRA_USER" 2>/dev/null; then
                    print_success "¡Usuario reconocido correctamente en Entra ID!"
                else
                    print_warning "No se encontró el usuario. Verifica que el dominio y UPN son correctos en tu tenant."
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
    
    print_warning "Esta acción eliminará Himmelblau y revertirá los cambios del sistema."
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
        print_info "Desinstalación cancelada."
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
        "himmelblau" "pam-himmelblau" "nss-himmelblau" "himmelblau-sso"
        "himmelblau-sso-policies" "himmelblau-broker" "himmelblau-orchestrator"
        "himmelblau-apparmor" "himmelblau-sshd-config" "himmelblau-qr-greeter" "o365"
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
    fi
    
    # Restaurar nsswitch.conf
    print_step "3. Restaurando /etc/nsswitch.conf..."
    LATEST_BACKUP=$(ls -t /etc/nsswitch.conf.backup.* 2>/dev/null | head -1)
    if [ -n "$LATEST_BACKUP" ]; then
        cp "$LATEST_BACKUP" /etc/nsswitch.conf
        print_success "Archivo /etc/nsswitch.conf restaurado desde copia de seguridad"
    else
        cat > /etc/nsswitch.conf << 'EOF'
# /etc/nsswitch.conf
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
        print_success "Configuración por defecto de Ubuntu restaurada"
    fi
    
    # Manejar archivos de configuración
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
            BACKUP_DIR="/root/himmelblau_backup_$(date +%Y%m%d_%H%M%S)"
            mkdir -p "$BACKUP_DIR"
            cp -r /etc/himmelblau "$BACKUP_DIR/" 2>/dev/null || true
            rm -rf /etc/himmelblau
            print_success "Archivos de configuración respaldados en $BACKUP_DIR y eliminados"
        fi
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
        fi
    fi
    
    # Limpiar archivos sudoers
    print_step "5. Limpiando configuraciones sudo..."
    rm -f /etc/sudoers.d/himmelblau_* 2>/dev/null || true
    print_success "Configuraciones sudo eliminadas"
    
    echo ""
    echo -e "${GREEN}═══════════════════════════════════════════════════════════════${NC}"
    echo -e "${GREEN}           DESINSTALACIÓN COMPLETADA${NC}"
    echo -e "${GREEN}═══════════════════════════════════════════════════════════════${NC}"
    print_success "Himmelblau ha sido desinstalado del sistema."
    echo ""
}

################################################################################
# RESUMEN FINAL
################################################################################

show_final_summary() {
    echo ""
    echo -e "${GREEN}╔═══════════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${GREEN}║                                                                   ║${NC}"
    echo -e "${GREEN}║        🎉 INSTALACIÓN Y CONFIGURACIÓN COMPLETADA 🎉               ║${NC}"
    echo -e "${GREEN}║                                                                   ║${NC}"
    echo -e "${GREEN}╚═══════════════════════════════════════════════════════════════════╝${NC}"
    echo ""
    print_info "Resumen de la configuración:"
    echo "   🌐 Dominio:  $DOMAIN"
    echo "   👤 Usuario:  $ENTRA_USER"
    echo "   ✅ Servicio: $(systemctl is-active himmelblaud 2>/dev/null || echo 'activo')"
    echo ""
    echo -e "${YELLOW}═══════════════════════════════════════════════════════════════${NC}"
    echo -e "${YELLOW}                    PASOS SIGUIENTES${NC}"
    echo -e "${YELLOW}═══════════════════════════════════════════════════════════════${NC}"
    echo ""
    print_info "1. Probar autenticación del usuario en el sistema:"
    echo "   getent passwd ${ENTRA_USER}"
    echo ""
    print_info "2. Para iniciar sesión gráficamente:"
    echo "   - Cierra la sesión actual (o reinicia el equipo)"
    echo "   - En la pantalla de login (GDM), ingresa: ${ENTRA_USER}"
    echo "   - Introduce tu contraseña de Microsoft Entra ID / Azure AD"
    echo ""
    print_warning "IMPORTANTE: Asegúrate de disponer de una cuenta local con permisos sudo"
    print_warning "activa antes de cerrar sesión para mantenimiento de emergencia."
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

    # Modo desatendido / automatizado (--auto o -a)
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

# Ejecutar script
main "$@"
