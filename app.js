class Paciente {
    constructor (nombre, cobertura, edad) {
    this.nombre = nombre;
    this.cobertura = cobertura;
    this.edad = edad;
    }
}

const asistenHoy = [];
const paciente1 = new Paciente ("Maria Sandoval", "OSDE", 32);
const paciente2 = new Paciente ("Raul Pereira", "OSDE", 24);
const paciente3 = new Paciente ("Laura Etchevez", "OSDE",41);

console.log(paciente1, paciente2, paciente3);

asistenHoy.push(paciente1);
asistenHoy.push(paciente2);
asistenHoy.push(paciente3);
asistenHoy.reverse(paciente1);
asistenHoy.reverse(paciente2);
asistenHoy.reverse(paciente3);

console.log(asistenHoy);



// HICE UNA CLASE CON LA LISTA DE LOS PACIENTES QUE ASISTEN EN EL 
// DÍA DE HOY CON SU RESPECTIVA INFORMACIÓN, Y LUEGO HICE UN 
// REVERSE PARA QUE INVIERTA EL ORDEN DE LLEGADA DE LOS PACIENTES. 