#!/usr/bin/env bash
# ==============================================================================
# Uninstaller for Tabby Connection Homepage Pro
# Author: blakpat
# ==============================================================================

set -e

BOLD='\033[1m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

TABBY_CONFIG_DIR="${XDG_CONFIG_HOME:-$HOME/.config}/tabby"
TABBY_PLUGINS_DIR="$TABBY_CONFIG_DIR/plugins"
PLUGIN_TARGET_DIR="$TABBY_PLUGINS_DIR/node_modules/tabby-connection-homepage"
PLUGIN_PRO_TARGET_DIR="$TABBY_PLUGINS_DIR/node_modules/tabby-connection-homepage-pro"

echo -e "${BOLD}${BLUE}Uninstalling Tabby Connection Homepage Pro...${NC}"

# Remove deployed directories
rm -rf "$PLUGIN_TARGET_DIR"
rm -rf "$PLUGIN_PRO_TARGET_DIR"

# Check for latest backup to restore
LATEST_BACKUP=$(ls -td "$TABBY_PLUGINS_DIR/node_modules/.tabby-connection-homepage.backup-"* 2>/dev/null | head -n 1 || true)
if [ -n "$LATEST_BACKUP" ] && [ -d "$LATEST_BACKUP" ]; then
    echo -e "${YELLOW}Restoring previous backup from $LATEST_BACKUP...${NC}"
    mv "$LATEST_BACKUP" "$PLUGIN_TARGET_DIR"
    echo -e "${GREEN}✔ Previous plugin restored.${NC}"
else
    echo -e "${GREEN}✔ Plugin files removed.${NC}"
fi

echo -e "\n${BOLD}${GREEN}Uninstallation complete.${NC} Please reload or restart Tabby.\n"
