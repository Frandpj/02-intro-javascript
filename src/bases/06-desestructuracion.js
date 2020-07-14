/**
 * Desestructuración de objetos
 * o
 * Asignitación desestructurante de objetos
 */

 const persona = {
     nombre: 'Harry',
     edad: 16,
     clave: 'HP',
 };

/**
 * Saca la variable que necesitemos de un objeto
 */
// const { nombre, edad, clave } = persona;
/**
 * Renombra la variable por si queremos ponerle otro nombre
 */
// const { nombre:nombre2 } = persona;

//  console.log(nombre);
//  console.log(edad);
//  console.log(clave);

 /**
  * Desestructuración en funciones directamente en el parámetro
  */
 const useContext = ({nombre, edad, clave, rango = 'Capitán'}) => {

    // console.log(nombre, edad, rango);
    
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.2893,
            lng: -12.291
        }
    }

 }

 /**
  * Saca variables de objectos y objetos anidados
  */
 const {nombreClave, anios, latlng: {lat, lng}} = useContext(persona);
 /**
  * Más claro con un paso adicional pero es lo mismo
  */
//  const {nombreClave, anios, latlng} = useContext(persona);
//  const {lat, lng} = latlng;


 console.log(nombreClave, anios);
 console.log(lat, lng);
