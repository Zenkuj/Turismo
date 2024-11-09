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
        addClickEvent(image5Container, 'San Cosme y San Damián (comúnmente llamado San Cosme y Damián) es una de las ciudades que formó parte de los poblados fundados por la Compañía de Jesús (los jesuitas). Su origen se remonta al año 1632 y es una de las tres misiones jesuitas que sobrevivieron en Paraguay desde la expulsión de estos en 1767. Lo que más se ha preservado es su arquitectura.');
    } else {
        alert('No se encontraron imágenes con ese nombre.');
    }
// Agregar eventos de clic a los contenedores de imagen

addClickEvent(image1Container, 'Información sobre la imagen de Jesús.');

addClickEvent(image2Container, 'Información sobre otra imagen de Jesús.');

addClickEvent(image3Container, 'Información sobre la Trinidad.');

addClickEvent(image4Container, 'Información sobre la Encarnación.');



}


function addClickEvent(container, info) {

container.onclick = function() {

    alert(info);

};

}