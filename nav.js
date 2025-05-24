function scrollToInfo() {
    document.getElementById('info').scrollIntoView({ behavior: 'smooth' });
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    const animatables = document.querySelectorAll('.animate-in');
    animatables.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.3}s`;
    });
  });

// Funciones para abrir y cerrar el menú de navegación
function openNav() {
  let menu = document.getElementById("mobile-menu");
  menu.style.display = "flex"; 
  setTimeout(() => {
    menu.style.width = "100%";
  }, 10);
}

function closeNav() {
  let menu = document.getElementById("mobile-menu");
  menu.style.width = "0%";
  setTimeout(() => {
    menu.style.display = "none";
  }, 300);
}


document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', e => {
    e.preventDefault();

    const subMenu = toggle.nextElementSibling;
    if (!subMenu) return;

    // Alternar desplegado del submenu actual
    subMenu.classList.toggle('active');
  });
});
