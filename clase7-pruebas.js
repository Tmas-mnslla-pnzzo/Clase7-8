function pruebaValidarNombre(){
    console.assert(validarNombre("araraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaarr3")==="este campo no debe ser mayor a 50 caracteres", 
    "validarNombre no funciono")
    console.assert(validarNombre("")==="este campo debe tener al menos un caracter", 
    "validarNombre no funciono")
    console.assert(validarNombre("111")==="este campo solo puede contener letras", 
    "validarNombre no funciono")
    console.assert(validarNombre("Tomas")==="", 
    "validarNombre no funciono")
};
function pruebaValidarCiudad(){
    console.assert(validarCiudad("")==="debes seleccionar una ciudad", 
    "validarCiudad no funciono")
    console.assert(validarCiudad("Catamarca")==="", 
    "validarCiudad no funciono")
};
function pruebaValidarDescripcion(){
    console.assert(validarDescripcion("araraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaarr3")==="este campo no debe ser mayor a 50 caracteres", 
    "validarDescripcion no funciono")
    console.assert(validarDescripcion("")==="este campo debe tener al menos un caracter", 
    "validarDescripcion no funciono")
    console.assert(validarDescripcion("/.,")==="este campo solo puede contener letras y numeros", 
    "validarNombre no funciono")
    console.assert(validarDescripcion("tomas")==="", 
    "validarDescripcion no funciono")
};

pruebaValidarNombre();
pruebaValidarCiudad();
pruebaValidarDescripcion();