const nombre = 'Francisco';
const apellido = 'del Pino';

// const nombreCompleto = nombre + ' ' + apellido;

/**
 *  Esto es un template String ``
 */
const nombreCompleto = `
${ nombre } 
${ apellido }
${ 1 + 1 }
`;


console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'Hola ' + nombre; 
}

console.log(`Este es un texto: ${ getSaludo(nombre) }`)