# Reto Modo Autónomo: Tarjeta de Perfil desde Cero

> Para quienes eligen no usar la plantilla y construir toda la solución desde una hoja en blanco.

---

## 1. Preparación del Proyecto
1. Creá una carpeta con un archivo `index.html` y una carpeta `css/` con `styles.css`.
2. En `index.html`, escribí `!` y presioná `Tab` para generar la estructura básica de HTML5 con Emmet.
3. Asegurate de incluir:
   * Idioma en español (`<html lang="es">`).
   * Título descriptivo en `<title>`.
   * La etiqueta `<link rel="stylesheet" href="css/styles.css">`.
   * La conexión con las fuentes de Google Fonts (*Playfair Display* e *Inter*).

---

## 2. Marcado HTML Semántico Requerido
Estructurá los textos de `contenido.txt` utilizando:
* Un contenedor principal `<main class="profile-card">`.
* Una imagen `<img>` con su atributo `alt` descriptivo.
* Un título principal `<h1>` para el nombre.
* Párrafos `<p>` para el rol y la biografía.
* Una etiqueta `<nav>` con 4 enlaces `<a>` para los botones.
* Un pie `<footer class="profile-footer">` para la ubicación.

---

## 3. Especificación de Diseño (Editorial Cálido)

* **Paleta de Colores:**
  * Fondo de la página: `#fafaf9` (Arena suave).
  * Fondo de la tarjeta: `#ffffff` (Blanco puro).
  * Texto principal: `#1c1917` (Grafito oscuro).
  * Texto secundario: `#78716c` (Gris cálido).
  * Borde de cajas: `1px solid #e7e5e4`.
  * Color de acento / botones: Terracota `#c2410c` (hover `#9a3412`).
* **Tipografía:**
  * Título: `'Playfair Display', serif`, peso 700.
  * Cuerpo y botones: `'Inter', sans-serif`, peso 400 y 500.
* **Medidas y Espacios:**
  * Ancho máximo de la tarjeta: `24rem` (aprox `384px`).
  * Centrado de la tarjeta en pantalla: `display: flex; align-items: center; justify-content: center; min-height: 100vh;` sobre el `body`.
  * Relleno interno de la tarjeta: `2.5rem 2rem`.
  * Botones: `display: block`, relleno `0.875rem 1.25rem`, borde sutil y cambio de color con `:hover`.
  * Foto de perfil: redonda con `border-radius: 50%`, `width: 6rem; height: 6rem; object-fit: cover;`.
