const formulario   = document.querySelector("#carta-a-santa");
let nombre         = document.querySelector("#carta-a-santa").nombre.value;
let ciudad         = document.querySelector("#carta-a-santa").ciudad.value;
let comportamiento = document.querySelector("#carta-a-santa").comportamiento.value;
let descripcion    = document.querySelector("#carta-a-santa")["descripcion-regalo"].value;

function validarNombre(nombre){
    if(nombre.length >= 50){
        return "este campo no debe ser mayor a 50 caracteres"
    }
    else if(nombre.length === 0){
        return "este campo debe tener al menos un caracter"
    }
    else if (!/[a-z]+$/.test(nombre)){
        return "este campo solo puede contener letras"
    }
    return "";
}
function validarCiudad(ciudad){
    if(ciudad === ""){
        return "debes seleccionar una ciudad"
    }
    return "";
}
function validarDescripcion(descripcion){
    if(descripcion.length >= 50){
        return "este campo no debe ser mayor a 50 caracteres"
    }
    else if(descripcion.length === 0){
        return "este campo debe tener al menos un caracter"
    }
    else if (!/^[a-z0-9]+$/i.test(descripcion)){
        return "este campo solo puede contener letras y numeros"
    }
    return "";
}
function validarFormulario(event){
    const objErrores = {
        errorNombre: validarNombre(nombre),
        errorCiudad: validarNombre(ciudad),
        errorDescripcion: validarNombre(descripcion)
    }
    manejarErrores(objErrores);
    event.preventDefault();
}
function manejarErrores(objErrores){
    if(objErrores.errorNombre){
        formulario.nombre.classname="error";
    }else {
        formulario.nombre.classname="";
    }

    if(objErrores.errorCiudad){
        formulario.ciudad.classname="error";
    }else {
        formulario.ciudad.classname="";
    }

    if(objErrores.errorDescripcion){
        formulario["descripcion-regalo"].classname="error";
    }else {
        formulario["descripcion-regalo"].classname="";
    }
}

formulario.onsubmit = validarFormulario;