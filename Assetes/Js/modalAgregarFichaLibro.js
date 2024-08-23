// Selecciona el modal por su ID
var modal = document.getElementById("Modal-agregar-libro");

// Selecciona el botón que abre el modal
var verMasButton = document.querySelector(".ver-mas");

// Selecciona el elemento de cierre dentro del modal
var closeModal = document.querySelector(".modal-close-ficha-libro");

// Cuando se haga clic en el botón "Ver más", se mostrará el modal
verMasButton.onclick = function() {
    modal.style.display = "block"; // Muestra el modal
}

// Cuando se haga clic en el botón de cierre (×), se ocultará el modal
closeModal.onclick = function() {
    modal.style.display = "none"; // Oculta el modal
}

// Cuando el usuario haga clic en cualquier parte fuera del modal, se cerrará
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Oculta el modal
    }
}
