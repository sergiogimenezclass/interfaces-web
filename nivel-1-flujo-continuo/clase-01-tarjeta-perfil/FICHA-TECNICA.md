# Ficha Técnica - Clase 01: Tarjeta de Perfil Personal (Link in Bio)

## 1. Identificación de la Interfaz
* **Nivel:** 1 (Páginas Web y Sitios de Lectura)
* **Semana:** 01
* **Interfaz a construir:** Tarjeta de presentación personal de autor (tipo "Link in Bio" / Linktree propio) con foto de perfil redondeada, nombre del autor, especialidad o biografía corta, lista de enlaces a proyectos y redes, y ubicación geográfica.
* **Estilo Visual Elegido:** **Editorial Cálido (Humanista / Autor)**
  * Fondo arena suave (`#fafaf9`), tarjeta blanca con borde sutil (`#e7e5e4`), acento terracota (`#c2410c`), tipografía serif elegante (*Playfair Display*) en el nombre y sans-serif en el texto.

---

## 2. El Problema que Resolvemos y Conceptos Clave

| Concepto Técnico | El Problema Real que Resuelve en la Pantalla |
| :--- | :--- |
| `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>` | La computadora necesita saber que este archivo no es un texto plano de Word, sino un documento que el navegador web debe interpretar y dibujar. |
| Metadatos: `<meta charset="UTF-8">` y `<meta name="viewport">` | Sin UTF-8, las tildes y las "ñ" aparecen como símbolos rotos (`Ã±`). Sin el viewport, la página se ve diminuta e ilegible en un celular. |
| `<link rel="stylesheet" href="css/styles.css">` | Escribir estilos adentro del HTML mezcla el contenido con el diseño y hace que el archivo sea inmanejable. La etiqueta `<link>` conecta la hoja de estilos externa. |
| `<h1>`, `<p>`, `<a>`, `<img>` con atributo `alt` | Los textos no pueden ser todos iguales; necesitamos jerarquía visual (título principal vs descripción) y enlaces clicables reales. Las imágenes necesitan `alt` para personas con discapacidad visual y por si la foto no carga. |
| Selector de etiqueta y de clase en CSS (`body`, `.card`, `.profile-link`) | Por defecto, la web muestra texto negro pegado al borde izquierdo con enlaces azules subrayados. Las clases nos permiten pintar y dar forma a cada caja por separado. |

---

## 3. Boceto Rápido de Cajas (5 minutos de apertura)

Antes de escribir código, abrimos [Excalidraw](https://excalidraw.com) o usamos papel para dibujar la estructura en 3 niveles de cajas rectangulares:

```text
┌──────────────────────────────────────────────┐
│ PANTALLA COMPLETA (body)                     │
│                                              │
│   ┌──────────────────────────────────────┐   │
│   │ TARJETA PRINCIPAL (.profile-card)    │   │
│   │                                      │   │
│   │   [ FOTO DE PERFIL ] (.avatar)       │   │
│   │   [ NOMBRE DE AUTOR ] (h1)           │   │
│   │   [ BIOGRAFÍA / ROL ] (p)            │   │
│   │                                      │   │
│   │   ┌──────────────────────────────┐   │   │
│   │   │ [ Botón Enlace 1 ] (.link)   │   │   │
│   │   │ [ Botón Enlace 2 ] (.link)   │   │   │
│   │   │ [ Botón Enlace 3 ] (.link)   │   │   │
│   │   │ [ Botón Enlace 4 ] (.link)   │   │   │
│   │   └──────────────────────────────┘   │   │
│   │                                      │   │
│   │   [ PIE: Ubicación ] (small)         │   │
│   └──────────────────────────────────────┘   │
└──────────────────────────────────────────────┘
```

---

## 4. Estructura de los Dos Modos de Ayuda

La carpeta de la clase ofrece dos caminos para que cada alumno elija según su seguridad:

```text
clase-01-tarjeta-perfil/
├── FICHA-TECNICA.md
├── INSTRUCCIONES.md
├── starter-kit-guiado/          # MODO GUIADO (Con plantilla)
│   ├── index.html              # Estructura armada con comentarios de ayuda
│   └── css/styles.css          # Estilos base con renglones listos para completar
└── starter-kit-autonomo/        # MODO AUTÓNOMO (Hoja en blanco)
    ├── contenido.txt           # Textos crudos y enlaces sin formato
    └── preview-referencia.png  # Captura visual de cómo debe quedar terminada
```

---

## 5. Preguntas para la Puesta en Común de Cierre (Últimos 20 min)

### Pregunta de Modelo Mental:
> *"Si en el HTML borramos la etiqueta `<link rel="stylesheet" href="...">`, ¿qué le pasa a la página en el navegador? ¿Desaparece el contenido o solo pierde la estética?"*

### Pregunta de Debugging:
> *"Si escribiste una regla en el CSS para `.profile-btn` pero en la pantalla el botón sigue viéndose como un enlace azul común y corriente, ¿cuáles son los 2 primeros lugares donde buscás el error?"*
