// Cree un objeto "cuenta"
//  propiedad titular con el valor "Alex",  propiedad saldo, teniendo como valor inicial 0
// método ingresar(), extraer() esos dos metodos reciben parametro, otro metodo informar();

let cuenta = {
    titular: 'Alex',
    saldo: 0,
    ingresar(montoIngresar){
        //toda la logica para agregar dinero en la cuenta
        this.saldo += montoIngresar; // this.saldo = this.saldo + montoIngresar;
    },
    extraer(monto){
        //toda la logica para extraer dinero de la cuenta
        if(this.saldo >= monto){
            this.saldo -= monto;
        }else{
            alert('Saldo insuficiente');
        }
    },
    informar(){
        document.write(`<p>Cuenta del titular: ${ this.titular }, tiene un saldo de $ ${this.saldo} </p>`)
    },
    transferir: () =>{
        // aqui no usaria el this
        console.log(this)
    }
}

cuenta.informar();
let montoIngresar = parseFloat(prompt('Ingrese un monto'));
cuenta.ingresar(montoIngresar);
cuenta.informar();

let montoExtraer = parseFloat(prompt('Ingrese un monto a extraer'));
cuenta.extraer(montoExtraer);
cuenta.informar();