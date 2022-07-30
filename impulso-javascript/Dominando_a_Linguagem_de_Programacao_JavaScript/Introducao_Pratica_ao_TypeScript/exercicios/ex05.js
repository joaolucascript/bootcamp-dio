"use strict";
// Definir o tipo de retorno da função
function somarValoresNumericos(num1, num2) {
    return num1 + num2;
}
console.log(somarValoresNumericos(1, 3));
/* Quando usar o tipo void em funções
Quando a funçao nao precisa retornar nada, utiliza-se o void */
function printaValoresNumericos(num1, num2) {
    console.log(num1 + num2);
}
// Utilizando callback
function somarValoresNumericosETratar(num1, num2, callback) {
    let resultado = num1 + num2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somarValoresNumericosETratar(1, 3, aoQuadrado));
console.log(somarValoresNumericosETratar(1, 3, dividirPorEleMesmo));
