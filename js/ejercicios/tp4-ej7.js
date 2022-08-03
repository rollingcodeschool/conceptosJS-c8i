// Nos piden realizar una agenda telefónica de contactos.
// Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.
// Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).
// Los métodos de la agenda serán los siguientes:

// aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
// existeContacto(Conctacto): indica si el contacto pasado existe o no.
// listarContactos(): Lista toda la agenda
// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.

// Crea un menú con opciones por consola para probar todas estas funcionalidades.

class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

class Agenda {
  constructor(tamanio = 3) {
    this.contactos = [];
    this.tamanio = tamanio;
  }

  agregarContacto(contacto) {
    // console.log("estoy en agregar contacto");
    //verificar si el contacto existe
    if(this.existeContacto(contacto.nombre) === false){
        //verificar que la agenda tenga espacio disponible, verificar si la agenda esta llena
        if(this.agendaLlena() === false){
            this.contactos.push(contacto);
        }
    }else{
        console.log('No se agrego la persona '+contacto.nombre+' como nuevo contacto');
    }
    console.log(this.contactos);
  }

  existeContacto(nombre){
    //buscar el contacto
    const contactoBuscado = this.contactos.find((itemContacto)=>{return itemContacto.nombre === nombre})
    // console.log(contactoBuscado);
    if(contactoBuscado){
        console.log('El nombre ya existe en la agenda')
        return true; //si encontre el contacto
    }else{
        console.log('El nombre no existe en la agenda')
        return false; //si encontre el contacto
    }
  }

  agendaLlena(){
    if(this.contactos.length === this.tamanio){
        console.log('Agenda llena');
        return true;
    }else{
        console.log('Hay espacio disponible')
        return false;
    }
  }

  eliminarContacto(contactoEliminar){
    let arregloFiltrado = this.contactos.filter((itemContacto)=>{return itemContacto.nombre != contactoEliminar});
    this.contactos = arregloFiltrado;
    console.log(`Contacto ${contactoEliminar} fue eliminado`);
    console.log(this.contactos);
  }

}

const agendaPrueba = new Agenda();
console.log(agendaPrueba);

do {
  let opcion = parseInt(
    prompt(`Ingrese la opcion deseada:
    1- Agregar contacto
    2- Existe un contacto
    3- Lista contacto
    4- Buscar contacto
    5- Eliminar contacto
    6- verificar si la agenda esta llena
    7- verificar espacios libres`)
  );

  switch (opcion) {
    case 1:
      // 1- Agregar contacto
      //crear el contacto
      let nombreNuevo = prompt('Ingrese un nombre').toLowerCase();
      let telefonoNuevo = prompt('Ingrese un telefono');
      let contactoNuevo = new Contacto(nombreNuevo,telefonoNuevo);
      console.log(contactoNuevo)
      //enviar el contacto al metodo agregarContacto
      agendaPrueba.agregarContacto(contactoNuevo);
      break;
    case 2:
      // 2- Existe un contacto
      let nombreBuscar = prompt('Ingrese un nombre').toLowerCase();
      agendaPrueba.existeContacto(nombreBuscar);
      break;
    case 3:
      // 3- Lista contacto
      break;
    case 4:
      // 4- Buscar contacto
      break;
    case 5:
      // 5- Eliminar contacto
      let nombreEliminar = prompt('Ingrese un nombre').toLowerCase();
      agendaPrueba.eliminarContacto(nombreEliminar);
      break;
    case 6:
      // 6- verificar si la agenda esta llena
      agendaPrueba.agendaLlena();
      break;
    case 7:
      // 7- verificar espacios libres;
      break;
    default:
      alert("Ingresaste una opcion erronea");
  }
} while (confirm("¿Desea realizar otra operación?"));
