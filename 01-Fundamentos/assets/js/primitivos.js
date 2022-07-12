let nombre = 'Roberto Casas';
console.log(nombre);

nombre = 'Jacobo Casas';
console.log(nombre);

nombre = "Rio Grande";

console.log(typeof nombre);

nombre = 123;
console.log( typeof nombre );

let esMarvel = true;
console.log( typeof esMarvel);

let edad = 24;
console.log(typeof edad);

edad = 24.001;
console.log(typeof edad);

let superPoder;
console.log(typeof superPoder);

let soyNull = null;
console.log(typeof soyNull);

//El principal uso de un Symbol es identificar propiedades de manera unica
let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log(typeof symbol1);

console.log(symbol1 === symbol2);