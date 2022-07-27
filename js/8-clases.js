// Usuario: nombre, apellido, password, email, fechaNacimiento, estado.

class Usuario{
    //primer metodo que se ejecuta cuando creamos objetos usuarios
    constructor(nombrePersona, apellido, password, email, fechaNacimiento){
        this.nombre = nombrePersona;
        this.password = password;
        this.apellido = apellido;
        this.email = email;
        this.fechaNacimiento = fechaNacimiento;
        this.estado = true; //parametro por defecto
    }
// aqui agrego todos los metodos
    iniciarSesion(){
        //aqui va toda la logica para iniciar sesion
    }
    
    cerrarSesion(){
        //aqui va toda la logica para cerrar sesion
    }

    mostrarDatos(){
        document.write(`
        <ul>
            <li>Nombre: ${this.nombre}</li>
            <li>Apellido: ${this.apellido} </li>
            <li>Email: ${this.email} </li>
            <li>Fecha de nacimiento: ${this.fechaNacimiento}</li>
        </ul>`)
    }

} 

// crear un objeto o instanciar
let vicky = new Usuario('Victoria','Palacio Fernández', 'Sfgkdjsd234%','vicky@gmail.com','06/1997');
let gabriel = new Usuario('Gabriel','Azubel', 'sddddkdjsd234%','Gabriel@gmail.com','06/1997');

console.log(vicky);
vicky.mostrarDatos();
gabriel.mostrarDatos();