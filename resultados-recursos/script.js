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

function mostrarFases(fase) {
  const fases = {
    "Fase 1": `
      <p><strong>Duración:</strong> Semana 1-2.</p>
      <p><strong>Tareas:</strong> 
        Detección de necesidades a través de encuestas a diferentes startups.<br>
        Benchmarking de competencias digitales según el marco DigComp.<br>
        Creación del presupuesto inicial.
      </p>
      <p><strong>Responsables principales:</strong></p>
      <ul>
        <li><strong>Carolina Márquez</strong> (Diseño Instruccional)</li>
        <li><strong>Daniel Rubio</strong> (Finanzas)</li>
      </ul>
      <p><strong>Supervisión y colaboración:</strong></p>
      <ul>
        <li><strong>Ramón Sánchez</strong> (Dirección)</li>
        <li><strong>José Luis Pérez</strong> (RRHH)</li>
      </ul>`,
    "Fase 2": `
      <p><strong>Duración:</strong> Semana 3-5.</p>
      <p><strong>Tareas:</strong> 
        Creación de la narrativa de Tech City.<br>
        Diseño del itinerario gamificado.<br>
        Selección de participantes.
      </p>
      <p><strong>Responsables principales:</strong></p>
      <ul>
        <li><strong>Raquel Enrique</strong> (C. Pedagógica)</li>
        <li><strong>Ainara García</strong> (Comunicación)</li>
        <li><strong>José Luis Pérez</strong> (RRHH)</li>
      </ul>
      <p><strong>Supervisión y colaboración:</strong></p>
      <ul>
        <li><strong>M. Teresa Ventanilla</strong> (Tecnologías)</li>
        <li><strong>Carolina Márquez</strong> (Diseño instruccional)</li>
      </ul>
    `,
    "Fase 3": `
      <p><strong>Duración:</strong> Semana 6-12.</p>
      <p><strong>Tareas:</strong> 
        Construcción de la plataforma LMS e integración de las tecnologías de VR/3D.<br>
        Producción de diferentes contenidos interactivos.<br>
        Realización de test de usabilidad.
      </p>
      <p><strong>Responsables principales:</strong></p>
      <ul>
        <li><strong>Daniela Navarro</strong> (Programación)</li>
        <li><strong>Sofía Méndez</strong> (RV/3D)</li>
        <li><strong>Álvaro López</strong> (Contenido)</li>
      </ul>
      <p><strong>Supervisión y colaboración:</strong></p>
      <ul>
        <li><strong>Luis Fernández</strong> (Robótica)</li>
        <li><strong>Raquel Enrique</strong> (Coordinación)</li>
      </ul>
    `,
    "Fase 4": `
      <p><strong>Duración:</strong> Semana 13-23.</p>
      <p><strong>Tareas:</strong> 
        Lanzamiento del entorno Tech City.<br>
        Tutorías técnicas en tiempo real.<br>
        Monitoreo de las métricas de abandono.
      </p>
      <p><strong>Responsables principales:</strong></p>
      <ul>
        <li><strong>M. Teresa Ventanilla</strong> (Tutoría)</li>
        <li><strong>Luis Fernández</strong> (Robótica)</li>
        <li><strong>Raquel Enrique</strong> (Coordinación)</li>
      </ul>
      <p><strong>Supervisión y colaboración:</strong></p>
      <ul>
        <li><strong>Daniela Navarro</strong> (Soporte)</li>
        <li><strong>Ainara García</strong> (Comunicación)</li>
      </ul>
    `,
    "Fase 5": `
      <p><strong>Duración:</strong> Semana 24.</p>
      <p><strong>Tareas:</strong> 
        Informe final con ROI y estudio de los casos de éxito.<br>
        Creación de una red colaborativa.<br>
        Realización de encuentas Net Promoter Score (NPS) para medir la satisfacción de las personas participantes.<br>
        Memoria final y recogica de conclusiones y propuestas de mejora para futuras formaciones.
      </p>
      <p><strong>Responsables principales:</strong></p>
      <ul>
        <li><strong>Daniel Rubio</strong> (Finanzas)</li>
        <li><strong>M. Teresa Ventanilla</strong> (Evaluación)</li>
      </ul>
      <p><strong>Supervisión y colaboración:</strong></p>
      <ul>
        <li><strong>Ramón Sánchez</strong> (Dirección)</li>
        <li><strong>Ainara García</strong> (Marketing)</li>
      </ul>
    `,
  };

  document.getElementById("modal-body").innerHTML =
    fases[fase] || "<p>No hay información disponible.</p>";
  document.getElementById("modal").classList.remove("hidden");
}

function cerrarModal() {
  document.getElementById("modal").classList.add("hidden");
}

function toggleDept(header) {
  const grid = header.nextElementSibling;
  grid.classList.toggle("hidden");
}

//Funcion de boton Empezar
function scrollToInfo() {
    document.getElementById('modelo').scrollIntoView({ behavior: 'smooth' });
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    const animatables = document.querySelectorAll('.animate-in');
    animatables.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.3}s`;
    });
  });
  

  //Ampliar imagen
function ampliarImagen(src) {
    const modal = document.getElementById("img-modal");
    const modalImg = document.getElementById("modal-img");
    modalImg.src = src;
    modal.classList.remove("hidden");
  }

  function cerrarModal() {
    document.getElementById("img-modal").classList.add("hidden");
  }

  //GRafico

  document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('graficoPresupuesto');

  if (ctx) {
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: [
          'Evaluación',
          'Análisis',
          'Diseño',
          'Costes fijos',
          'Desarrollo',
          'Implementación'
        ],
        datasets: [{
          data: [3.2, 6.3, 8.4, 15.8, 26.3, 40.0],
          backgroundColor: [
            '#9BA1A6',
            '#0F5D7A',
            '#2E8D99',
            '#C6CED6',
            '#003F5C',
            '#8FB9E1'
          ]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: '',
            font: {
              size: 18
            }
          },
          legend: {
            position: 'right'
          }
        }
      }
    });
  }
});
