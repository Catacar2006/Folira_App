document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('main');
    const menuToggle = document.querySelector('.menu-btn');

    if (menuToggle) { // Asegúrate de que el botón existe
        menuToggle.addEventListener('click', () => {
            if (sidebar) { // Asegúrate de que el menú lateral existe
                sidebar.classList.toggle('active'); // Cambia la clase para abrir/cerrar el menú
                if (sidebar.classList.contains('active')) {
                    mainContent.classList.add('shifted'); // Añade la clase al contenido principal
                } else {
                    mainContent.classList.remove('shifted'); // Elimina la clase al contenido principal
                }
            }
        });
    } else {
        console.error('Element with class "menu-btn" not found.');
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.container');

    menuBtn.addEventListener('click', function () {
        sidebar.classList.toggle('active');
        container.classList.toggle('collapsed', !sidebar.classList.contains('active'));
    });
});


