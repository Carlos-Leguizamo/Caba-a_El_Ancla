// Capturamos el checkbox del menú
const navCheckbox = document.querySelector('.layout__nav-responsive');

// Función para manejar el desplazamiento de la página
function toggleBodyScroll() {
    document.body.classList.toggle('no-scroll');
}

// Event listener para el cambio de estado del checkbox
navCheckbox.addEventListener('change', function() {
    if (this.checked) {
        // Si el menú está activo, deshabilitamos el desplazamiento de la página
        toggleBodyScroll();
    } else {
        // Si el menú está inactivo, habilitamos el desplazamiento de la página
        toggleBodyScroll();
    }
});
