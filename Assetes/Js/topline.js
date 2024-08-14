document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los elementos con la clase 'review-value'
    const reviewValues = document.querySelectorAll('.review-value');
    
    reviewValues.forEach(function(review) {
        const originalText = review.textContent;
        // Establece el texto truncado inicialmente
        review.textContent = originalText.slice(0, 150) + '...';

        // Crea un contenedor para el tooltip
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = originalText;
        document.body.appendChild(tooltip);

        // Maneja el evento mouseover
        review.addEventListener('mouseover', function(event) {
            tooltip.style.display = 'block';
            tooltip.style.left = `${event.pageX + 10}px`;
            tooltip.style.top = `${event.pageY + 10}px`;
        });

        // Maneja el evento mouseout
        review.addEventListener('mouseout', function() {
            tooltip.style.display = 'none';
        });
    });
});
