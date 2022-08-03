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

    //propiedades conmutadas get y set
    set modificarNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }

    get mostrarNombre(){
        return this.nombre;
    }

} 

//Herencia
// Alumno: curso, comision, estadoArancelario= true, calificaciones=[] , asistencia = 0.
class Alumno extends Usuario{
    constructor(curso, comision, _apellido, _nombrePersona , _password, _email, fechaNacimiento ){
        //invocar al constructor de la clase padre
        super(_nombrePersona, _apellido, _password,_email, fechaNacimiento);
        this.curso = curso;
        this.comision = comision;
        this.estadoArancelario = true;
        this.calificaciones = [];
        this.asistencia = 0;
    }

    calificar(nota){
        this.calificaciones.push(nota);
    }
    
    obtenerPromedio(){
        let cantidadNotas = this.calificaciones.length;
        let sumaNotas = 0
        for(let i = 0; i < cantidadNotas; i++){
            sumaNotas += this.calificaciones[i]; // sumaNotas = sumaNotas + this.calificaciones[i]
        }
        let promedio = sumaNotas / cantidadNotas;
        document.write(`<p>El promedio de ${this.nombre}, ${this.apellido} es ${promedio}</p>`)
    }

    cambiarComision(){}

    mostrarDatos(){
        document.write(`
        <h3>Datos Personales</h3>
        <hr>
        <ul>
            <li>Nombre: ${this.nombre}</li>
            <li>Apellido: ${this.apellido} </li>
        </ul>
        <h3>Datos Academicos</h3>
        <hr>
        <ul>
            <li>Curso:${this.curso}</li>
            <li>Comision: ${this.comision}</li>
            <li>Calificaciones: ${this.calificaciones}</li>
        </ul>
        `)
    }

    //agregar los get y setNecesarios.

}



// crear un objeto o instanciar
let vicky = new Usuario('Victoria','Palacio Fernández', 'Sfgkdjsd234%','vicky@gmail.com','06/1997');
let gabriel = new Usuario('Gabriel','Azubel', 'sddddkdjsd234%','Gabriel@gmail.com','06/1997');

console.log(vicky);
vicky.mostrarDatos();
gabriel.mostrarDatos();

//usar propiedades conmutadas
gabriel.modificarNombre = 'Cristian Gabriel';
gabriel.mostrarDatos();

document.write(`<p>Usuario modificado ${gabriel.mostrarNombre}</p>`) 

//creo un objeto alumno
let agustin = new Alumno('FullStack', 'c8i', 'Sampayo','Agustin','sjdfhA3746$', 'agustin@gmail.com', '06/1997');

agustin.mostrarDatos();

agustin.calificar(9);
agustin.calificar(8);
agustin.calificar(10);

agustin.obtenerPromedio();
console.log(agustin);

agustin.mostrarDatos();
