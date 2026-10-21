#!/usr/bin/env node
/**
 * Generador Automático de Estructura Canónica de Clases
 * Trayecto Anual de Diseño Web por Proyectos 2027
 * 
 * Uso:
 *   node scripts/generar-clase.js <numero_de_clase>
 * Ejemplo:
 *   node scripts/generar-clase.js 2
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const CATALOGO_PATH = path.join(ROOT_DIR, 'data', 'clases.js');

// 1. Cargar el Catálogo Maestro
if (!fs.existsSync(CATALOGO_PATH)) {
  console.error('Error: No se encontró el catálogo en data/clases.js');
  process.exit(1);
}

const catalogoContent = fs.readFileSync(CATALOGO_PATH, 'utf8');
const vm = require('vm');
const context = { window: {} };
vm.createContext(context);
vm.runInContext(catalogoContent, context);
const CLASES = context.window.CATALOGO_CLASES;

if (!Array.isArray(CLASES)) {
  console.error('Error: window.CATALOGO_CLASES no es un array válido.');
  process.exit(1);
}

// 2. Obtener argumento de clase
const targetId = parseInt(process.argv[2], 10);
if (isNaN(targetId) || targetId < 1 || targetId > 32) {
  console.log('Uso: node scripts/generar-clase.js <numero_de_clase (1 a 32)>');
  console.log('Ejemplo: node scripts/generar-clase.js 2');
  process.exit(1);
}

const clase = CLASES.find(c => c.id === targetId);
if (!clase) {
  console.error(`Error: No se encontró la clase ${targetId} en el catálogo.`);
  process.exit(1);
}

console.log(`\n======================================================`);
console.log(`Generando estructura para ${clase.numero}: ${clase.titulo}`);
console.log(`Nivel ${clase.nivel} · Estilo: ${clase.estilo}`);
console.log(`======================================================\n`);

// 3. Determinar directorio destino
const folderName = path.dirname(path.dirname(clase.htmlPath));
const targetDir = path.join(ROOT_DIR, folderName);

if (fs.existsSync(targetDir)) {
  console.log(`Aviso: La carpeta ya existe en ${folderName}. Se preservarán los archivos existentes.`);
}

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function createFileIfNotExists(filePath, content) {
  if (fs.existsSync(filePath)) {
    console.log(`  [EXISTE]    ${path.relative(ROOT_DIR, filePath)}`);
  } else {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  [CREADO]    ${path.relative(ROOT_DIR, filePath)}`);
  }
}

// Crear estructura de directorios
ensureDir(targetDir);
ensureDir(path.join(targetDir, 'version-terminada', 'css'));
ensureDir(path.join(targetDir, 'starter-kit-guiado', 'css'));
ensureDir(path.join(targetDir, 'starter-kit-autonomo'));

// 4. Plantillas Canónicas

// A. FICHA-TECNICA.md
const fichaTecnicaContent = `# Ficha Técnica: ${clase.numero} - ${clase.titulo}

## 1. Identificación Pedagógica
* **Trayecto:** Trayecto Anual de Diseño Web por Proyectos 2027
* **Nivel:** ${clase.nivel} (${clase.nivel === 1 ? 'Flujo Continuo' : 'Viewport Applications'})
* **Semana:** ${clase.semana}
* **Duración:** 180 minutos (1 clase semanal)
* **Arquetipo Visual:** ${clase.estilo}

---

## 2. El Problema Visual
> "${clase.problema}"

---

## 3. Objetivos Técnicos de Aprendizaje
* **HTML5:** ${clase.aprendizaje}
* **CSS3:** Maquetación con unidades estándar (\`rem\`, \`px\` para bordes), variables en \`:root\` y selectores semánticos.
* **Interactividad:** ${clase.interaccion}

---

## 4. Distribución del Tiempo de Clase (180 min)
1. **00:00 - 00:35 (35 min):** Apertura, desarmado de \`version-terminada\` con DevTools (\`F12\`) y boceto en Excalidraw.
2. **00:35 - 00:40 (05 min):** Elección de modo (\`starter-kit-guiado\` vs \`starter-kit-autonomo\`).
3. **00:40 - 02:25 (105 min):** Taller de práctica guiado y mesa por mesa.
4. **02:25 - 02:40 (15 min):** Pausa activa.
5. **02:40 - 03:00 (20 min):** Puesta en común, dudas y cierre.
`;

createFileIfNotExists(path.join(targetDir, 'FICHA-TECNICA.md'), fichaTecnicaContent);

// B. INSTRUCCIONES.md
const instruccionesContent = `# Instrucciones de Trabajo: ${clase.numero}

## Proyecto: ${clase.titulo}

> **Meta:** Resolver el problema visual planteado construyendo la interfaz con código semántico y limpio.

---

### Paso 1: Boceto Rápido (5 minutos)
Antes de escribir código, abrí [Excalidraw](https://excalidraw.com) o tomá papel y lápiz:
* Identificá la caja principal (\`<main>\` o \`<article>\`).
* Dibujá los rectángulos interiores para cada sección.
* Señalá cuáles cajas van en fila y cuáles en columna.

---

### Paso 2: Nivel Base (Requisito Mínimo)
1. Abrí tu carpeta de trabajo elegida (\`starter-kit-guiado\` o \`starter-kit-autonomo\`).
2. Estructurá el HTML semántico siguiendo la jerarquía del diseño.
3. Vinculá la hoja de estilos \`css/styles.css\`.
4. Aplicá el modelo de caja y tipografía correspondiente.

---

### Paso 3: Desafío de Clase
* Agregá espaciados proporcionales en \`rem\`.
* Asegurá contraste de color y legibilidad.

---

### Paso 4: Reto Semanal (Opcional - 20 minutos)
* Modificá la paleta de colores para adaptarla a una temática propia.
* Agregá un componente secundario siguiendo el mismo estilo visual.

---

### Recursos y Documentación
* [MDN Web Docs: Guía de HTML](https://developer.mozilla.org/es/docs/Learn/HTML)
* [MDN Web Docs: Guía de CSS](https://developer.mozilla.org/es/docs/Learn/CSS)
`;

createFileIfNotExists(path.join(targetDir, 'INSTRUCCIONES.md'), instruccionesContent);

// C. version-terminada/index.html
const versionTerminadaHtml = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${clase.numero}: ${clase.titulo}</title>
  
  <!-- Tipografías -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,400&display=swap" rel="stylesheet">
  
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>

  <main class="project-container">
    <header class="project-header">
      <span class="project-badge">${clase.numero} · Nivel ${clase.nivel}</span>
      <h1 class="project-title">${clase.titulo}</h1>
      <p class="project-desc">${clase.problema}</p>
    </header>

    <article class="project-card">
      <!-- Contenido del proyecto resuelto -->
    </article>
  </main>

</body>
</html>
`;

createFileIfNotExists(path.join(targetDir, 'version-terminada', 'index.html'), versionTerminadaHtml);

// D. version-terminada/css/styles.css
const versionTerminadaCss = `/* ============================================================ */
/* ${clase.numero}: ${clase.titulo}
/* Arquetipo Visual: ${clase.estilo}
/* ============================================================ */

:root {
  --color-bg: #fafaf9;
  --color-card-bg: #ffffff;
  --color-text-main: #1c1917;
  --color-text-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #c2410c;

  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --radius-md: 4px;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-sans);
  background-color: var(--color-bg);
  color: var(--color-text-main);
  line-height: 1.5;
  padding: 2rem 1rem;
}

.project-container {
  max-width: 48rem;
  margin: 0 auto;
}

.project-header {
  margin-bottom: 2rem;
}

.project-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
}

.project-title {
  font-family: var(--font-serif);
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.project-desc {
  font-size: 1rem;
  color: var(--color-text-muted);
}

.project-card {
  background-color: var(--color-card-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 2rem;
}
`;

createFileIfNotExists(path.join(targetDir, 'version-terminada', 'css', 'styles.css'), versionTerminadaCss);

// E. starter-kit-guiado
createFileIfNotExists(path.join(targetDir, 'starter-kit-guiado', 'index.html'), versionTerminadaHtml);
createFileIfNotExists(path.join(targetDir, 'starter-kit-guiado', 'css', 'styles.css'), `/* Plantilla Guiada: Completá las propiedades indicadas */\n\n` + versionTerminadaCss);

// F. starter-kit-autonomo
createFileIfNotExists(path.join(targetDir, 'starter-kit-autonomo', 'contenido.txt'), `${clase.titulo}\n\n${clase.problema}\n\n${clase.aprendizaje}`);
createFileIfNotExists(path.join(targetDir, 'starter-kit-autonomo', 'CONSIGNA-AUTONOMA.md'), `# Modo Autónomo: ${clase.numero}\n\nConstruí la interfaz desde cero usando el texto crudo de \`contenido.txt\` y la referencia visual de \`version-terminada\`.\n`);

console.log(`\nEstructura canónica de ${clase.numero} lista.`);
