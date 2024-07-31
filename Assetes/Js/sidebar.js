document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.toggle-btn');
    const sidebar = document.querySelector('.side-bar');
    const main = document.querySelector('main');

    toggleBtn.addEventListener('click', function () {
        sidebar.classList.toggle('collapsed');
        main.classList.toggle('collapsed');

        const icon = toggleBtn.querySelector('i');
        if (sidebar.classList.contains('collapsed')) {
            icon.classList.remove('fa-chevron-left');
            icon.classList.add('fa-chevron-right');
        } else {
            icon.classList.remove('fa-chevron-right');
            icon.classList.add('fa-chevron-left');
        }
    });
});
