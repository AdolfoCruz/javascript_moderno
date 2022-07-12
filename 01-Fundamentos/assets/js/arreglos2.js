let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
//Para concer el largo del arreglo
console.log('Largo:', juegos.length);

//Para conocer el primer valor del arreglo
let primero = juegos[0];
//Para conocer el ultimo valor del arreglo
let ultimo = juegos[juegos.length - 1];

console.log(primero, ultimo);

juegos.forEach((elemento, indice, arr) => {
    console.log(elemento, indice, arr);
});

//Agregar un nuevo elemento al final  al arreglo y calcular longitud
let nuevaLongitud = juegos.push('F-Zero');
console.log(nuevaLongitud, juegos);

//Agregar un nuevo elemento al principio  al arreglo y calcular longitud
nuevaLongitud =juegos.unshift('Fire Emblem');
console.log(nuevaLongitud, juegos);

//Borrar el ultimo arreglo
let juegoBorrado = juegos.pop();
console.log(juegoBorrado, juegos);

//Borrar un arreglo en una posicion en específico
let pos = 1;
let juegosBorrados = juegos.splice(pos, 2);
console.log(juegosBorrados, juegos);

//Saber la posicion indice de un juego
let metroidIndex = juegos.indexOf('Metroid'); //CaSeSeNsItIvE
console.log(metroidIndex);