document.addEventListener('DOMContentLoaded', () => {
  const htmlEl = document.documentElement;
  const announcer = document.getElementById('a11y-announcer');

  const btnDiminuir = document.getElementById('btn-diminuir');
  const btnResetar = document.getElementById('btn-resetar');
  const btnAumentar = document.getElementById('btn-aumentar');
  const btnContraste = document.getElementById('btn-contraste');

  // Configurações de escala de fonte (%)
  const STEP = 10;
  const MIN_SCALE = 80;
  const MAX_SCALE = 150;
  let currentScale = parseInt(localStorage.getItem('portal-font-scale'), 10) || 100;

  // Função para anunciar mudanças aos leitores de tela
  function announce(message) {
    announcer.textContent = '';
    setTimeout(() => {
      announcer.textContent = message;
    }, 50);
  }

  // Aplicar escala de fonte
  function applyFontScale(scale) {
    currentScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale));
    htmlEl.style.setProperty('--font-scale', `${currentScale}%`);
    localStorage.setItem('portal-font-scale', currentScale);

    // Atualiza estado desabilitado nos limites para clareza de navegação
    btnDiminuir.disabled = currentScale <= MIN_SCALE;
    btnAumentar.disabled = currentScale >= MAX_SCALE;
  }

  // Aplicar alto contraste
  function applyContrast(isHighContrast) {
    htmlEl.classList.toggle('high-contrast', isHighContrast);
    btnContraste.setAttribute('aria-pressed', String(isHighContrast));
    localStorage.setItem('portal-high-contrast', String(isHighContrast));
  }

  // Inicialização com preferências salvas
  applyFontScale(currentScale);
  const savedContrast = localStorage.getItem('portal-high-contrast') === 'true';
  applyContrast(savedContrast);

  // Eventos dos botões de fonte
  btnAumentar.addEventListener('click', () => {
    applyFontScale(currentScale + STEP);
    announce(`Tamanho do texto aumentado para ${currentScale}%`);
  });

  btnDiminuir.addEventListener('click', () => {
    applyFontScale(currentScale - STEP);
    announce(`Tamanho do texto diminuído para ${currentScale}%`);
  });

  btnResetar.addEventListener('click', () => {
    applyFontScale(100);
    announce('Tamanho do texto restaurado para 100%');
  });

  // Evento do botão de contraste
  btnContraste.addEventListener('click', () => {
    const isNowActive = !htmlEl.classList.contains('high-contrast');
    applyContrast(isNowActive);
    announce(isNowActive ? 'Modo de alto contraste ativado' : 'Modo de alto contraste desativado');
  });
});