
function saludar(){
    console.log('Hola Mundo Funcion 1');
}
saludar();


const saludar2 = function saludar(){
    console.log('Hola Mundo Funcion 2');
}
saludar2();


function saludar3(nombre){
    console.log('Nombre ' + nombre);
}
saludar3('MaProDerm');


const saludar4 = function saludar(nombre){
    console.log('Hola ' + nombre);
}
saludar4('IMAQ');

//FUNCIOENS DE FLECHA
const saludarFlecha = () => {
    console.log('Hola Flecha');
}
saludarFlecha();

const saludarFlecha2 = (marca) => {
    console.log('Marca ' + marca);
}
saludarFlecha2('MaProDerm');