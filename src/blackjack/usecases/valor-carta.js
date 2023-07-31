//Esto le asigna un valor a la carta
/**
 * 
 * @param {Array<String>} carta 
 * @returns {Array<Number>} Devuelve un valor
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}