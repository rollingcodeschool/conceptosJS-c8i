//ingrese un numero de dni
//el numero de dni debe estar entre 0 y 99999999
//Debemos calcular el resto de la división entera entre el número y el número 23.
//switch donde las opciones son de 0 a 22, mostrar por pantalla (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
 // repetir el proceso hasta q el usuario presione cancelar

 let dni = parseInt(prompt('Ingrese un dni 0 y 99999999'));
 console.log(dni)

 if(dni >= 0 && dni<= 99999999){
    //calculo todo lo del dni
    let resultado = dni % 23;
    console.log(resultado);
    switch(resultado){
        case 0:
                document.write('T');
                alert('T');
                break;
        case 1:
                document.write('R');
                alert('R');
                break;
        case 17:
                document.write('Z');
                alert('Z');
                break;
        default:
                alert('valor erroneo')
    }
 }else{
    alert('ingreso un valor erroneo')
 }