function searchImages() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const image1Container = document.getElementById('image1Container');
    const image2Container = document.getElementById('image2Container');
    const image3Container = document.getElementById('image3Container');
    // Ocultar ambas imágenes por defecto
    image1Container.classList.add('hidden');
    image2Container.classList.add('hidden');

    // Mostrar las imágenes y descripciones según el nombre ingresado
    if (input === 'encar') {
        image1Container.classList.remove('hidden');
    } else if (input === 'playas') {
        image2Container.classList.remove('hidden');
    } else if (input === 'medicina') {
        image3Container.classList.remove('hidden');
    } else {
        alert('No se encontraron imágenes con ese nombre.');
    }
}
