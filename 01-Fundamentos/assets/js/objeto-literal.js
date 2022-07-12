let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 35.856,
        lng: -75.09
    },
    trajes: ['Mark I', 'Mark V', 'Mark'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California',
    },
    'ultima-pelicula': 'Infinity'
};

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);

console.log('Latitud', personaje.coords.lat);

console.log('N° Trajes', personaje.trajes.length);
console.log('Ultimo traje', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);
console.log('Vivo', personaje["ultima-pelicula"]);

// Mas detalles
delete personaje.edad;
console.log(personaje);

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

Object.freeze(personaje);

personaje.dinero = 100000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Mexico';

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log(propiedades, valores);
