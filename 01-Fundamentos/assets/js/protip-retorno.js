
function crearPersona(nombre, apellido){
    return {
        nombre,
        apellido
    }
}

const persona = crearPersona('Elias', 'Herrera');
console.log(persona);

//La misma funcion en FLECHA

const crearPersona2 = (nombre, apellido) =>{
    return {
        nombre,
        apellido
    }
}
const persona2 = crearPersona('Elias', 'Herrera');
console.log(persona2);

//Simplificar mas el codigo
const crearPersona3 = (nombre, apellido) => ({nombre,apellido});
const persona3 = crearPersona('Ricardo', 'Herrera');
console.log(persona3);

//
function imprimeArgumentos(){
    console.log(arguments);
}

const imprimeArgumentos2 = (...args) => {
    console.log(args);
}

imprimeArgumentos(10, true, false, 'Maproderm', 'Hola');
imprimeArgumentos2(10, true, false, 'Maproderm', 'Hola');

