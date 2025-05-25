const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Función extra si la usas (por ejemplo en fases por departamento)
function toggleDept(header) {
  const grid = header.nextElementSibling;
  if (grid) {
    grid.classList.toggle("hidden");
  }
}


  