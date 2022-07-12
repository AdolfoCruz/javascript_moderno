//ARREGLOS
//Son un objeto muy parecida a una lista de informacion, que contienen un grupo de elementos

//Los arreglos empiezan con la posicion 0

// const arr = new Array(10);
//const arr = [];

let videojuegos = [ 'Mario 3', 'Mario 2', 'Mario 1' ];
console.log(videojuegos);

//Si me interesa imprimir sólo la primera posicion
console.log(videojuegos[0]);

let arreglosCosas = [
    true,
    123,
    'Maproderm',
    1 + 2,
    function(){},
    ()=>{},
    {a:1},
    ['X', 'Megaman', 'Gemaman', 'Hola', [
        'IMAQ', 'Industrial'
    ]]
];
// console.log(arreglosCosas);
// console.log(arreglosCosas[0]);

//Llamar un arreglo dentro de otro arreglo
console.log(arreglosCosas[7][3]);

//Llamar un arreglo dentro de otro arreglo
console.log(arreglosCosas[7][4][1]);


