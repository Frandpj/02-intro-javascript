const persona = {
    nombre: 'Harry',
    apellido: 'Potter',
    edad: 17,
    direccion: {
        ciudad: 'New York',
        zip: 23329872,
        lat: 14.29823729,
        lng: 54.208972398,
    }
};

// console.table({ persona });

/**
 * Esto no se hace, ya que si cambias una propiedad se cambia en el objeto
 */
// const persona2 = persona;

/**
 *  Para crear una replica del objecto sin modificar el mismo se ha con { ...nombre del objecto }
 */
const persona2 = { ...persona }
persona2.nombre = 'Ronald';

console.log(persona);
console.log(persona2);