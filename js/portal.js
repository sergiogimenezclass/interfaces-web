/**
 * Portal Interactivo de Clases
 * Stack: JS Vanilla encapsulado en IIFE (Regla de proyecto)
 */
(() => {
  // 1. Datos de las Clases del Trayecto (Fuente Única: data/clases.js)
  const CLASES = window.CATALOGO_CLASES || [];

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

  // Navegación de Vistas Principales (SPA)
  const mainNavButtons = document.querySelectorAll('[data-view]');
  const portalViews = document.querySelectorAll('.portal-view');

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

    // Cargar Código HTML con fetch nativo y colorear sintaxis
    if (codeHtml && clase.htmlPath) {
      codeHtml.textContent = 'Cargando código HTML...';
      fetch(clase.htmlPath)
        .then(res => {
          if (!res.ok) throw new Error('No se pudo cargar el archivo');
          return res.text();
        })
        .then(html => {
          if (window.Prism && Prism.languages.html) {
            codeHtml.innerHTML = Prism.highlight(html, Prism.languages.html, 'html');
          } else {
            codeHtml.textContent = html;
          }
        })
        .catch(err => {
          codeHtml.textContent = `Error al cargar: ${err.message}`;
        });
    }

    // Cargar Código CSS con fetch nativo y colorear sintaxis
    if (codeCss && clase.cssPath) {
      codeCss.textContent = 'Cargando estilos CSS...';
      fetch(clase.cssPath)
        .then(res => {
          if (!res.ok) throw new Error('No se pudo cargar el archivo');
          return res.text();
        })
        .then(css => {
          if (window.Prism && Prism.languages.css) {
            codeCss.innerHTML = Prism.highlight(css, Prism.languages.css, 'css');
          } else {
            codeCss.textContent = css;
          }
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

  // 7. Navegación entre Vistas Principales (SPA)
  function switchMainView(viewName) {
    const validViews = ['proyectos', 'programa', 'metodologia'];
    const activeView = validViews.includes(viewName) ? viewName : 'proyectos';

    mainNavButtons.forEach(btn => {
      btn.classList.toggle('is-active', btn.getAttribute('data-view') === activeView);
    });

    portalViews.forEach(view => {
      view.classList.toggle('is-active', view.id === `view-${activeView}`);
    });
  }

  mainNavButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.getAttribute('data-view');
      if (view) {
        window.location.hash = view;
        switchMainView(view);
      }
    });
  });

  // Sincronizar vista con el hash de la URL
  function syncViewWithHash() {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      switchMainView(hash);
    }
  }

  window.addEventListener('hashchange', syncViewWithHash);

  // 8. Eventos de Control del Visor y Filtros
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
  syncViewWithHash();
})();
