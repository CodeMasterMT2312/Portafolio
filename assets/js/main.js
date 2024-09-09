document.addEventListener('DOMContentLoaded', function() {
    // Obtén el botón y el correo electrónico por su id
    const copyButton = document.getElementById('copy-button');
    const email = document.getElementById('contact-email').textContent;

    copyButton.addEventListener('click', function() {
        navigator.clipboard.writeText(email).then(function() {
            // Éxito
            alert('Correo copiado al portapapeles!');
        }, function(err) {
            // Error
            console.error('Error al copiar el texto: ', err);
        });
    });
});
