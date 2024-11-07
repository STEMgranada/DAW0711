// Pascual en su Prime
function submitForm(event) {
    event.preventDefault();

    // Simula una respuesta de envío
    document.getElementById('feedback').classList.remove('hidden');

    // Limpia el formulario después de un segundo
    setTimeout(() => {
        document.getElementById('contactForm').reset();
        document.getElementById('feedback').classList.add('hidden');
    }, 2000);
}
