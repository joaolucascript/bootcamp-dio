"use strict";
// Sobre a variavel any
let valorAny;
valorAny = 10;
valorAny = "teste";
valorAny = true;
let valorString = "teste";
valorString = valorAny;
let valorString2 = "testão";
valorString2 = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString, valorString2);
