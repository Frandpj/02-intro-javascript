/**
 * Importaciones de otros archivos JS
 */

 /**
  * Exportación normal
  */
// import {heroes} from './data/heroes'

/**
 * Exportación por defecto
 */
// import heroes from './data/heroes'
/**
 * Exportación multiple con normales y por defecto
 */
// import heroes, {owners} from '../data/heroes'
import heroes from '../data/heroes'

/**
 * Find (devuelve el primero que cumpla la condición)
 */
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

// console.log(getHeroeById(2));

/**
 * Filter (devuelve varios)
 */
export const getHeroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroeByOwner('DC'));

// console.log(owners);
