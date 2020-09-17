import * as UI from './interfaz.js';
import * as UI from './api.js';

UI.formularioBuscar.addEventListener('submit', buscarCancion);


function buscarCancion(e) {
    e.preventDefault();

    //Obtener datos
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if(artista === '' || cancion === '') {
        //Se muestra el error cuando se deja un campo vacío
        UI.divMensajes.textContent = 'Error... Todos los campos son obligatorios';
        UI.divMensajes.classList.add('error');

        setTimeout(() => {
            UI.divMensajes.textContent = '';
            UI.divMensajes.classList.remove('error');
        }, 3000);

        return;
    }

    //Consultar la muestra de la API

    const busqueda = new API(artista, cancion);
    busqueda.consultarAPI();
}