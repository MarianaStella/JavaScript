

// SEGUNDA PARTE DEL PROYECTO FINAL

let form = document.getElementById("formulario");
let nombre = document.getElementById("formNombre");
let email = document.getElementById("formEmail");
let cobertura = document.getElementById("formCobertura");
let edad = document.getElementById("formEdad");

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    let formulario = e.target
    console.log(`${nombre.value} ${email.value} ${cobertura.value} ${edad.value}`)
} 


// INCORPORANDO LOCALSTORAGE

localStorage.getItem("nombre")
localStorage.getItem("email")
localStorage.getItem("cobertura")
localStorage.getItem("edad")

localStorage.setItem("nombre", JSON.stringify(nombre.value));
localStorage.setItem("email", JSON.stringify(email.value));
localStorage.setItem("cobertura", JSON.stringify(cobertura.value));
localStorage.setItem("edad", JSON.stringify(edad.value));



