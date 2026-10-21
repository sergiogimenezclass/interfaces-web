# Ficha Técnica - Clase 08: Grilla de Planes y Precios (Pricing Table)

## 1. Identificación de la Interfaz
* **Nivel:** 1 (Páginas Web e Interfaces de Flujo Continuo)
* **Semana:** 08
* **Interfaz a construir:** Componente comercial de suscripción con 3 tarjetas de planes ("Básico", "Pro / Recomendado", "Empresa"), comparativa visual de características, botón de acción fijo en el fondo de cada tarjeta y alternador interactivo de facturación Mensual/Anual.

---

## 2. Fricciones Visuales y Conceptos Técnicos Involucrados

| Concepto Técnico | Fricción o Problema Visual Real que Resuelve |
| :--- | :--- |
| `display: flex` + `flex-direction: row` en el contenedor | Los elementos de bloque (`<div>`) se apilan verticalmente por defecto. Se necesita poner las tres tarjetas lado a lado sin recurrir a cálculos rotos con `float` o espacios fantasma de `inline-block`. |
| `flex: 1` (o `flex-basis: 0; flex-grow: 1;`) | Si una tarjeta tiene más texto o ítems que otra, su ancho natural varía según el contenido. Con `flex: 1`, las tres tarjetas se fuerzan a repartirse el espacio horizontal en partes estrictamente iguales. |
| `align-items: stretch` (comportamiento por defecto) | Al tener distinta cantidad de viñetas, una tarjeta queda corta y otra larga, generando un pie desparejo antiestético. `stretch` empareja la altura de todas las tarjetas a la altura de la más alta. |
| `display: flex` + `flex-direction: column` dentro de cada tarjeta | Al estirar la tarjeta, el botón de compra ("Elegir plan") queda flotando debajo de las viñetas a diferentes alturas en cada tarjeta. Convertir la tarjeta en columna flex permite controlar el flujo vertical interno. |
| `margin-top: auto` en el botón de acción | Empuja el botón al borde inferior exacto de la tarjeta, sin importar cuánto contenido haya arriba en la lista de características, manteniendo los tres botones perfectamente alineados en la misma línea visual horizontal. |
| `transform: scale(1.05)` / Borde diferenciado | Resuelve la jerarquía visual de la tarjeta "Pro / Recomendado", logrando que se despegue visualmente del resto sin romper el flujo ni alterar la altura de las tarjetas hermanas. |

---

## 3. Arquitectura del Starter Kit

El alumno recibe una carpeta lista para abrir con Visual Studio Code y Live Server:

```text
clase-08-pricing-table/
├── index.html
├── css/
│   └── styles.css
└── INSTRUCCIONES.md
```

### Qué viene resuelto (Zonas Protegidas del Sistema):
* `<!DOCTYPE html>`, metadatos `<head>`, vinculación de tipografías desde Google Fonts (`Inter`).
* Estructura semántica base en HTML: `<main class="pricing-section">`, contenedor `.pricing-grid` y el marcado de las 3 etiquetas `<article class="card">` con sus títulos, precios, listas no ordenadas `<ul>` y botones `<button>`.
* Estilos globales ya resueltos en `styles.css`: Reseteo de caja (`box-sizing: border-box`, `margin: 0`), color de fondo de página, estilos tipográficos base y colores predefinidos mediante variables básicas para no perder tiempo en paletas.
* Marcadores visuales en el código mediante comentarios explícitos:
  * `/* === NO MODIFICAR: ZONA DEL SISTEMA === */`
  * `/* === TU CÓDIGO AQUÍ: ZONA DE TRABAJO DEL ALUMNO === */`

### Qué debe escribir el alumno (Zona de Trabajo):
* Maquetación del contenedor `.pricing-grid` para alineación horizontal y separación con `gap`.
* Dimensionamiento equitativo de las tarjetas con `flex`.
* Conversión de la tarjeta a columna flex para resolver el empuje del botón al fondo con `margin-top: auto`.
* Regla de estilización para la tarjeta destacada (`.card--featured`).

---

## 4. Prompt de IA Provisto (Caja Negra)

Para incorporar el alternador interactivo de facturación Mensual / Anual con descuento sin escribir JavaScript:

```text
Actúa como un desarrollador frontend senior. Tengo este componente de HTML y CSS de una tabla de precios con 3 tarjetas. Necesito un script de JavaScript atómico para colocar antes de cerrar la etiqueta </body> en mi archivo index.html.

Requisitos estrictos del script:
1. No modifiques mi estructura CSS existente.
2. Agrega la lógica para escuchar el clic en los botones de un alternador con IDs "#btn-monthly" y "#btn-yearly".
3. Cuando se presione "#btn-yearly":
   - Debe cambiar el texto de los precios con clase ".price-amount" multiplicando el valor mensual por 10 (ofreciendo 2 meses gratis).
   - Debe cambiar el texto del período con clase ".price-period" de "/mes" a "/año".
   - Debe agregar la clase CSS "active" al botón presionado y quitársela al otro.
4. Cuando se presione "#btn-monthly":
   - Debe restaurar los valores originales mensuales y el texto "/mes".
   - Debe alternar la clase "active" correspondiente.
5. El código debe estar completamente encapsulado dentro de una etiqueta <script> lista para copiar y pegar.
```

---

## 5. Preguntas Guía para el Standup de Cierre (Últimos 20 min)

### Pregunta Diagnóstica de Modelo Mental:
> *"Si en una tarjeta el botón de compra queda pegado a la última viñeta y en otra queda mucho más abajo, ¿por qué `margin-top: auto` resuelve el problema únicamente si la tarjeta tiene `display: flex` y `flex-direction: column`, y qué pasaría si intentaran usar `margin-top: auto` con `display: block`?"*

### Pregunta de Autonomía de Debugging:
> *"Cuando quisieron destacar la tarjeta 'Pro' aumentándole el tamaño con `padding` o `margin`, ¿qué le pasó a las tarjetas vecinas? ¿Por qué `transform: scale()` soluciona el desborde sin empujar al resto?"*
