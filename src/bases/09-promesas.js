/**
 * Importaciones
 */
import {getHeroeById, getHeroeByOwner} from './bases/08-imp-exp'

/**
 * Promesas
 * then = Cuando la promesa funciona
 * catch = Cuando la promesa falla
 * finally = Se ejecuta siempre
 */
// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {

//         const p1 = getHeroeById(2);
//         // console.log(heroe);
//         // Llama al then
//         // resolve(heroe);
//         resolve(p1);

//     }, 2000);

// });

// /**
//  * Cuando la promesa funciona
//  */
// promesa.then((heroe) => {
//     console.log('heroe', heroe);
// }). catch(err => console.warn(err));

/**
 * Promesa dentro de una función a la que se le pasa un parámetro 
 */
const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
    
            const p1 = getHeroeById(id);
            if(p1) {
                // Llama al then
                resolve(p1);
            }
            else {
                reject('El héroe no existe');
            }
    
        }, 2000);
    
    });
}

getHeroeByIdAsync(1)
    .then(heroe => console.log('Heroe', heroe))
    .catch(err => console.warn(err));
    /**
     * El console.log recibe como argumento el primer argumento que reciba el then (es igual que lo de arriba)
     */
    // .then(console.log)
    /**
     * El console.warn recibe como argumento el primer argumento que reciba el catch (es igual que lo de arriba)
     */
    // .catch(console.warn);