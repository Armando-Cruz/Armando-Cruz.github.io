document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu'),
          navegacion = document.getElementById('navegacion-principal');

    // Funciones
    const mostrarMenu = () => {
        if (navegacion.classList.contains('visible')) {
            navegacion.classList.remove('visible');
            document.body.classList.remove('modal');
        }
        else {
            navegacion.classList.add('visible');
            document.body.classList.add('modal');
        }
    };

    mobileMenu.addEventListener('click', mostrarMenu);
});