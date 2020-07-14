/**
 * Nunca crear un array así
 */
// const arreglo = new Array();

// Para hacer un array hacerlo así
const arreglo = [1, 2, 3, 4];
/**
 * Para insertar, no se debe de insertar con push
 */
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

/**
 * Copia un array en otro
 */
let arreglo2 = [...arreglo, 5];
// arreglo2.push(5);

/**
 * Es un ciclo que va por todos los números
 * Cada número del array (arreglo2) se multiplican por 2
 */
const arreglo3 = arreglo2.map(function(numero) {
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);