# ⚡ Tabby Connection Homepage Pro

[![Tabby](https://img.shields.io/badge/Tabby%20Plugin-v1.3.0-blue?logo=terminal)](https://tabby.sh)
[![Linux](https://img.shields.io/badge/Platform-Linux%20%7C%20macOS%20%7C%20Windows-orange?logo=linux)](https://github.com/blakpat/Linux)
[![License: AGPL-3.0](https://img.shields.io/badge/License-AGPL--3.0-green.svg)](LICENSE)
[![Author](https://img.shields.io/badge/Author-blakpat-purple)](https://github.com/blakpat)

**Tabby Connection Homepage Pro** is an enhanced dashboard plugin for [Tabby Terminal](https://tabby.sh) that replaces the blank tab with a **clean, visual start page** organizing all your saved connections (SSH, Telnet, Serial, Docker, PowerShell, Bash, etc.).

It allows you to effortlessly manage hundreds of connections grouped into categories, personalize them with custom colors, blur sensitive data during screen shares, and launch any server with a single click.

---

## ✨ Features & Enhancements

Unlike the basic plugin, this version introduces essential day-to-day productivity features:

- 📂 **Collapsible Categories**: Click on any category title (or chevron) to collapse or expand it. Keep your dashboard tidy without endless scrolling. *Collapsed states are automatically remembered across sessions*.
- 🎨 **Custom Category Colors**: Assign custom accent colors to each group (e.g., Red for *Production*, Green for *Development*, Blue for *Infrastructure*).
- 👁️ **Hide / Show Categories**: Temporarily hide groups you don't need without deleting any stored connection profiles.
- 🌐 **Instant Multi-Language Switcher**: Change the start page language on the fly (**English**, Spanish, French, German, Portuguese, Italian) with an optional one-click button to synchronize with Tabby's global language.
- 🔒 **1-Click Privacy Mode (Data Blur)**: Dedicated button in the top bar (`👁️`) that instantly blurs all connection names, IPs, hosts, and usernames. Perfect for screen sharing in Teams/Zoom, live streaming, or taking screenshots without leaking credentials.
- 🖱️ **Smart Dismissal**: Menus and setting panels automatically close when clicking outside or pressing the `Esc` key.
- 🔍 **Instant Search & Quick Connect**: Filter your connections in real-time by typing in the search box; press `Enter` to connect immediately.

---

## 🚀 1-Minute Installation

Open your terminal and run:

```bash
git clone https://github.com/blakpat/Linux.git
cd Linux/tabby-connection-homepage-pro
./install.sh
```

The script handles everything automatically:
1. Detects your local Tabby installation.
2. Backs up any previously installed version.
3. Deploys and registers the plugin.
4. Once completed, **reload Tabby by pressing `Ctrl + Shift + R`** (or restart Tabby).

> **Tip (Development / Symlink Mode)**: If you are customizing code and want changes to reflect immediately:
> ```bash
> ./install.sh --link
> ```

---

## 🖥️ How to Use It in Tabby

### 1. Open the Homepage
In Tabby, click the **`+`** (New Tab) button and select **Homepage**, or click the home icon 🏠 in the toolbar.

### 2. Collapse and Expand Groups
- Click on any **category title** to toggle between collapsed and expanded.
- Tabby will remember your layout the next time you open the application.

### 3. Customize Colors & Visibility
1. Click the **Categories** button (palette icon 🎨) in the top header.
2. The customization panel will open:
   - **Change Color**: Click the color picker next to any category name and pick your favorite color.
   - **Hide / Show**: Uncheck or check the box beside each category.
   - **"Show All" Button**: Restores visibility for all hidden categories.
   - **"Reset Colors" Button**: Reverts all category colors back to the default white.
3. Click anywhere outside the panel or press `Esc` to close it.

### 4. Switch Languages
1. Click the globe icon button 🌐 in the top header.
2. Select your preferred language (English, Español, Français, Deutsch, Português, Italiano).
3. Optionally click *"Also apply to Tabby language"* to configure the entire Tabby interface to match.

### 5. Launch Connections
- **Click**: Click on any card to launch the session.
- **Search**: Type in the search box and press `Enter` to launch the top result.
- **Card Menu**: Click the three dots `⋮` on any card to edit, duplicate, or delete the profile.

### 6. Privacy Mode (Streaming & Screenshots)
- Click the **Blur Data** button (eye icon 👁️) in the top header.
- The button highlights in amber and all sensitive names, IPs, hosts, and usernames are instantly blurred with selection disabled.
- Click it again to reveal the data. Your preference is persisted across restarts.

---

## 🗑️ Uninstallation

To cleanly remove the plugin or restore your previous version at any time:

```bash
cd Linux/tabby-connection-homepage-pro
./uninstall.sh
```

---

## 📄 License

Licensed under the [GNU Affero General Public License v3.0](LICENSE).  
Maintained by [blakpat](https://github.com/blakpat).
