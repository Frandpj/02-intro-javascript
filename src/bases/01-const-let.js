

/**
 * Variables y Constantes
 */

const nombre = 'Francisco';
const apellido = 'del Pino';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

/**
 *  var No se debe usar...
 */
if(true) {
    // Scope
    let valorDado = 6;
    const nombre = 'Pepe';

    console.log(nombre, valorDado);
}

console.log(valorDado);