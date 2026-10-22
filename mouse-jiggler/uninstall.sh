#!/usr/bin/env bash
# ==============================================================================
# Mouse Jiggler - Desinstalador
# ==============================================================================

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}=== Desinstalando Mouse Jiggler ===${NC}"

# Detener proceso
if pgrep -f "mouse-jiggler" >/dev/null 2>&1; then
    echo "Deteniendo procesos activos..."
    pkill -f "mouse-jiggler" || true
fi

# Eliminar ficheros instalados
rm -f "$HOME/.local/bin/mouse-jiggler"
rm -f "$HOME/.local/share/applications/mouse-jiggler.desktop"
rm -f "$HOME/.config/autostart/mouse-jiggler.desktop"
rm -f "$HOME/.local/share/icons/hicolor/scalable/apps/mouse-jiggler-active.svg"
rm -f "$HOME/.local/share/icons/hicolor/scalable/apps/mouse-jiggler-inactive.svg"
rm -rf "$HOME/.config/mouse-jiggler"
rm -f "/tmp/mouse_jiggler.pid"

update-desktop-database "$HOME/.local/share/applications" 2>/dev/null || true
gtk-update-icon-cache -f -t "$HOME/.local/share/icons/hicolor" 2>/dev/null || true

echo -e "${GREEN}✓ Mouse Jiggler ha sido desinstalado por completo.${NC}"
