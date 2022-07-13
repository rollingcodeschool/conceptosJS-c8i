//escribir numeros del 1 al 500
//tengo que saber cual de los numeros es multiplo de 4 y de 9 (un numero es multiplo de otro si el resto de su division es 0)
//cada 5 lineas dibujo un hr


//bucle que muestre numero 500 veces
for(let indice = 1; indice <= 500; indice++){
    document.write(indice);
    //preguntar si es multiplo de 4
    if( indice % 4 === 0 ){
        document.write(' Es multiplo de 4')
    }
    if( indice % 9 === 0 ){
        document.write(' Es multiplo de 9')
    }
    document.write('<br>');
    //mostrar una linea
    if( indice % 5 === 0 ){
        document.write('<hr>')
    }   
}
