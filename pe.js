document.addEventListener('click', (event) => {
    // Crea un elemento de imagen
    const imagenAparecida = document.createElement('img');

    // Establece la fuente de la imagen que aparecerá
    imagenAparecida.src = '/media/seed.png';

    // Establece la posición de la imagen aparecida en el lugar donde hiciste clic
    imagenAparecida.style.position = 'absolute';
    imagenAparecida.style.left = `${event.clientX}px`;
    imagenAparecida.style.top = `${event.clientY}px`;

    // Puedes ajustar el tamaño de la imagen y otros estilos según tus preferencias
    imagenAparecida.style.width = '100px';
    imagenAparecida.style.height = '100px';

    // Agrega la imagen al cuerpo del documento
    document.body.appendChild(imagenAparecida);
    setTimeout(() => {
        document.body.removeChild(imagenAparecida);
    }, 1000); 
});


