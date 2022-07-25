// simule el lanzamiento de dos dados. Math.random 1 - 6
//Sumar el resultado de lanzar dos dados y anotar en un array
//el número de apariciones de dicha suma

// let dado1 = Math.floor(Math.random()*(max - min + 1 ) + min );

let sumas=[]
let pruebaDado1=[]
let pruebaDado2=[]

for(let i = 0; i < 50; i++){
    let dado1 = Math.floor(Math.random()*(6 - 1 +1 )+1 );
    let dado2 = Math.floor(Math.random()*(6 - 1 +1 )+1 );
    let resultado = dado1 + dado2;
    sumas.push(resultado);
    pruebaDado1.push(dado1);
    pruebaDado2.push(dado2);
}

document.write('Resultados dado1:'+ pruebaDado1);
document.write('<br>Resultados dado2:'+ pruebaDado2);
document.write('<br>Resultados sumas:'+ sumas);

document.write(`<table class="tablaDatos">
<thead>
    <tr>
        <th>Resultados</th>
        <th>Frecuencia</th>
    </tr>
</thead>
<tbody>`);
//dibujar todas las filas que necesitamos
for(let i = 2; i <= 12; i++){
    document.write(`<tr>`);
    //calcular la frecuencia de apariciones de mi variable i
    let contador = 0;
    for(let posicion = 0; posicion < sumas.length; posicion++ ){
        if( i === sumas[posicion]){
            //entonces quiero contar ese valor
            contador++;
        }
    }
    document.write(`<td>${i}</td><td>${contador}</td></tr>`);
}

document.write(`</tbody>
</table>`);