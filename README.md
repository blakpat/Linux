# 🐧 Linux Automation & Endpoint Management

A curated collection of production-ready automation scripts, endpoint integrations, and system administration tools for Linux workstations and servers.

---

## 📂 Projects & Scripts

### 🌌 [Microsoft Entra ID (Azure AD) Integration via Himmelblau](entra-id-himmelblau/)
- **Path**: `entra-id-himmelblau/setup_himmelblau.sh`
- **Description**: Automated installation, PAM/NSS configuration, Windows Hello (TPM+PIN), and Entra ID join for Ubuntu 22.04, 24.04 & 25.10.
- **Modes**: Interactive TUI (Whiptail) & Unattended (`--auto`).

### 🖱️ [Mouse Jiggler for Pop!_OS & Ubuntu](mouse-jiggler/)
- **Path**: `mouse-jiggler/install.sh`
- **Description**: Lightweight native GNOME / AppIndicator tray tool & floating widget that moves cursor pixels imperceptibly to prevent screen lock and keep Teams/Slack active.
- **Features**: Tray toggle (`🟢 ON` / `⚪ OFF`), configurable intervals (10s-5m), smart idle detection, CLI commands (`--toggle`, `--move-now`), and autostart.

---

## 🛠️ Usage & Contributions

Feel free to fork, open issues, or submit PRs to improve scripts and expand platform support.

## 📄 License
Licensed under the [MIT License](LICENSE).
