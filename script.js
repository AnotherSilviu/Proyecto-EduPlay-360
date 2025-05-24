
  
  // Inicializar el swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,  // Solo una fase visible
  spaceBetween: 10,  // Espacio entre las fases
  navigation: {
    nextEl: '.swiper-button-next',  // Botón siguiente
    prevEl: '.swiper-button-prev',  // Botón anterior
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

function toggleDept(header) {
  const grid = header.nextElementSibling;
  grid.classList.toggle("hidden");
}


  