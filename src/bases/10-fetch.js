/**
 * Fetch API, liberia de peticiones
 */
const apiKey = 'Vh9fSlVJe82GxtBF1bIy04vwwvRG74Rl';

/**
 * Esto es una promesa, si dejas el clic encima se ve
 */
const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

/**
 * Como lo de arriba es una promesa, podemos usar las funciones de promesa
 */
// peticion.then( resp => {
//     resp.json().then(data => {
//         console.log(data);
//     });
// })
// .catch(console.warn);

/**
 * Promesas en cadena (es lo mismo de arriba)
 * Va pasando de un then a otro si el anterior se cumple
 * En la data y la url se ha utilizado la desestructuración para sacar objetos dentro de objeto data
 */
peticion
    .then(resp => resp.json())
    .then( ({data}) => {
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn);