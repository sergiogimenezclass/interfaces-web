# Guía de Práctica: Tu Tarjeta de Perfil Personal (Link in Bio)

> **Objetivo de la clase:** Construir tu propia tarjeta de presentación online con foto, nombre, biografía y enlaces a tus redes o trabajos, aplicando estilos elegantes con el arquetipo **Editorial Cálido**.

---

## Elegí tu modo de arrancar hoy

* **Opción A - Modo Guiado (Recomendado para la primera clase):** Abrí la carpeta `starter-kit-guiado/`. Ya tenés el archivo `index.html` con la estructura armada y comentarios en `css/styles.css` que te indican dónde escribir.
* **Opción B - Modo Autónomo (Si querés ponerte a prueba):** Abrí la carpeta `starter-kit-autonomo/`. Creá un archivo `index.html` vacío, generá la estructura base con `!` en VS Code, copiá los textos de `contenido.txt` y dale forma desde cero.

---

## Qué hacer si algo no se ve (Protocolo de ayuda rápida)
1. Abrí el inspector del navegador con clic derecho sobre la página > **Inspeccionar** (o la tecla `F12`).
2. En la pestaña **Elements**, revisá si tus etiquetas están bien cerradas.
3. En la pestaña **Styles**, fijate si la regla de CSS que escribiste aparece aplicada o si tiene una línea tachada en el medio (error de sintaxis o mal escrita la clase).

---

## Nivel Base (Lo que todos completamos en clase)

### Paso 1: Abrir el proyecto y conectar los archivos
1. Abrí la carpeta del proyecto en Visual Studio Code.
2. Hacé clic derecho sobre `index.html` y seleccioná **Open with Live Server**. Se abrirá una pestaña en tu navegador.
3. Verificá en el `<head>` de `index.html` que exista la etiqueta que conecta tu CSS:
   ```html
   <link rel="stylesheet" href="css/styles.css">
   ```

### Paso 2: Personalizar tu información personal
1. En `index.html`, buscá la etiqueta `<img>` y cambiá la dirección de la foto por una tuya o una foto de muestra online:
   ```html
   <img class="profile-avatar" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80" alt="Foto de perfil de Clara Mendizábal">
   ```
2. Reemplazá el nombre en el `<h1>` por tu propio nombre.
3. Reemplazá la descripción en el `<p>` por tu ocupación, oficio o una frase corta.
4. En cada enlace `<a>`, cambiá el texto por tus redes o proyectos reales (LinkedIn, GitHub, Portfolio, Contacto).

### Paso 3: Darle forma y centrado a la tarjeta en CSS
1. Abrí `css/styles.css`.
2. Buscá la clase `.profile-card`.
3. Dale un ancho máximo y redondeo sutil propio del estilo editorial:
   ```css
   max-width: 24rem;
   background-color: var(--color-card-bg);
   border: 1px solid var(--color-border);
   border-radius: var(--radius-card);
   padding: 2.5rem 2rem;
   text-align: center;
   ```
4. Guardá el archivo (`Ctrl + S` o `Cmd + S`) y mirá cómo Live Server actualiza tu pantalla en el acto.

### Paso 4: Transformar los enlaces en botones elegantes
1. Por defecto, los enlaces se ven como texto azul subrayado. Vamos a convertirlos en botones sobrios.
2. Buscá la clase `.profile-link` en tu CSS y completá:
   ```css
   display: block;
   text-decoration: none;
   padding: 0.875rem 1.25rem;
   margin-bottom: 0.75rem;
   color: var(--color-text-main);
   background-color: #ffffff;
   border: 1px solid var(--color-border);
   border-radius: var(--radius-btn);
   font-weight: 500;
   font-size: 0.9375rem;
   transition: all 150ms ease;
   ```
3. Guardá los cambios. Ahora tus enlaces tienen cuerpo de botón y se leen de forma clara e individual.

---

## Nivel Desafío (Para quienes avanzan más rápido)

Una vez completado el Nivel Base:

### Reto 1: Efecto interactivo al pasar el mouse (`:hover`)
1. Agregá la pseudo-clase `:hover` sobre tus botones para que reaccionen cuando el usuario les pasa el cursor por encima:
   ```css
   .profile-link:hover {
     background-color: var(--color-accent);
     color: #ffffff;
     border-color: var(--color-accent);
   }
   ```
2. Observá cómo cambia del blanco con borde sutil al tono terracota cálido de forma fluida gracias a la propiedad `transition`.

### Reto 2: Redondear la foto de perfil
1. En la regla `.profile-avatar`, forzá un ancho y alto idénticos (ej. `width: 6rem; height: 6rem;`).
2. Agregá `border-radius: 50%;` para convertirla en un círculo perfecto.
3. Agregale `object-fit: cover;` para que la imagen no se deforme ni se aplaste.

### Reto 3: Destacar tu enlace principal
1. Al primer botón de la lista, agregale una segunda clase en el HTML: `class="profile-link profile-link-featured"`.
2. En el CSS, dale un fondo terracota oscuro directo para que sea el primer botón que la gente quiera apretar.

---

## Reto Opcional para practicar en la semana

* **Consigna para hacer en casa (20 min):**
  1. Agregá al final de la tarjeta una sección pequeña de ubicación geográfica con un icono o texto simple (ej. `Buenos Aires, Argentina · Disponible para proyectos`).
  2. Subí tu propia foto personal a una carpeta `img/` dentro del proyecto y enlazala con una ruta relativa local (`src="img/mi-foto.jpg"`).

---

## 📚 Biblioteca de Consulta (Para profundizar en la semana)

*Material oficial y de referencia para entender a fondo las etiquetas de esta clase:*

* 📖 **MDN Web Docs (Oficial):**
  * [Estructura básica de un documento HTML](https://developer.mozilla.org/es/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax) - Para qué sirve cada etiqueta de la cabecera.
  * [La etiqueta `<a>` (Enlaces)](https://developer.mozilla.org/es/docs/Web/HTML/Element/a) - Atributos `href` y cómo abrir enlaces en pestañas nuevas con `target="_blank"`.
  * [La etiqueta `<img>` (Imágenes)](https://developer.mozilla.org/es/docs/Web/HTML/Element/img) - Por qué el atributo `alt` es obligatorio para accesibilidad.
* 🎬 **Video Corto (5 min):**
  * [Kevin Powell: HTML basics you must know](https://www.youtube.com/watch?v=kMxr6s_Wc_U) - Repaso visual de la estructura mínima que todo archivo web necesita para funcionar.
