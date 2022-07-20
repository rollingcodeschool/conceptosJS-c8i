//funcion sin parametro
function saludar(){
    //todo el codigo que quiero q haga la funcion
    document.write('<p>Hola Mundo</p>');
}

//funcion con parametro
function felicitar(nombre, apellido){
    document.write(`<p>Feliz día ${nombre}, ${apellido}</p>`);
    
}

//funciones que retornan un valor
// function convertirDolaresAPesos(dolares){
//     let precioFinal = 318 * dolares;
//     return precioFinal;
// }

//funcion en forma de flecha
// let convertirDolaresAPesos = (dolares) => {
//     let precioFinal = 318 * dolares;
//     return precioFinal;
// }

//funcion en forma de flecha
let convertirDolaresAPesos = dolares => 318 * dolares;


//invocar o llamar a la funcion
saludar();

let nombreUsuario = prompt('Ingrese un nombre');
let apellidoUsuario = prompt('Ingrese un apellido');

felicitar(nombreUsuario,apellidoUsuario);


let ipad = convertirDolaresAPesos(700);
console.log(ipad);
document.write(`<p>Ipad pro 12.5" $${convertirDolaresAPesos(760)} sin impuestos</p>`)



