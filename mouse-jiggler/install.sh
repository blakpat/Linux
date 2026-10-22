#!/usr/bin/env bash
# ==============================================================================
# Mouse Jiggler - Instalador automático para Ubuntu / Pop!_OS / Linux Mint / Debian
# ==============================================================================

set -e

GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BIN_SRC="$PROJECT_DIR/bin/mouse-jiggler"
ASSETS_SRC="$PROJECT_DIR/assets"
DESKTOP_SRC="$PROJECT_DIR/desktop/mouse-jiggler.desktop"

TARGET_BIN="$HOME/.local/bin"
TARGET_ICONS="$HOME/.local/share/icons/hicolor/scalable/apps"
TARGET_APPS="$HOME/.local/share/applications"
TARGET_AUTOSTART="$HOME/.config/autostart"

echo -e "${BLUE}===============================================${NC}"
echo -e "${BLUE}        Instalador de Mouse Jiggler           ${NC}"
echo -e "${BLUE}===============================================${NC}"

# 1. Comprobar e instalar dependencias APT
echo -e "\n${BLUE}[1/5] Verificando dependencias del sistema...${NC}"
DEPS=("python3" "python3-gi" "xdotool" "gir1.2-ayatanaappindicator3-0.1")
MISSING=()

for pkg in "${DEPS[@]}"; do
    if ! dpkg -s "$pkg" >/dev/null 2>&1; then
        MISSING+=("$pkg")
    fi
done

if [ ${#MISSING[@]} -gt 0 ]; then
    echo -e "${YELLOW}Instalando paquetes requeridos con apt: ${MISSING[*]}${NC}"
    sudo apt update
    sudo apt install -y "${MISSING[@]}"
else
    echo -e "${GREEN}✓ Todas las dependencias APT ya están instaladas.${NC}"
fi

# 2. Crear carpetas de destino en espacio de usuario
echo -e "\n${BLUE}[2/5] Creando carpetas de usuario...${NC}"
mkdir -p "$TARGET_BIN" "$TARGET_ICONS" "$TARGET_APPS" "$TARGET_AUTOSTART"

# 3. Instalar ejecutable
echo -e "\n${BLUE}[3/5] Instalando ejecutable en $TARGET_BIN...${NC}"
cp "$BIN_SRC" "$TARGET_BIN/mouse-jiggler"
chmod +x "$TARGET_BIN/mouse-jiggler"

# Asegurar que ~/.local/bin está en el PATH
if [[ ":$PATH:" != *":$HOME/.local/bin:"* ]]; then
    echo -e "${YELLOW}Aviso: Añade $HOME/.local/bin a tu PATH si aún no está añadido.${NC}"
fi

# 4. Instalar iconos
echo -e "\n${BLUE}[4/5] Instalando iconos SVG...${NC}"
cp "$ASSETS_SRC"/*.svg "$TARGET_ICONS/"
gtk-update-icon-cache -f -t "$HOME/.local/share/icons/hicolor" 2>/dev/null || true

# 5. Instalar acceso directo en el sistema y autoarranque
echo -e "\n${BLUE}[5/5] Configurando lanzador y autoarranque al iniciar sesión...${NC}"
sed "s|Exec=mouse-jiggler|Exec=$TARGET_BIN/mouse-jiggler|g" "$DESKTOP_SRC" > "$TARGET_APPS/mouse-jiggler.desktop"
cp "$TARGET_APPS/mouse-jiggler.desktop" "$TARGET_AUTOSTART/mouse-jiggler.desktop"
update-desktop-database "$TARGET_APPS" 2>/dev/null || true

# Reiniciar instancia si ya estaba corriendo
if pgrep -f "mouse-jiggler" >/dev/null 2>&1; then
    echo -e "\n${YELLOW}Reiniciando instancia en ejecución...${NC}"
    pkill -f "mouse-jiggler" || true
    sleep 1
fi

nohup "$TARGET_BIN/mouse-jiggler" >/dev/null 2>&1 &

echo -e "\n${GREEN}===============================================${NC}"
echo -e "${GREEN}✓ ¡Instalación completada con éxito!${NC}"
echo -e "${GREEN}===============================================${NC}"
echo -e "El botón ya está visible en la bandeja del panel."
echo -e "\nComandos útiles:"
echo -e "  ${BLUE}mouse-jiggler --toggle${NC}     Alternar ON / OFF"
echo -e "  ${BLUE}mouse-jiggler --move-now${NC}   Mover 1 píxel inmediatamente"
echo -e "  ${BLUE}mouse-jiggler --status${NC}     Consultar estado actual"
echo -e "  ${BLUE}mouse-jiggler --stop${NC}       Detener la aplicación"
