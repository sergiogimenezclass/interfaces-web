# Guía de Práctica Asistida: Grilla de Precios Comercial

> **Objetivo de la sesión:** Transformar tres tarjetas apiladas en una grilla de precios profesional de 3 columnas horizontales, con alturas equilibradas, botones anclados al fondo y una tarjeta destacada.

---

## Protocolo Obligatorio de Debugging (Antes de consultar al docente)
1. Abrir DevTools (`F12` o `Clic derecho > Inspeccionar`).
2. Hacer clic en el icono del puntero y seleccionar la tarjeta o el contenedor en conflicto.
3. Observar la pestaña **Elements**: ¿el navegador reconoce el contenedor como `flex` (aparece la insignia púrpura `flex`)?
4. Observar la pestaña **Styles**: ¿alguna propiedad tiene una línea tachada? Si está tachada, hay un error de sintaxis o una regla con mayor especificidad la está sobreescribiendo.
5. Si una tarjeta empuja a las demás fuera de pantalla, verificar si los anchos suman más del 100% o si olvidaste `box-sizing: border-box`.

---

## Nivel Base (Esencial) - Todos los alumnos deben completarlo

### Paso 1: Poner las tarjetas en fila horizontal
1. Abrí el archivo `css/styles.css`.
2. Buscá la clase `.pricing-grid`. Actualmente las tarjetas se apilan una debajo de otra porque los `<article>` son elementos de bloque.
3. Aplicá `display: flex;` sobre `.pricing-grid`. Observá el resultado en el navegador: las tres tarjetas ahora están en la misma fila.
4. Las tarjetas quedaron completamente pegadas. Agregá una separación de `24px` usando la propiedad `gap`.

### Paso 2: Forzar anchos idénticos
1. Notarás que la tarjeta "Pro" es más ancha que la tarjeta "Básico" porque tiene más texto.
2. Buscá la regla `.card`.
3. Aplicá la propiedad `flex: 1;`.
4. Inspeccioná con DevTools y comprobá que las tres tarjetas ahora tienen exactamente el mismo ancho medido en píxeles.

### Paso 3: Emparejar las alturas
1. Verificá cómo se comportan las alturas: por defecto, `align-items: stretch` hace que todas las tarjetas midan lo mismo de alto (la altura de la tarjeta con más contenido).
2. Sin embargo, observá los botones `.card__button`: en la tarjeta con menos texto, el botón queda a mitad de camino, mientras que en la tarjeta con más contenido queda al fondo.

### Paso 4: Alinear los botones al fondo con Flexbox vertical
1. Sobre la regla `.card`, agregá:
   ```css
   display: flex;
   flex-direction: column;
   ```
2. Ahora que el interior de cada tarjeta es un contenedor flexible vertical, buscá la clase del botón `.card__button` y agregale:
   ```css
   margin-top: auto;
   ```
3. Guardá los cambios. El margen automático absorberá todo el espacio vertical sobrante y empujará el botón exactamente contra el borde inferior de la tarjeta. Los tres botones deben quedar perfectamente alineados en una misma línea horizontal.

---

## Nivel Desafío (Pro) - Para quienes avanzan a ritmo rápido

Una vez completado el Nivel Base sin errores de consola ni desbordes:

### Reto 1: Destacar la tarjeta "Pro" (Jerarquía Visual)
1. Localizá la tarjeta central con la clase modificadora `.card--featured`.
2. Hacé que se distinga del resto:
   - Cambiá el color de su borde a un tono de acento primario (ej. `#4f46e5`) con un grosor de `2px`.
   - Agregale una sombra pronunciada (`box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);`).
   - Elevá su escala sutilmente con `transform: scale(1.05);` para que sobresalga por encima de las otras dos sin desalinear la grilla.

### Reto 2: Badge flotante de "Más Popular"
1. Dentro del HTML de la tarjeta `.card--featured`, agregá un elemento `<span class="badge">Más Popular</span>` arriba del título.
2. Estilizalo con fondo de color primario, texto blanco, tamaño de fuente pequeño (`0.75rem`), bordes redondeados (`border-radius: 9999px`) y centrado horizontal.

### Reto 3: Interactividad con IA (Caja Negra)
1. En `index.html`, agregá sobre la grilla los dos botones provistos en el Starter Kit:
   ```html
   <div class="billing-toggle">
     <button id="btn-monthly" class="toggle-btn active">Mensual</button>
     <button id="btn-yearly" class="toggle-btn">Anual (-20%)</button>
   </div>
   ```
2. Copiá el **Prompt de IA Provisto** en tu cliente de IA preferido.
3. Tomá el bloque `<script>` resultante y pegalo justo antes de la etiqueta de cierre `</body>`.
4. Probá hacer clic en "Anual": verificá que los montos cambien en vivo y el texto cambie a "/año".
