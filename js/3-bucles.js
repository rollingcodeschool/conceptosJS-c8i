// /*
// while(condicion logica){
//     todo el codigo que quiero ejecutar repetidas veces
//     cambiar la condicion logica
// }
// */

// Ejemplo de while
// let cantidadMates = 20;

// while (cantidadMates >= 1) {
//   document.write("<br>Mate cebado N: " + cantidadMates);
//   cantidadMates--; // cantidadMates = cantidadMates - 1;
// }

// Ejemplo de bucle do-while, hacer ... mientras (se cumple la condicion logica)

/*
  do{
     todas las lineas de codigo que quiero ejecutar varias veces
    cambiar la condicion logica
  }while(condicion logica)
*/


// let cantidadMates = 0;

// do{
//   document.write("<br>Mate cebado N: " + cantidadMates);
//   cantidadMates--; //cantidadMates = cantidadMates - 1;
// }while( cantidadMates >= 1)

//Ejemplo bucle for

/*
  for(inicializar una variable ; condicion logica ;  modificar la variable creada al inicio){
    todo el codigo que quiero ejecutar muchas veces
  }

*/

for(let mates = 0; mates >= 1; mates--){
  document.write("<br>Mate cebado N: " + mates);
}
