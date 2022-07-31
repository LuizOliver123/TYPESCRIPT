"use strict";
/* let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;
let button = document.getElementById('button') as HTMLButtonElement;

function adicionarNumeros(numero1: number, numero2: number, devePrintar:boolean, frase: string) {
    let resultado = numero1 + numero2
    if (devePrintar) {
        console.log(frase + resultado)
    }
    return numero1 + numero2
}

let devePrintar = true;
let frase: string;
frase = "O valor é: ";

*/
let buttonTeste = document.getElementById('button');
buttonTeste === null || buttonTeste === void 0 ? void 0 : buttonTeste.addEventListener("click", () => {
    console.log('funcionou');
});
