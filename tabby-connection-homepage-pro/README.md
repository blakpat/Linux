# ⚡ Tabby Connection Homepage Pro

[![Tabby](https://img.shields.io/badge/Tabby%20Plugin-v1.3.0-blue?logo=terminal)](https://tabby.sh)
[![Platform](https://img.shields.io/badge/Platform-Linux%20%7C%20macOS%20%7C%20Windows-orange?logo=linux)](https://github.com/blakpat/Linux)
[![License: AGPL-3.0](https://img.shields.io/badge/License-AGPL--3.0-green.svg)](LICENSE)
[![Author](https://img.shields.io/badge/Author-blakpat-purple)](https://github.com/blakpat)

**Tabby Connection Homepage Pro** is a modern, high-productivity dashboard and connection manager plugin for [Tabby Terminal](https://tabby.sh).

It transforms the default homepage into a sleek, organized command center with **collapsible categories**, **individual category color customization**, **instant category visibility toggles**, **native multi-language support (i18n)**, and refined UX interactions (such as click-outside auto-close and Escape key dismissal).

---

## ✨ Key Features & Enhancements

- 🎨 **Modern Frosted-Glass UI / UX**:
  - Clean cards without intrusive horizontal divider lines.
  - Category titles with dynamic color accents and badge counters.
  - Hover micro-interactions and smooth transitions.

- 📂 **Smart Collapsible Categories**:
  - Collapse or expand any category (including Recent profiles) with a single click on its header.
  - Collapse state is automatically persisted in local storage across sessions.

- 🌈 **Category Customization Panel**:
  - Click the **Categorías** button to open the settings panel.
  - **Color Picker**: Choose a distinct custom color for each category (default: `#ffffff`).
  - **Visibility Toggles**: Hide or show individual categories with checkboxes or quick eye icons.
  - Quick action buttons: **Mostrar todas** (Show all) & **Restablecer colores** (Reset colors).

- 🌐 **Multi-Language Switcher (i18n)**:
  - Language button in the top bar with active language indicator.
  - Supported languages:
    - 🇪🇸 **Español**
    - 🇬🇧 **English**
    - 🇫🇷 **Français**
    - 🇩🇪 **Deutsch**
    - 🇵🇹 **Português**
    - 🇮🇹 **Italiano**
    - 🤖 **Automático** (Synchronized with Tabby's global language)
  - One-click option to sync and apply the chosen language across all of Tabby.

- 🖱️ **Intuitive Dismissal (Click-Outside & Escape)**:
  - Menus and panels close automatically when clicking outside them.
  - Clicking inside the category panel allows continuous customization without closing unexpectedly.
  - Pressing `Esc` closes any active modal or dropdown immediately.

- 🔍 **Instant Fuzzy Search & Quick Connect**:
  - Debounced search across all connection profiles and hosts.
  - Quick launch (`Enter` to open first result, `Ctrl+Enter` / `Cmd+Enter` for quick connect).

---

## 🚀 Quick Installation

### Option 1: Automated 1-Line Installer (Recommended)

Clone the repository and run the installer script:

```bash
git clone https://github.com/blakpat/Linux.git
cd Linux/tabby-connection-homepage-pro
./install.sh
```

> **Tip (Development / Symlink Mode)**: If you want changes to immediately reflect without copying files again:
> ```bash
> ./install.sh --link
> ```

### Option 2: Manual Installation

1. Copy the plugin directory into Tabby's plugin folder:
   ```bash
   mkdir -p ~/.config/tabby/plugins/node_modules/tabby-connection-homepage
   cp -r dist package.json LICENSE ~/.config/tabby/plugins/node_modules/tabby-connection-homepage/
   ```

2. Register the dependency in `~/.config/tabby/plugins/package.json`:
   ```json
   {
     "dependencies": {
       "tabby-connection-homepage": "^1.2.2"
     }
   }
   ```

3. Restart Tabby or press `Ctrl + Shift + R` inside Tabby to reload.

---

## 🗑️ Uninstallation

To remove the plugin or restore the previous version:

```bash
cd tabby-connection-homepage-pro
./uninstall.sh
```

---

## 🛠️ Configuration & Storage

All user preferences are automatically preserved in Tabby's local storage:
- `tabby_collapsed_groups`: Persisted list of collapsed category IDs.
- `tabby_hidden_groups`: List of categories hidden from view.
- `tabby_group_colors`: Custom color mappings per category.
- `tabby_homepage_lang`: Selected language override code.

---

## 📄 License

This project is licensed under the [GNU Affero General Public License v3.0](LICENSE).
Author: [blakpat](https://github.com/blakpat).
Original base plugin inspired by [OpaqueGlass/tabby-connection-homepage](https://github.com/OpaqueGlass/tabby-connection-homepage).
