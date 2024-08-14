document.addEventListener('DOMContentLoaded', () => {
    // Función para truncar el texto
    function truncateText(element, maxLength) {
        const text = element.textContent;
        if (text.length > maxLength) {
            element.textContent = text.slice(0, maxLength) + '...';
            element.dataset.fulltext = text; // Guarda el texto completo en un atributo data
        }
    }

    // Encuentra todos los elementos con la clase review-value
    const reviewValues = document.querySelectorAll('.review-value');
    reviewValues.forEach(element => {
        truncateText(element, 150); // Trunca el texto a 150 caracteres
    });

    // Encuentra todos los elementos con la clase review-value-derecha
    const reviewValuesDerecha = document.querySelectorAll('.review-value-derecha');
    reviewValuesDerecha.forEach(element => {
        truncateText(element, 150); // Trunca el texto a 150 caracteres
    });
});
