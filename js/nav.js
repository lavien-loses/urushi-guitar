// サイト共通ナビゲーション（ハンバーガーメニュー）
(function () {
  const toggle = document.getElementById('nav_toggle');
  const drawer = document.getElementById('nav_drawer');
  const overlay = document.getElementById('nav_overlay');
  const closeBtn = document.getElementById('nav_close');

  if (!toggle || !drawer || !overlay) return;

  function openDrawer() {
    drawer.classList.add('is-open');
    overlay.classList.add('is-open');
    toggle.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    document.documentElement.classList.add('nav_locked');
  }

  function closeDrawer() {
    drawer.classList.remove('is-open');
    overlay.classList.remove('is-open');
    toggle.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    document.documentElement.classList.remove('nav_locked');
  }

  toggle.addEventListener('click', function () {
    if (drawer.classList.contains('is-open')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  overlay.addEventListener('click', closeDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDrawer();
  });

  drawer.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeDrawer);
  });

  // 現在のページをハイライト
  const current = location.pathname.split('/').pop() || 'index.html';
  drawer.querySelectorAll('a[href]').forEach(function (a) {
    const href = a.getAttribute('href').split('#')[0].replace(/^\.\//, '');
    if (href && href === current) {
      a.classList.add('is-current');
    }
  });
})();
