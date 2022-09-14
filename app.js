const paciente = [];
let nombre = prompt("Ingrese su nombre completo: ");
alert("Bienvenido " + nombre);
let edad = Number(prompt("Ingrese su edad: "));
let cobertura = prompt("Ingrese su cobertura médica: ");
let mail = prompt("Ingrese su correo electrónico: ");
let dia = Number(prompt("Elija día de su próximo turno:"));
let mes = prompt("Elija mes de su próximo turno:");
alert(`La fecha elegida es: ${dia} de ${mes}`);
alert("Se le estará enviando un mail de confirmación a su correo.");
console.log(`Próximo turno: ${dia} de ${mes}`);
console.log(nombre, edad, cobertura, mail);


class Paciente {
    constructor (nombre, edad, cobertura, mail) {
    this.nombre = nombre;
    this.edad = edad;
    this.cobertura = cobertura;
    this.mail = mail;
    }
}

let hoy = new Date();
console.log((new Date));

const asistenHoy = [];
const turno1 = new Paciente ("Maria Sandoval", 32, "OSDE, mariasandoval@gmail.com");
const turno2 = new Paciente ("Raul Pereira", 24, "OSDE, raulpereira@gmail.com");
const turno3 = new Paciente ("Laura Etchevez", 41, "OSDE, lauraetchevez@hotmail.com");
console.log(turno1, turno2, turno3);

asistenHoy.push(turno1);
asistenHoy.push(turno2);
asistenHoy.push(turno3);
console.log(asistenHoy);


// LA IDEA ES QUE POR PROMPT EL PACIENTE INGRESE SUS DATOS Y ELIJA UNA FECHA DE TURNO, 
// QUE SE LE ESTARÁ ENVIANDO UNA CONFIRMACIÓN POR MAIL. LUEGO, POR CLG QUIERO QUE 
// FIGUREN TODOS LOS PACIENTES QUE ASISTIRÁN EL DÍA DE HOY. NO SE SI QUIZAS ME CONVIENE
// ARMAR UN OBJETO CON LA CANTIDAD DE DIAS, Y DESPUÉS CON UN FOR RECORRA LOS DIAS, Y CON
// UN FILTER BUSQUE EL DÍA, PERO NO ESTABA MUY SEGURA DE CÓMO HACERLO.

