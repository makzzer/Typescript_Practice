"use strict";
class Calculadora {
    //tiene un constructor--> va con minusculas porque es un metodo ya default
    constructor(valor) {
        console.log("iniciando calculadora...");
        this.numero = valor;
    }
    sumar() {
        return this.numero + this.numero;
    }
}
let calcA = new Calculadora(10);
console.log(calcA.sumar());
