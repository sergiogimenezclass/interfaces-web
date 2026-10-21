/**
 * Portal Interactivo de Clases
 * Stack: JS Vanilla encapsulado en IIFE (Regla de proyecto)
 */
(() => {
  // 1. Datos de las Clases del Trayecto
  const CLASES = [
    {
      id: 1,
      numero: "Clase 01",
      semana: "Semana 01",
      nivel: 1,
      titulo: "Tarjeta de Perfil Personal (Link in Bio)",
      problema: "La web por defecto muestra texto plano desordenado. Estructuramos un documento semántico y estilizamos enlaces.",
      estilo: "Editorial Cálido",
      activa: true,
      htmlPath: "nivel-1-flujo-continuo/clase-01-tarjeta-perfil/version-terminada/index.html",
      cssPath: "nivel-1-flujo-continuo/clase-01-tarjeta-perfil/version-terminada/css/styles.css"
    },
    {
      id: 2,
      numero: "Clase 02",
      semana: "Semana 02",
      nivel: 1,
      titulo: "Ficha de Receta Culinaria",
      problema: "Jerarquías semánticas y legibilidad tipográfica en textos extensos.",
      estilo: "Editorial Cálido",
      activa: false
    },
    {
      id: 3,
      numero: "Clase 03",
      semana: "Semana 03",
      nivel: 1,
      titulo: "Tarjeta de Producto E-Commerce",
      problema: "El Modelo de Caja (Box Model I): padding, margin y desbordes.",
      estilo: "SaaS Moderno",
      activa: false
    },
    {
      id: 4,
      numero: "Clase 04",
      semana: "Semana 04",
      nivel: 1,
      titulo: "Banner Promocional CTA",
      problema: "Box Model II: box-sizing border-box y fondos de imagen.",
      estilo: "Neo-Brutalismo",
      activa: false
    },
    {
      id: 5,
      numero: "Clase 05",
      semana: "Semana 05",
      nivel: 1,
      titulo: "Artículo Editorial con Citas",
      problema: "Google Fonts, escalas en rem y límites de ancho de lectura.",
      estilo: "Editorial Cálido",
      activa: false
    },
    {
      id: 6,
      numero: "Clase 06",
      semana: "Semana 06",
      nivel: 1,
      titulo: "Barra de Navegación (Topbar)",
      problema: "Flexbox I: alineación en fila horizontal y distribución a extremos.",
      estilo: "SaaS Moderno",
      activa: false
    },
    {
      id: 7,
      numero: "Clase 07",
      semana: "Semana 07",
      nivel: 1,
      titulo: "Barra de Herramientas y Acciones",
      problema: "Flexbox II: centrado vertical con align-items y separación con gap.",
      estilo: "Industrial / Fintech",
      activa: false
    },
    {
      id: 8,
      numero: "Clase 08",
      semana: "Semana 08",
      nivel: 1,
      titulo: "Tabla de Precios y Planes (Pricing Table)",
      problema: "Flexbox III: emparejar alturas con stretch y anclar botones al fondo.",
      estilo: "SaaS Moderno",
      activa: true,
      htmlPath: "nivel-1-flujo-continuo/clase-08-tabla-de-precios/version-terminada/index.html",
      cssPath: "nivel-1-flujo-continuo/clase-08-tabla-de-precios/version-terminada/css/styles.css"
    },
    {
      id: 9,
      numero: "Clase 09",
      semana: "Semana 09",
      nivel: 1,
      titulo: "Galería de Trabajos (Portfolio)",
      problema: "Flexbox IV: columnas responsivas fluidas con flex-wrap.",
      estilo: "Neo-Brutalismo",
      activa: false
    },
    {
      id: 17,
      numero: "Clase 17",
      semana: "Semana 17",
      nivel: 2,
      titulo: "Setup Profesional con Git",
      problema: "Inicialización de repositorio, commits en terminal y push a GitHub.",
      estilo: "Industrial / Fintech",
      activa: false
    },
    {
      id: 22,
      numero: "Clase 22",
      semana: "Semana 22",
      nivel: 2,
      titulo: "Estructura Base de una App (App Shell)",
      problema: "CSS Grid con áreas nombradas, 100dvh y scroll independiente.",
      estilo: "Industrial / Fintech",
      activa: false
    },
    {
      id: 31,
      numero: "Clase 31",
      semana: "Semana 31",
      nivel: 2,
      titulo: "Proyecto Final: Dashboard SaaS Completo",
      problema: "Integración total de Grid, Bento, tablas, modales y modo oscuro.",
      estilo: "Libre",
      activa: false
    }
  ];

  // 2. Elementos del DOM
  const gridContainer = document.getElementById('classes-grid');
  const filterButtons = document.querySelectorAll('[data-filter]');
  
  // Elementos del Visor
  const viewerOverlay = document.getElementById('viewer-overlay');
  const viewerTitle = document.getElementById('viewer-project-title');
  const viewerCloseBtn = document.getElementById('viewer-close-btn');
  const previewFrame = document.getElementById('preview-frame');
  const codeHtml = document.getElementById('code-html');
  const codeCss = document.getElementById('code-css');
  const tabButtons = document.querySelectorAll('[data-viewer-tab]');
  const viewerPanes = document.querySelectorAll('[data-viewer-pane]');
  const deviceButtons = document.querySelectorAll('[data-device]');

  let currentLevelFilter = 'all';

  // 3. Renderizar las tarjetas en la grilla
  function renderCards() {
    if (!gridContainer) return;
    gridContainer.innerHTML = '';

    const filtered = CLASES.filter(clase => {
      if (currentLevelFilter === 'all') return true;
      return String(clase.nivel) === String(currentLevelFilter);
    });

    filtered.forEach(clase => {
      const card = document.createElement('article');
      card.className = `class-card ${clase.activa ? '' : 'is-locked'}`;

      card.innerHTML = `
        <div class="class-card-header">
          <span class="class-week">${clase.semana} · Nivel ${clase.nivel}</span>
          <span class="class-status ${clase.activa ? 'status-active' : 'status-locked'}">
            ${clase.activa ? '● Disponible' : '🔒 Próximamente'}
          </span>
        </div>
        
        <h3 class="class-title">${clase.titulo}</h3>
        <p class="class-desc">${clase.problema}</p>
        
        <div>
          <span class="class-tag-style">Estilo: ${clase.estilo}</span>
        </div>

        <div class="class-card-footer">
          ${clase.activa 
            ? `<button class="btn-open-viewer" data-open-id="${clase.id}">Abrir Proyecto en Vivo</button>`
            : `<button class="btn-disabled" disabled>Se habilita en clase</button>`
          }
        </div>
      `;

      gridContainer.appendChild(card);
    });

    // Conectar botones de apertura
    document.querySelectorAll('[data-open-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = Number(btn.getAttribute('data-open-id'));
        const claseSeleccionada = CLASES.find(c => c.id === id);
        if (claseSeleccionada) openViewer(claseSeleccionada);
      });
    });
  }

  // 4. Abrir el Visor con la Clase
  function openViewer(clase) {
    if (!viewerOverlay) return;

    viewerTitle.textContent = `${clase.numero}: ${clase.titulo}`;
    
    // Cargar iframe
    if (previewFrame && clase.htmlPath) {
      previewFrame.src = clase.htmlPath;
    }

    // Cargar Código HTML con fetch nativo
    if (codeHtml && clase.htmlPath) {
      codeHtml.textContent = 'Cargando código HTML...';
      fetch(clase.htmlPath)
        .then(res => {
          if (!res.ok) throw new Error('No se pudo cargar el archivo');
          return res.text();
        })
        .then(html => {
          codeHtml.textContent = html;
        })
        .catch(err => {
          codeHtml.textContent = `Error al cargar: ${err.message}`;
        });
    }

    // Cargar Código CSS con fetch nativo
    if (codeCss && clase.cssPath) {
      codeCss.textContent = 'Cargando estilos CSS...';
      fetch(clase.cssPath)
        .then(res => {
          if (!res.ok) throw new Error('No se pudo cargar el archivo');
          return res.text();
        })
        .then(css => {
          codeCss.textContent = css;
        })
        .catch(err => {
          codeCss.textContent = `Error al cargar: ${err.message}`;
        });
    }

    // Restablecer a la primera pestaña (Preview)
    switchTab('preview');
    viewerOverlay.classList.add('is-open');
  }

  // 5. Cerrar el Visor
  function closeViewer() {
    if (!viewerOverlay) return;
    viewerOverlay.classList.remove('is-open');
    if (previewFrame) previewFrame.src = '';
  }

  // 6. Alternar Pestañas del Visor (Preview vs HTML vs CSS)
  function switchTab(tabId) {
    tabButtons.forEach(b => b.classList.toggle('is-active', b.getAttribute('data-viewer-tab') === tabId));
    viewerPanes.forEach(pane => pane.classList.toggle('is-active', pane.getAttribute('data-viewer-pane') === tabId));
  }

  // 7. Eventos de Control
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      currentLevelFilter = btn.getAttribute('data-filter') || 'all';
      renderCards();
    });
  });

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-viewer-tab');
      if (tabId) switchTab(tabId);
    });
  });

  deviceButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      deviceButtons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const device = btn.getAttribute('data-device');
      if (previewFrame) {
        previewFrame.classList.toggle('is-mobile', device === 'mobile');
      }
    });
  });

  if (viewerCloseBtn) viewerCloseBtn.addEventListener('click', closeViewer);
  if (viewerOverlay) {
    viewerOverlay.addEventListener('click', (e) => {
      if (e.target === viewerOverlay) closeViewer();
    });
  }

  // Escuchar tecla Escape para cerrar
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeViewer();
  });

  // Inicializar
  renderCards();
})();
