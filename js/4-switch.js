let estacion = prompt(
  "Seleccione su estacion preferida: 1- verano, 2- primavera, 3- otoño, 4- invierno"
);

// if( estacion === '1'){
//     document.write(
//     `<ul>
//         <li>Comida= Sandwich de milanesa</li>
//         <li>Bebida= Cerveza</li>
//     </ul>`)
// }else{
//     if( estacion === '2'){
//         document.write(
//             `<ul>
//                 <li>Comida= Tacos</li>
//                 <li>Bebida= Tequila</li>
//             </ul>`);
//     }else if( estacion === '3'){
//         document.write(
//             `<ul>
//                 <li>Comida= Humita</li>
//                 <li>Bebida= Vino</li>
//             </ul>`)
//     }else if(estacion === '4'){
//         document.write(
//             `<ul>
//                 <li>Comida= Guiso</li>
//                 <li>Bebida= Agua</li>
//             </ul>`)
//     }else{
//         document.write(`Seleccionaste una opcion erronea`)
//     }
// }

switch (estacion) {
  case "1":
  case 'verano':  
    document.write(
      `<ul> 
        <li>Comida= Sandwich de milanesa</li>
        <li>Bebida= Cerveza</li>
       </ul>`
    );
    break;
  case "2":
    document.write(
      `<ul>
        <li>Comida= Tacos</li>
        <li>Bebida= Tequila</li>
       </ul>`
    );
    break;
  case "3":
    document.write(
      `<ul> 
        <li>Comida= Humita</li>
        <li>Bebida= Vino</li>
       </ul>`
    );
    break;
  case "4":
    document.write(
      `<ul> 
        <li>Comida= Guiso</li>
        <li>Bebida= Agua</li>
       </ul>`
    );
    break;
    default:
        document.write(`Seleccionaste una opcion erronea`);
}
