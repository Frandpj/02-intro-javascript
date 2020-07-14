/**
 * Desestructuración de arrays
 * o
 * Asignitación desestructurante de arrays
 */

 const personajes = ['Harry', 'Ronald', 'Hermione'];

 /**
  * A la hora de desestructurar, para no coger los primeros valores se ignoran
  */
 const [, , p3] = personajes;
 console.log(p3);
 
 const retornaArreglo = () => {
     return ['ABC', 123];
 }

 const [letras, numeros] = retornaArreglo();
 console.log(letras, numeros);

 // Tarea
 // 1. El primer valor del array se llamará nombre
 // 2. El segundo se llamará setNombre

 const useState = (valor) => {
     return [
         valor,
         () => { console.log('Hola Mundo ')}
     ]
 }
 const [nombre, setNombre] = useState('Harry');

console.log(nombre);
setNombre(); // Esto es igual a esto arr[1]()