/**
 *  Funciones en JS, es recomendable que sean constantes
 */
const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}

/**
 * Funciópn de flecha
 */
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

/**
 * Función simplificada si solo contiene un RETURN
 * con variable
 */
const saludar3 = (nombre) =>  `Hola, ${nombre}`;
/**
 * Función simplificada si solo contiene un RETURN
 * sin variable
 */
const saludar4 = () =>  `Hola mundo`;

console.log(saludar('Francisco'));
console.log(saludar2('Francisco'));
console.log(saludar3('Francisco'));
console.log(saludar4('Francisco'));

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'user_fran'
    }
}

const user = getUser();

console.log(user);

// Tarea
// 1. Transformar a una función de flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas
const getUsuarioActivo = (nombre) => ({
    uid: 'ABC123',
    username: nombre
})


const usuarioActivo = getUsuarioActivo('Francisco')
console.log(usuarioActivo);