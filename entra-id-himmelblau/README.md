# 🌌 Microsoft Entra ID (Azure AD) Integration for Ubuntu with Himmelblau

[![Ubuntu](https://img.shields.io/badge/Ubuntu-22.04%20%7C%2024.04%20%7C%2025.10-orange?logo=ubuntu)](https://ubuntu.com/)
[![Himmelblau](https://img.shields.io/badge/Himmelblau-v4.0.2-blue)](https://himmelblau-idm.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Interactive, all-in-one automation script to join and integrate Ubuntu Linux workstations into **Microsoft Entra ID (Azure AD)** using **[Himmelblau IDM](https://himmelblau-idm.org/)**.

---

## ✨ Features

- 🖥️ **Interactive TUI**: Intuitive dialog menus using `whiptail` / `ncurses` (navigate with arrow keys and Enter) with clean fallback to CLI.
- ⚡ **Zero-Touch Automation**: Run unattended deployments with `--auto` flag (ideal for Intune, Ansible, Cloud-init, MDM).
- 🔑 **Modern Authentication**:
  - Direct login at GDM / LightDM login screen with Entra ID corporate credentials.
  - Windows Hello for Linux (TPM 2.0 + PIN fast login).
  - Single Sign-On (SSO) and OIDC integration.
- 📁 **PAM & NSS Integration**:
  - Automatic `/home/<user>` creation on first login via `pam_mkhomedir`.
  - Seamless name resolution via `/etc/nsswitch.conf`.
- 🛠️ **Diagnostics & Management**:
  - Built-in status verification with `aad-tool`.
  - Complete safe uninstaller with automated backups.
  - Microsoft 365 Web App shortcuts on Desktop.

---

## 🚀 Quick Start

### 1. Clone or Download the Script
```bash
git clone https://github.com/blakpat/Linux.git
cd Linux/entra-id-himmelblau
chmod +x setup_himmelblau.sh
```

### 2. Run Interactively (TUI Menu)
```bash
sudo ./setup_himmelblau.sh
```

Follow the on-screen prompts:
1. Select your target action (Option `1` for full installation).
2. Enter your Entra ID domain (e.g. `yourcompany.com` or `yourtenant.onmicrosoft.com`).
3. Enter your corporate UPN (e.g. `user@yourcompany.com`).
4. Choose whether to grant `sudo` administrative privileges.

---

## 🤖 Unattended / Automated Deployment (`--auto`)

You can pass environment variables for non-interactive installations (e.g., in Microsoft Intune scripts, MDM, or automated deployment pipelines):

```bash
sudo DOMAIN="yourcompany.com" ENTRA_USER="admin@yourcompany.com" ./setup_himmelblau.sh --auto
```

---

## 📋 Compatibility

| OS Version | Installation Mode | Himmelblau Version |
| :--- | :--- | :--- |
| **Ubuntu 22.04 LTS (Jammy)** | Standalone official .deb packages | 4.0.2 (Stable) |
| **Ubuntu 24.04 LTS (Noble)** | Standalone official .deb packages | 4.0.2 (Stable) |
| **Ubuntu 25.10 (Plucky)** | Official Nightly APT Repository | Latest / 4.x |

---

## 🔍 Verification & Post-Install

After completing installation, verify user resolution:

```bash
# Verify daemon status
aad-tool status

# Check TPM status
aad-tool tpm

# Check if Entra ID user is recognized
getent passwd youruser@yourcompany.com
```

To log in:
1. Log out or reboot (`sudo reboot`).
2. At the GDM login screen, type your Entra ID UPN: `youruser@yourcompany.com`.
3. Enter your Entra ID corporate password.

---

## 🗑️ Uninstallation

If you ever need to revert the changes:
```bash
sudo ./setup_himmelblau.sh
# Select Option 5: Desinstalar Himmelblau completamente
```
The uninstaller safely removes packages, restores original system `/etc/nsswitch.conf`, and creates a backup of `/etc/himmelblau` in `/root/`.

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
