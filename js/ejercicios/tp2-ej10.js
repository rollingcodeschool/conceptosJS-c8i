//pedir un numero de filas y columnas
//dibujar una tabla
// cada una de las celdas deberá escribirse un número consecutivo en orden descendente (7×5 los números irán del 35 al 1)

let filas = parseInt(prompt('Ingrese un numero de filas'));
let columnas = parseInt(prompt('Ingrese un numero de columnas'));

console.log(filas)
console.log(columnas)


document.write(`<table class="tablaDatos"><tbody>`);
//aqui tengo que dibujar las filas
for(let indiceFila = 0; indiceFila < filas; indiceFila++){
    document.write(`
        <tr>
            <td>hola</td>
            <td>mundo</td>
        </tr>`);
}

document.write(`</tbody></table>`);