#!/bin/bash

################################################################################
# Script de Verificación de Himmelblau
# Verifica que la instalación y configuración sean correctas
################################################################################

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Función para imprimir mensajes
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

# Banner
echo -e "${BLUE}"
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║      Verificación de Instalación de Himmelblau                 ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo -e "${NC}"

ERRORS=0

# Verificar que se ejecuta como root
if [ "$EUID" -ne 0 ]; then 
    print_error "Este script debe ejecutarse como root (sudo)"
    exit 1
fi

# 1. Verificar servicios de Himmelblau
echo ""
print_info "1. Verificando servicios de Himmelblau..."
if systemctl is-active --quiet himmelblaud; then
    print_success "Servicio himmelblaud está activo"
    STATUS=$(systemctl show himmelblaud --no-page --property=ActiveState,SubState)
    echo "   $STATUS"
else
    print_error "Servicio himmelblaud NO está activo"
    ((ERRORS++))
    systemctl status himmelblaud --no-pager
fi

if systemctl is-active --quiet himmelblaud-tasks; then
    print_success "Servicio himmelblaud-tasks está activo"
else
    print_warning "Servicio himmelblaud-tasks no está activo (se recomienda para asignar grupos locales)"
fi

if systemctl is-active --quiet himmelblaud-orchestrator; then
    print_success "Servicio himmelblaud-orchestrator está activo"
fi

# Comprobar que no existan unidades obsoletas en /etc/systemd/system/
if ls /etc/systemd/system/himmelblaud*.service >/dev/null 2>&1; then
    print_error "Se detectaron unidades en /etc/systemd/system/ que pueden romper la v4 (error 243/CREDENTIALS)"
    ((ERRORS++))
fi

# 2. Verificar estado de Entra ID vía aad-tool
echo ""
print_info "2. Verificando comunicación con Entra ID vía aad-tool..."
if command -v aad-tool &>/dev/null; then
    AAD_STATUS=$(aad-tool status 2>&1 || true)
    if echo "$AAD_STATUS" | grep -q "working"; then
        print_success "aad-tool status: $AAD_STATUS"
    else
        print_warning "aad-tool status devolvió: $AAD_STATUS"
    fi
    
    TPM_STATUS=$(aad-tool tpm 2>&1 || true)
    print_info "Estado TPM: $TPM_STATUS"
else
    print_warning "aad-tool no encontrado en el PATH"
fi

# 3. Verificar configuración de nsswitch.conf
echo ""
print_info "3. Verificando /etc/nsswitch.conf..."
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
print_info "4. Verificando /etc/himmelblau/himmelblau.conf..."
if [ -f /etc/himmelblau/himmelblau.conf ]; then
    print_success "Archivo de configuración existe"
    
    # Extraer dominio configurado
    DOMAIN=$(grep -E "^domains? =" /etc/himmelblau/himmelblau.conf | head -1 | cut -d'=' -f2 | tr -d ' ')
    if [ -n "$DOMAIN" ]; then
        print_success "Dominio configurado: $DOMAIN"
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
print_info "5. Verificando configuración PAM (creación automática de /home)..."
if grep -q "pam_mkhomedir.so" /etc/pam.d/common-session 2>/dev/null; then
    print_success "pam_mkhomedir está habilitado en /etc/pam.d/common-session"
else
    print_warning "pam_mkhomedir NO está habilitado (los usuarios Entra ID nuevos no tendrán /home creado automáticamente)"
    print_info "Puedes habilitarlo ejecutando: sudo pam-auth-update --enable mkhomedir"
fi

# 6. Verificar paquetes instalados
echo ""
print_info "6. Verificando paquetes instalados..."
PACKAGES=("himmelblau" "pam-himmelblau" "nss-himmelblau" "himmelblau-sso" "himmelblau-broker" "himmelblau-orchestrator" "himmelblau-apparmor" "himmelblau-sshd-config")
for pkg in "${PACKAGES[@]}"; do
    if dpkg -l 2>/dev/null | grep -q -E "^ii\s+${pkg}(:[^ ]+)?\s"; then
        VERSION=$(dpkg -l 2>/dev/null | grep -E "^ii\s+${pkg}(:[^ ]+)?\s" | awk '{print $3}')
        print_success "$pkg instalado (versión: $VERSION)"
    else
        print_warning "$pkg no detectado o incompleto"
    fi
done

# 7. Verificar logs del servicio
echo ""
print_info "7. Últimas líneas del log del servicio:"
echo ""
journalctl -u himmelblaud -n 10 --no-pager | sed 's/^/   /'

# Resumen
echo ""
echo "═══════════════════════════════════════════════════════════════"
if [ $ERRORS -eq 0 ]; then
    echo -e "${GREEN}✓ VERIFICACIÓN COMPLETADA SIN ERRORES${NC}"
    echo "═══════════════════════════════════════════════════════════════"
    echo ""
    print_info "La instalación de Himmelblau parece correcta"
    echo ""
    print_info "Para probar la autenticación de un usuario:"
    if [ -n "$DOMAIN" ]; then
        echo "   getent passwd usuario@${DOMAIN}"
    else
        echo "   getent passwd usuario@tudominio.com"
    fi
else
    echo -e "${RED}✗ VERIFICACIÓN COMPLETADA CON $ERRORS ERROR(ES)${NC}"
    echo "═══════════════════════════════════════════════════════════════"
    echo ""
    print_warning "Se encontraron $ERRORS error(es) en la configuración"
    print_info "Revisa los errores anteriores y ejecuta de nuevo la configuración"
fi
echo ""

# Prueba de conectividad (opcional)
if [ $ERRORS -eq 0 ] && [ -n "$DOMAIN" ]; then
    echo ""
    read -p "¿Desea probar la conectividad con Azure AD ahora? (s/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Ss]$ ]]; then
        read -p "Ingrese un usuario para probar (usuario@${DOMAIN}): " TEST_USER
        if [ -n "$TEST_USER" ]; then
            print_info "Probando: getent passwd $TEST_USER"
            if getent passwd "$TEST_USER"; then
                print_success "¡Usuario encontrado en Azure AD!"
            else
                print_warning "No se pudo encontrar el usuario"
                print_info "Esto es normal si el usuario aún no ha iniciado sesión"
                print_info "O si hay problemas de conectividad con Azure AD"
            fi
        fi
    fi
fi

echo ""
exit $ERRORS
