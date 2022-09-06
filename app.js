let zapatillas = 25000;
let mochila = 14000;

function calculadora (zapatillas, mochila, operacion){
    switch (operacion){
        case "+":
            return zapatillas + mochila;
            break;
        case "-":
            return zapatillas - mochila;
            break;
        default:
            return 0;
            break;
    }
}

console.log(calculadora(zapatillas, mochila, "+"));


// Utilicé una función con el ciclo Switch para sumar o restar la compra de unas zapatillas y mochila. 
