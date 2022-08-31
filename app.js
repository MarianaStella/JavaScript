// EJEMPLO 1

// let ingresarNumero = Number(prompt("Ingrese un número"));

// for (let i = 1; i <= ingresarNumero; i++) {
//     console.log("Bienvenido");
// }


// EJEMPLO 2


// let ingresarNombre = prompt("Ingrese su nombre");

// for (let i = 1; i <=30; i++){
//     alert(`${ingresarNombre} su turno es el nº: ${+i}`);
// }


// EJEMPLO 3

let nombre = prompt("Ingrese su nombre o ESC para salir");

while(nombre != "ESC" && nombre != "esc"){
    alert(`Hola ${nombre}, cómo dice que le va?`);
    console.log("Hola" + nombre + ", cómo dice que le va?");
    nombre = prompt("Ingrese otro nombre");
}