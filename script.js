// ── AÑO EN EL FOOTER ──
document.getElementById('footer-year').textContent =
  '© ' + new Date().getFullYear() + ' DulceMom. Todos los derechos reservados.';

// ── HEADER STICKY ──
window.addEventListener('scroll', function () {
  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 20);
});

// ── MENÚ MÓVIL ──
function toggleMenu() {
  var nav      = document.getElementById('nav-mobile');
  var iconMenu  = document.getElementById('icon-menu');
  var iconClose = document.getElementById('icon-close');
  var isOpen   = nav.classList.toggle('open');

  iconMenu.style.display  = isOpen ? 'none'  : 'block';
  iconClose.style.display = isOpen ? 'block' : 'none';
}

// ── SCROLL SUAVE ──
function scrollTo(id) {
  // Cerrar menú móvil si está abierto
  document.getElementById('nav-mobile').classList.remove('open');
  document.getElementById('icon-menu').style.display  = 'block';
  document.getElementById('icon-close').style.display = 'none';

  if (id === 'inicio') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  var el = document.getElementById(id);
  if (!el) return;

  var offset = 80;
  var top = el.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top: top, behavior: 'smooth' });
}

// ── ANIMACIÓN AL HACER SCROLL (REVEAL) ──
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(function (el) {
  observer.observe(el);
});
