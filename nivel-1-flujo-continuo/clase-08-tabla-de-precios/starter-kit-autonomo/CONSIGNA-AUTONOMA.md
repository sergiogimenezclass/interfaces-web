# Reto Modo Autónomo: Tabla de Precios desde Cero

> Para quienes eligen no usar la plantilla y maquetar la tabla de 3 planes desde una hoja en blanco.

---

## 1. Requerimientos Técnicos Obligatorios
* **Estructura HTML5:**
  * Un `<header>` con título principal y subtítulo centrado.
  * Un contenedor `<div class="pricing-grid">` con 3 etiquetas `<article class="card">`.
  * La tarjeta central debe incluir la clase modificadora `.card-featured` o `.card--featured`.
* **Motor Flexbox en CSS:**
  * Las 3 tarjetas deben alinearse en fila horizontal (`display: flex`).
  * Las 3 tarjetas deben tener el mismo ancho exacto (`flex: 1`).
  * Las alturas deben emparejarse automáticamente (`align-items: stretch`).
  * Cada tarjeta debe ser una columna flex (`display: flex; flex-direction: column`) para que su botón quede clavado al fondo con `margin-top: auto`.
* **Arquetipo:** SaaS Moderno (Base Slate, tarjetas blancas, acento índigo `#4f46e5`, radios de 10px).
