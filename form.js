const email= document.getElementById("email");
const contraseña= document.getElementById("password");
const apellido= document.getElementById("Surname");
const nombre= document.getElementById("Name");
const telefono= document.getElementById("mobile");
const form= document.getElementById("inicio");

/*Comprobacion de registro*/
function registro(){
    let evaluar = true;
    if (nombre.value.length < 1){
      error("Name", "El Nombre ingresado es incorrecto");
      evaluar = false;
    }else{
      error("Name", "");
    }
    if (email.value.length < 1 || email.value.trim() == ""){
      error("email", "El Correo ingresado es incorrecto");
      evaluar = false;
    }else{
      error("email", "");
    }
    if (contraseña.value.length < 1 || contraseña.value.trim() == ""){
      error("password", "La Contraseña ingresada es incorrecta");
      evaluar = false;
    }else{
      error("password", "");
    }
    if (telefono.value.length != 10 || telefono.value.trim() == "" ){
      error("mobile", "El Telefono ingresado es incorrecto");
      evaluar = false;
    }else{
      error("mobile", "");
    }
    if (apellido.value.length < 1) {
      error("Surname", "El Apellido ingresado es incorrecto");
      condicion = false;
    } else {
      error("Surname", "");
    }
    if(evaluar){
      form.reset();
    }
  }

  /*Comprobacion de inicio de sesion*/
function iniciarsesion(){
    let evaluar = true;
    if (email.value.length < 1 || email.value.trim() == ""){
    error("email", "El Correo Ingresado es incorrecto");
    evaluar = false;
    }else{
    error("email", "");
    }
    if (contraseña.value.length < 1 || contraseña.value.trim() == ""){
    error("password", "La Contraseña ingresada es incorrecta");
    evaluar = false;
    }else{
    error("password", "");
    }
    if(evaluar){
        form.reset();
      }
}

function error(nombreclase,texto){
    let elemento= document.querySelector(`.${nombreclase}`);
    elemento.lastElementChild.innerHTML= texto;
}
