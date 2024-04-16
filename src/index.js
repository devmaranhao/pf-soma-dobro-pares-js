// Arquivo de exemplo para executar as funções definidas no math.js

import * as math from './math.js';

const vetor1 = [1, 2, 3, 4, 5, 6];
const vetor2 = [7, 8, 9];

console.log('Soma usando a abordagem funcional:', math.somaDobroNumerosParesFuncional(vetor1))
console.log('Soma usando a abordagem estrutural (procedural):', math.somaDobroNumerosParesProcedural(vetor2))
