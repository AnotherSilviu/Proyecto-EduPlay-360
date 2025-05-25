
  document.getElementById("formulario-contacto").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto pronto.");
    this.reset(); 
  });

  