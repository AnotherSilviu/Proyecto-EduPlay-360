// Botón "Empezar"
function scrollToInfo() {
  const info = document.getElementById('info');
  if (info) {
    info.scrollIntoView({ behavior: 'smooth' });
  }
}

// Animaciones al cargar
window.addEventListener('DOMContentLoaded', () => {
  const animatables = document.querySelectorAll('.animate-in');
  animatables.forEach((el, i) => {
    el.style.animationDelay = `${i * 0.3}s`;
  });
});

// Menú móvil: abrir y cerrar
function openNav() {
  const menu = document.getElementById("mobile-menu");
  menu.style.display = "flex";
  setTimeout(() => {
    menu.style.width = "100%";
  }, 10);
}

function closeNav() {
  const menu = document.getElementById("mobile-menu");
  menu.style.width = "0%";
  setTimeout(() => {
    menu.style.display = "none";
  }, 300);
}

// Dropdown dinámico (solo para móvil)
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', e => {
    e.preventDefault();
    const subMenu = toggle.nextElementSibling;
    if (!subMenu) return;
    subMenu.classList.toggle('active');
  });
});
