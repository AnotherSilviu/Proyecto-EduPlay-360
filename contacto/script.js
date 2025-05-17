function scrollToInfo() {
    document.getElementById('info').scrollIntoView({ behavior: 'smooth' });
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    const animatables = document.querySelectorAll('.animate-in');
    animatables.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.3}s`;
    });
  });
  

function toggleDept(header) {
  const grid = header.nextElementSibling;
  grid.classList.toggle("hidden");
}

  document.getElementById("formulario-contacto").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto pronto.");
    this.reset(); 
  });

  