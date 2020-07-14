/**
 * Operador condicional ternario
 * FORMA CORTA DEL IF ELSE
 */

 const activo = true;
/**
 * Para un if else se utiliza así
 */
//  const mensaje = (!activo) ? 'Activo' : 'Inactivo';
//  const mensaje = (activo === true) ? 'Activo' : 'Inactivo';

/**
 * Para un solo if se utiliza así
 */
const mensaje = activo && 'Activo';

 console.log(mensaje);