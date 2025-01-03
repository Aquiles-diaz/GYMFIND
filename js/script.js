document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll("#home, #tips, #services");

  // Función para detectar si el elemento está en la vista
  function checkVisibility() {
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= window.innerHeight * 0.75) {
        element.classList.add("visible");
      } else {
        element.classList.remove("visible");
      }
    });
  }

  // Detectar el scroll
  window.addEventListener("scroll", checkVisibility);

  // Verificar la visibilidad al cargar la página
  checkVisibility();
});
