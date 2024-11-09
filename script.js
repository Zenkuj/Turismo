function searchImages() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const image1Container = document.getElementById('image1Container');
    const image2Container = document.getElementById('image2Container');
    const image3Container = document.getElementById('image3Container');
    const image4Container = document.getElementById('image4Container');
    const image5Container = document.getElementById('image5Container');
    // Ocultar ambas imágenes por defecto
    image1Container.classList.add('hidden');
    image2Container.classList.add('hidden');
    image3Container.classList.add('hidden');
    image4Container.classList.add('hidden');
    image5Container.classList.add('hidden');
    // Mostrar las imágenes y descripciones según el nombre ingresado
    if (input === 'jesus') {
        image1Container.classList.remove('hidden');
    
        image2Container.classList.remove('hidden');
    } else if (input === 'trinidad') {
        image3Container.classList.remove('hidden');
    } else if (input === 'encarnacion') {
        image4Container.classList.remove('hidden');
        image4Container.classList.remove('hidden');
    } else if (input === 'san cosme') {
        image5Container.classList.remove('hidden');
    } else {
        alert('No se encontraron imágenes con ese nombre.');
    }
}