/**
 * Módulo para implementar funções matemáticas.
 */

/**
 * Realiza a soma do dobro do valor de cada número par em um vetor de números.
 * A função deve ser implementada utilizando a abordagem funcional com o modelo map/reduce.
 * @param {Array} numeros vetor com os números desejados
 */
function somaDobroNumerosParesFuncional(numeros){
const soma = numeros
    .filter(numero => numero % 2 === 0) //Filtra os números pares
    .map(numero => numero * 2) //Dobra o valor de cada número par
    .reduce((acc, curr) => acc + curr, 0); //Soma os valores

return soma;
}

/**
 * Realiza a soma do dobro do valor de cada número par em um vetor de números.
 * A função deve ser implementada utilizando a abordagem estruturada (procedural) convencional.
 * @param {Array} numeros vetor com os números desejados
 */
function somaDobroNumerosParesProcedural(numeros){
    let soma = 0;
    for(let i = 0; i < numeros.length; i++) {
        //Verifica se o número é par
        if(numeros[i] % 2 === 0) {
            //Soma o dobro do número par
            soma += numeros[i] * 2;
        }
    }
    return soma;
}

export { somaDobroNumerosParesFuncional, somaDobroNumerosParesProcedural };
