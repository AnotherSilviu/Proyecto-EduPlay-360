function mostrarFunciones(nombre) {
    const funciones = {
      "Ramón Sánchez": "<h3>Ramón Sánchez</h3><p><strong>Funciones Clave:</strong> Supervisión de la estrategia global, alineación con socios y gestión del presupuesto.</p><p><strong>Fases ADDIE:</strong> TODAS (Análisis y Evaluación en especial)</p>",
      "Raquel Enrique": "<h3>Raquel Enrique</h3><p><strong>Funciones Clave:</strong> Gestión pedagógica, supervisión de la calidad educativa y del cumplimiento de los objetivos de la formación.</p><p><strong>Fases ADDIE:</strong> Diseño, Desarrollo, Implementación</p>",
      "Carolina Márquez": "<h3>Carolina Márquez</h3><p><strong>Funciones Clave:</strong> Diseño del itinerario (ADDIE), gamificación, accesibilidad (DUA)</p><p><strong>Fases ADDIE:</strong> Análisis, Diseño, Desarrollo</p>",
      "M. Teresa Ventanilla": "<h3>M. Teresa Ventanilla</h3><p><strong>Funciones Clave:</strong> Diseño de talleres y acompañamiento práctico.</p><p><strong>Fases ADDIE:</strong> Desarrollo, Implementación, Evaluación</p>",
      "Luis Fernández": "<h3>Luis Fernández</h3><p><strong>Funciones Clave:</strong> Diseño de talleres y acompañamiento práctico.</p><p><strong>Fases ADDIE:</strong> Desarrollo, Implementación</p>",
      "Sofía Méndez": "<h3>Sofía Méndez</h3><p><strong>Funciones Clave:</strong> Simulaciones, formación en software 3D, gestión de recursos técnicos y licencias.</p><p><strong>Fases ADDIE:</strong> Desarrollo, Implementación</p>",
      "Álvaro López": "<h3>Álvaro López</h3><p><strong>Funciones Clave:</strong> Supervisión de la plataforma educativa de apoyo. Desarrollo multimedia, maquetación, recursos.</p><p><strong>Fases ADDIE:</strong> Desarrollo, Implementación</p>",
      "Daniela Navarro": "<h3>Daniela Navarro</h3><p><strong>Funciones Clave:</strong> Gestión de credenciales, soporte técnico.</p><p><strong>Fases ADDIE:</strong> TODAS (especialmente Desarrollo)</p>",
      "Ainara García": "<h3>Ainara García</h3><p><strong>Funciones Clave:</strong> Branding, redes sociales, estrategia de difusión</p><p><strong>Fases ADDIE:</strong> Diseño, Implementación</p>",
      "José Luis Pérez": "<h3>José Luis Pérez</h3><p><strong>Funciones Clave:</strong> Selección de equipo y bienestar laboral.</p><p><strong>Fases ADDIE:</strong> Análisis, Desarrollo</p>",
      "Daniel Rubio": "<h3>Daniel Rubio</h3><p><strong>Funciones Clave:</strong> Control presupuestario y financiero del proyecto .</p><p><strong>Fases ADDIE:</strong> TODAS (Análisis y Evaluación en especial)</p>"
    };

    document.getElementById("modal-body").innerHTML = funciones[nombre] || "<p>No hay información disponible.</p>";
    document.getElementById("modal").classList.remove("hidden");
  }

  function cerrarModal() {
    document.getElementById("modal").classList.add("hidden");
  }

  function toggleDept(header) {
    const grid = header.nextElementSibling;
    grid.classList.toggle("hidden");
  }

  function toggleDept(header) {
  const grid = header.nextElementSibling;
  grid.classList.toggle("hidden");
}
