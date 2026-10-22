# ⚡ Tabby Connection Homepage Pro

[![Tabby](https://img.shields.io/badge/Tabby%20Plugin-v1.3.0-blue?logo=terminal)](https://tabby.sh)
[![Linux](https://img.shields.io/badge/Platform-Linux%20%7C%20macOS%20%7C%20Windows-orange?logo=linux)](https://github.com/blakpat/Linux)
[![License: AGPL-3.0](https://img.shields.io/badge/License-AGPL--3.0-green.svg)](LICENSE)
[![Author](https://img.shields.io/badge/Author-blakpat-purple)](https://github.com/blakpat)

**Tabby Connection Homepage Pro** es un complemento para [Tabby Terminal](https://tabby.sh) que sustituye la pantalla en blanco por un **panel de inicio visual y organizado** con todos tus servidores y conexiones guardadas (SSH, Telnet, Serial, Docker, PowerShell, etc.).

Te permite gestionar cientos de conexiones agrupadas por carpetas y categorías, personalizarlas con colores y abrir cualquier servidor con un solo clic.

---

## 📸 ¿Qué mejoras incluye esta versión?

A diferencia de la versión básica, este complemento añade herramientas prácticas para el día a día:

- 📂 **Plegar / Desplegar categorías**: Haz clic en el nombre de cualquier categoría para colapsarla o expandirla. Así mantienes la pantalla limpia y no tienes que hacer scroll infinito. *El estado se recuerda siempre, incluso al reiniciar Tabby*.
- 🎨 **Colores personalizados para cada categoría**: Asigna el color que quieras a cada grupo (por ejemplo: rojo para *Producción*, verde para *Desarrollo*, azul para *Infraestructura*).
- 👁️ **Ocultar categorías enteras**: ¿Tienes grupos que no usas a menudo? Oculta o muestra categorías con un clic sin necesidad de borrar los perfiles.
- 🌐 **Selector de idioma en la barra superior**: Cambia el idioma de la pantalla de inicio al instante (**Español**, Inglés, Francés, Alemán, Portugués o Italiano) con opción de sincronizarlo con el resto de Tabby.
- 🖱️ **Cierre automático inteligente**: Al hacer clic fuera de las opciones o pulsar la tecla `Esc`, los menús y paneles se cierran solos.
- 🔍 **Buscador rápido**: Escribe el nombre del servidor o IP y pulsa `Enter` para conectar inmediatamente.

---

## 🚀 Instalación en 1 minuto

Abre tu terminal y ejecuta:

```bash
git clone https://github.com/blakpat/Linux.git
cd Linux/tabby-connection-homepage-pro
./install.sh
```

El script se encarga de todo:
1. Detecta tu configuración de Tabby.
2. Hace una copia de seguridad de tu versión anterior (si existía).
3. Instala y activa el complemento.
4. Al terminar, **recarga Tabby pulsando `Ctrl + Shift + R`** (o cerrando y abriendo Tabby).

---

## 🖥️ Cómo usarlo en Tabby

### 1. Abrir la página de inicio
En Tabby, pulsa en el botón **`+`** (Nueva pestaña) y selecciona **Homepage**, o pulsa el icono de casa 🏠 en la barra de herramientas.

### 2. Plegar y desplegar grupos
- Haz clic sobre el **título de cualquier categoría** (o su flechita) para plegarla o desplegarla.
- Tabby recordará qué grupos tenías cerrados la próxima vez que abras la aplicación.

### 3. Personalizar colores y visibilidad
1. Pulsa el botón **Categorías** (icono de paleta 🎨) en la barra superior.
2. Se abrirá el panel de personalización:
   - **Cambiar color**: Haz clic en el selector de color al lado del nombre de la categoría y elige el color que prefieras.
   - **Ocultar/Mostrar**: Desmarca o marca la casilla de cada categoría.
   - **Botón "Mostrar todas"**: Hace visibles todas las categorías si habías ocultado alguna.
   - **Botón "Restablecer colores"**: Devuelve todos los colores al blanco original por defecto.
3. Para cerrar el panel, haz clic fuera de él o pulsa la tecla `Esc`.

### 4. Cambiar de idioma
1. Haz clic en el botón con el icono del globo terráqueo 🌐 en la barra superior.
2. Elige tu idioma preferido (**Español**, English, Français, Deutsch, Português, Italiano).
3. Si lo deseas, puedes pulsar *"Aplicar también al idioma de Tabby"* para que todo el terminal se configure en ese idioma.

### 5. Conectar rápidamente a un servidor
- **Clic**: Haz clic sobre cualquier tarjeta de conexión para abrir la sesión.
- **Búsqueda**: Escribe en la barra de búsqueda y pulsa `Enter` para conectar al primer resultado filtrado.
- **Opciones de conexión**: Haz clic en el botón de tres puntos `⋮` de cada tarjeta para editar, duplicar o eliminar el perfil.

---

## 🗑️ Desinstalación

Si en algún momento quieres volver a la versión por defecto o eliminar el complemento:

```bash
cd Linux/tabby-connection-homepage-pro
./uninstall.sh
```

---

## 📄 Licencia

Publicado bajo licencia [GNU Affero General Public License v3.0](LICENSE).  
Creado y mantenido por [blakpat](https://github.com/blakpat).
