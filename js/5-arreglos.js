//como crear un arreglo vacio
let colores = [];

//como crear un arreglo con datos
let series = ['Loky', 1, 'Stranger', 1,'Stranger Thinks', 4, true ];

console.log('Cantidad de series:' +series.length); //con length sabemos la cantidad de items que tiene el arreglo
console.log('Cantidad de colores:'+ colores.length);

//mostrar el arreglo por pantalla
document.write(series);
console.log(series[4]); //muestra un elemento del arreglo

document.write('<ul>');
for(let indiceSerie=0; indiceSerie < series.length; indiceSerie++){
    document.write('<li>'+series[indiceSerie]+'</li>');
}
document.write('</ul>');

//agregar un nuevo elemento al final del arreglo
series.push('The Crown');

document.write('<h3>Agregar un nuevo elemento al final del arreglo</h3>')
document.write('<ul>');
for(let indiceSerie=0; indiceSerie < series.length; indiceSerie++){
    document.write('<li>'+series[indiceSerie]+'</li>');
}
document.write('</ul>');

//agregar un item en una posicion particular
series.splice(3,0,'Daredevil'); //(posicion donde insertamos el nuevo elemento, cantidad de elementos a borrar, item a insertar)

document.write('<h3>Agregar un item en una posicion particular</h3>')
document.write('<ul>');
for(let indiceSerie=0; indiceSerie < series.length; indiceSerie++){
    document.write('<li>'+series[indiceSerie]+'</li>');
}
document.write('</ul>');

//eliminar un elemento del arreglo
series.splice(1,1); //(posicion del elemento a borrar, cantidad de elementos a borrar)

document.write('<h3>Eliminar un elemento de una posicion particular del arreglo</h3>')
document.write('<ul>');
for(let indiceSerie=0; indiceSerie < series.length; indiceSerie++){
    document.write('<li>'+series[indiceSerie]+'</li>');
}
document.write('</ul>');

//eliminar varios items desde una posicion particular
series.splice(5); //(posicion desde la que borramos todos los elementos a continuacion)
document.write('<h3>Eliminar varios items desde una posicion particular</h3>')
document.write('<ul>');
for(let indiceSerie=0; indiceSerie < series.length; indiceSerie++){
    document.write('<li>'+series[indiceSerie]+'</li>');
}
document.write('</ul>');

//eliminar el elemento de la primer posicion
// series.shift();
series.pop();
document.write('<h3>Eliminar el ultimo item del arreglo</h3>')
document.write('<ul>');
for(let indiceSerie=0; indiceSerie < series.length; indiceSerie++){
    document.write('<li>'+series[indiceSerie]+'</li>');
}
document.write('</ul>');

// modificar un item del arreglo
// edad = 50
series[3] = 'The punisher';
document.write('<h3>modificar un item del arreglo</h3>')
document.write('<ul>');
for(let indiceSerie=0; indiceSerie < series.length; indiceSerie++){
    document.write('<li>'+series[indiceSerie]+'</li>');
}
document.write('</ul>');

console.log(series[30]);

//ejercicio pequeño

do{
    let colorNuevo =  prompt('Ingrese un color');
    colores.push(colorNuevo);
}while(confirm('¿Desea ingresar mas colores?'))

document.write(colores);

// while(true  == true )