---
name: frontend-standards
description: >-
  Estándares de arquitectura, estilos y buenas prácticas para maquetar interfaces con HTML5,
  CSS3 y JavaScript Vanilla. Provee arquetipos de diseño visual anti-cliché, convención de nombres
  BEM simplificada, unidades de medida y reglas de encapsulación para interactividad.
  SIEMPRE consulta al usuario qué arquetipo visual prefiere antes de generar código.
---

# Estándares de Frontend: HTML5, CSS3 y JS Vanilla

Esta skill define los principios técnicos, estructurales y estéticos para construir interfaces limpias, accesibles y profesionales, evitando la estética genérica de plantillas generadas por IA.

---

## ⚠️ Protocolo de Interacción Obligatorio: Consulta Previa de Arquetipo

Antes de escribir, maquetar o generar archivos HTML y CSS para una clase o interfaz:

1. **Pausar la generación de código.**
2. **Presentar las opciones al usuario:** Mostrar brevemente los 4 arquetipos visuales disponibles.
3. **Recomendar uno:** Proponer el arquetipo que mejor se adapte a la naturaleza de la interfaz solicitada y fundamentar la sugerencia en una línea.
4. **Esperar la confirmación o elección del usuario** antes de escribir los archivos y el código.
5. **Excepción única:** Si el usuario ya indicó explícitamente en su mensaje inicial qué arquetipo desea (ej: *"Maquetá esto con estilo Neo-Brutalismo"*), proceder directamente sin repreguntar.

---

## 📁 Estructura Canónica Obligatoria para Cada Clase

Toda clase generada en el trayecto curricular DEBE crearse obligatoriamente con estos 2 documentos y 3 carpetas:

```text
clase-XX-nombre-proyecto/
├── FICHA-TECNICA.md            # Datos pedagógicos, problema resuelto, boceto y preguntas de cierre
├── INSTRUCCIONES.md            # Guía del alumno: Nivel Base, Nivel Desafío, Reto Semanal y Biblioteca MDN
├── version-terminada/          # Meta visual 100% resuelta para desarmar en clase y comparar
│   ├── index.html
│   └── css/styles.css
├── starter-kit-guiado/          # Modo asistido: HTML completo con comentarios guiados en el CSS
│   ├── index.html
│   └── css/styles.css
└── starter-kit-autonomo/        # Modo sin andamiaje: textos crudos y especificación para hacer desde cero
    ├── contenido.txt
    └── CONSIGNA-AUTONOMA.md
```

---

## 1. Catálogo de Arquetipos de Diseño Visual

Al consultar al usuario o iniciar una interfaz, utilizá este catálogo:

### Arquetipo A: SaaS Moderno (Clean Tech)
*Ideal para dashboards, herramientas de software, tablas de precios y landing pages de productos digitales.*
* **Paleta:** Base `Slate` (fondos `#f8fafc` a `#ffffff`, textos `#0f172a` y `#64748b`, bordes `#e2e8f0`).
* **Acento:** Índigo `#4f46e5` o Azul Cobalto `#2563eb`.
* **Radios:** Moderados (`border-radius: 8px;` para tarjetas, `6px;` para botones e inputs).
* **Sombras:** Compuestas y sutiles:
  `box-shadow: 0 1px 3px rgba(15, 23, 42, 0.08), 0 1px 2px rgba(15, 23, 42, 0.04);`
* **Tipografía:** Pila sans-serif neutra (`'Inter'`, `system-ui`, `-apple-system`, `sans-serif`).

### Arquetipo B: Editorial Cálido (Humanista / Contenido)
*Ideal para blogs, recetas, artículos periodísticos, sitios culturales o portfolios de autor.*
* **Paleta:** Base `Stone` / Arena (fondos `#fafaf9` a `#ffffff`, textos `#1c1917` y `#78716c`, bordes `#e7e5e4`).
* **Acento:** Terracota `#c2410c` o Verde Bosque `#15803d`.
* **Radios:** Mínimos o rectos (`border-radius: 2px` a `4px`, o `0px`).
* **Sombras:** Prácticamente nulas. La profundidad se logra con contraste de fondos y bordes delgados de `1px`.
* **Tipografía:** Títulos con serif elegante (`'Merriweather'`, `'Playfair Display'`, `Georgia`) y cuerpo sans-serif legible.

### Arquetipo C: Neo-Brutalismo Suave (Pop / Dinámico)
*Ideal para e-commerce juvenil, sitios de eventos, portfolios creativos y plataformas educativas.*
* **Paleta:** Fondos contrastados (blanco marfil `#fffdfa` o pasteles suaves), textos y trazos en negro carbón `#18181b`.
* **Acento:** Amarillo canario `#facc15`, Coral `#f43f5e` o Violeta vibrante `#8b5cf6`.
* **Bordes y Radios:** Bordes sólidos negros de `2px` o `3px` (`border: 2px solid #18181b;`), con radios de `6px` a `10px`.
* **Sombras:** Duras, angulares y sin desenfoque (offset puro):
  `box-shadow: 3px 3px 0 #18181b;`
* **Tipografía:** Títulos en negrita pesada (`font-weight: 800`), tracking compacto.

### Arquetipo D: Industrial / Fintech (Alta Densidad Técnica)
*Ideal para cabinas de control, analítica financiera, consolas y reportes de métricas.*
* **Paleta:** Modo oscuro o gris grafito profundo (`#09090b` fondo, `#18181b` tarjetas, bordes `#27272a`).
* **Acento:** Verde esmeralda `#10b981` (éxito/positivo) y Rojo carmesí `#ef4444`.
* **Radios:** Pequeños y técnicos (`border-radius: 4px` a `6px`).
* **Tipografía:** Sans-serif compacta para etiquetas y tipografía monoespaciada (`ui-monospace`, `'SFMono-Regular'`, `monospace`) para datos numéricos y tablas.

---

## 2. Unidades de Medida Permitidas y Restricciones

* **`rem`:** Obligatoria para tipografía (`font-size`), espaciados internos/externos (`padding`, `margin`, `gap`) y dimensiones máximas (`max-width: 48rem`).
* **`px`:** Exclusiva para detalles fijos de precisión: bordes (`1px`, `2px`), radios (`border-radius`) y valores de `box-shadow`.
* **`%` y Viewport (`vh`, `vw`, `dvh`):** Para anchuras relativas al padre (`width: 100%`) y alturas completas de pantalla.
* **Restricción:** No utilizar la unidad `ch`. Los anchos de lectura se controlan mediante `max-width` en `rem` o `px` (ej. `max-width: 42rem` o `max-width: 680px`).

---

## 3. Nomenclatura CSS: BEM Simplificado

Para evitar colisiones de especificidad manteniendo una curva de aprendizaje amigable:

* **Bloque:** `.nombre-componente` (ej. `.card`, `.navbar`, `.pricing-table`).
* **Elemento:** `.nombre-componente-elemento` con guion simple (ej. `.card-title`, `.card-btn`, `.navbar-link`).
* **Modificador:** `.nombre-componente-elemento-modificador` (ej. `.card-featured`, `.card-btn-primary`, `.navbar-link-active`).
* **Estados:** Clases con prefijo `is-` o `has-` (ej. `.is-open`, `.is-active`, `.has-error`).

---

## 4. Reset CSS Moderno Obligatorio

Toda hoja de estilos debe iniciar con este bloque base:

```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  -webkit-text-size-adjust: 100%;
}

body {
  min-height: 100vh;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

button {
  cursor: pointer;
  background: none;
  border: none;
}
```

---

## 5. Reglas de Accesibilidad y Anti-Cliché

1. **Contraste de Texto:** Todo texto secundario o silenciado (`muted`) debe cumplir un ratio de contraste mínimo de `4.5:1` contra su fondo (evitar grises claros sobre blanco).
2. **Foco Accesible:** Nunca usar `outline: none` sin proveer una alternativa visible. Usar `:focus-visible` con anillo definido:
   ```css
   :focus-visible {
     outline: 2px solid var(--color-accent);
     outline-offset: 2px;
   }
   ```
3. **Micro-interacciones:** Las transiciones de `:hover` deben ser sutiles y ágiles (`transition: all 150ms ease` o `200ms ease`), nunca mayores a `300ms`.
4. **Semántica HTML:** Prohibido maquetar botones con `<div>` o enlaces sin atributo `href`. Los encabezados (`<h1>` a `<h6>`) deben respetar un orden jerárquico estricto.

---

## 6. Estándar de JavaScript Vanilla (Caja Negra e Interactividad)

Cuando se genere o integre código JS Vanilla:

1. **Encapsulamiento estricto:** Todo script debe estar encapsulado en una función autoejecutable (IIFE) para no contaminar el `window` global:
   ```html
   <script>
     (() => {
       // Ámbito privado
       const toggleBtn = document.querySelector('.navbar-toggle');
       const navMenu = document.querySelector('.navbar-menu');
       
       if (!toggleBtn || !navMenu) return;

       toggleBtn.addEventListener('click', () => {
         navMenu.classList.toggle('is-open');
       });
     })();
   </script>
   ```
2. **Cero manipulación directa de estilos:** Prohibido asignar estilos con `element.style.display = ...`. La manipulación de la interfaz se realiza alternando clases CSS mediante `classList.add()`, `classList.remove()` o `classList.toggle()`.
3. **Selección con `querySelector` / `querySelectorAll`:** No utilizar métodos obsoletos como `document.getElementsByClassName`.
