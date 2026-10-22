#!/usr/bin/env bash
# ==============================================================================
# Installer for Tabby Connection Homepage Pro
# Author: blakpat
# Repository: https://github.com/blakpat/Linux/tree/main/tabby-connection-homepage-pro
# ==============================================================================

set -e

# Terminal colors
BOLD='\033[1m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TABBY_CONFIG_DIR="${XDG_CONFIG_HOME:-$HOME/.config}/tabby"
TABBY_PLUGINS_DIR="$TABBY_CONFIG_DIR/plugins"
PLUGIN_TARGET_DIR="$TABBY_PLUGINS_DIR/node_modules/tabby-connection-homepage"
PLUGIN_PRO_TARGET_DIR="$TABBY_PLUGINS_DIR/node_modules/tabby-connection-homepage-pro"

echo -e "${BOLD}${BLUE}====================================================${NC}"
echo -e "${BOLD}${BLUE}   🚀 Tabby Connection Homepage Pro - Installer    ${NC}"
echo -e "${BOLD}${BLUE}====================================================${NC}\n"

MODE="copy"
for arg in "$@"; do
    case "$arg" in
        --link|-l)
            MODE="link"
            ;;
        --help|-h)
            echo "Usage: ./install.sh [OPTIONS]"
            echo ""
            echo "Options:"
            echo "  --link, -l    Create symbolic link instead of copying (ideal for development)"
            echo "  --help, -h    Show this help message"
            exit 0
            ;;
    esac
done

# 1. Check if Tabby is installed or config directory exists
echo -e "${BLUE}[1/4]${NC} Checking Tabby configuration..."
if [ ! -d "$TABBY_CONFIG_DIR" ]; then
    echo -e "${YELLOW}Tabby config directory not found at $TABBY_CONFIG_DIR. Creating it...${NC}"
    mkdir -p "$TABBY_CONFIG_DIR"
fi

mkdir -p "$TABBY_PLUGINS_DIR/node_modules"

# 2. Backup existing installation if present
echo -e "${BLUE}[2/4]${NC} Backing up existing plugin (if any)..."
if [ -d "$PLUGIN_TARGET_DIR" ] && [ ! -L "$PLUGIN_TARGET_DIR" ]; then
    BACKUP_DIR="$TABBY_PLUGINS_DIR/node_modules/.tabby-connection-homepage.backup-$(date +%Y%m%d%H%M%S)"
    cp -r "$PLUGIN_TARGET_DIR" "$BACKUP_DIR" 2>/dev/null || true
    echo -e "${GREEN}✔${NC} Existing installation backed up to: $BACKUP_DIR"
fi

# 3. Deploy plugin
echo -e "${BLUE}[3/4]${NC} Deploying Tabby Connection Homepage Pro (${MODE} mode)..."
rm -rf "$PLUGIN_TARGET_DIR"
rm -rf "$PLUGIN_PRO_TARGET_DIR"

if [ "$MODE" = "link" ]; then
    ln -sf "$SCRIPT_DIR" "$PLUGIN_TARGET_DIR"
    ln -sf "$SCRIPT_DIR" "$PLUGIN_PRO_TARGET_DIR"
    echo -e "${GREEN}✔${NC} Symlink created from $SCRIPT_DIR"
else
    mkdir -p "$PLUGIN_TARGET_DIR"
    cp -r "$SCRIPT_DIR/dist" "$PLUGIN_TARGET_DIR/"
    cp "$SCRIPT_DIR/package.json" "$PLUGIN_TARGET_DIR/"
    cp "$SCRIPT_DIR/LICENSE" "$PLUGIN_TARGET_DIR/" 2>/dev/null || true
    cp "$SCRIPT_DIR/README.md" "$PLUGIN_TARGET_DIR/" 2>/dev/null || true
    cp -r "$SCRIPT_DIR/assets" "$PLUGIN_TARGET_DIR/" 2>/dev/null || true

    mkdir -p "$PLUGIN_PRO_TARGET_DIR"
    cp -r "$SCRIPT_DIR/dist" "$PLUGIN_PRO_TARGET_DIR/"
    cp "$SCRIPT_DIR/package.json" "$PLUGIN_PRO_TARGET_DIR/"
    cp "$SCRIPT_DIR/LICENSE" "$PLUGIN_PRO_TARGET_DIR/" 2>/dev/null || true
    cp "$SCRIPT_DIR/README.md" "$PLUGIN_PRO_TARGET_DIR/" 2>/dev/null || true
    cp -r "$SCRIPT_DIR/assets" "$PLUGIN_PRO_TARGET_DIR/" 2>/dev/null || true
    echo -e "${GREEN}✔${NC} Files copied to Tabby plugin directory."
fi

# 4. Update Tabby plugins package.json
echo -e "${BLUE}[4/4]${NC} Updating Tabby plugins registration..."
PKG_JSON="$TABBY_PLUGINS_DIR/package.json"
if [ ! -f "$PKG_JSON" ]; then
    cat << 'EOF' > "$PKG_JSON"
{
  "dependencies": {
    "tabby-connection-homepage": "^1.2.2",
    "tabby-connection-homepage-pro": "*"
  }
}
EOF
else
    # Update or add using node/python
    python3 -c "
import json, os
path = '$PKG_JSON'
try:
    with open(path, 'r') as f:
        data = json.load(f)
except Exception:
    data = {}
if 'dependencies' not in data or not isinstance(data['dependencies'], dict):
    data['dependencies'] = {}
data['dependencies']['tabby-connection-homepage'] = '^1.2.2'
data['dependencies']['tabby-connection-homepage-pro'] = '*'
with open(path, 'w') as f:
    json.dump(data, f, indent=2)
" 2>/dev/null || true
fi

echo -e "\n${BOLD}${GREEN}====================================================${NC}"
echo -e "${BOLD}${GREEN}   🎉 Installation completed successfully!         ${NC}"
echo -e "${BOLD}${GREEN}====================================================${NC}\n"
echo -e "Next steps:"
echo -e "  1. If Tabby is running, reload it with ${BOLD}Ctrl + Shift + R${NC} or restart Tabby."
echo -e "  2. Open the Homepage tab to enjoy the new UI/UX, categories, color customization, and multi-language support!"
echo -e "  3. To uninstall at any time, run: ${BOLD}./uninstall.sh${NC}\n"
