//crear un objeto con notacion literal

const pelicula = {
    //propiedades -> clave: valor
    codigo: 123,
    titulo: 'Avengers: End game',
    duracion: '3:07',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, vel.',
    genero: 'Ciencia ficcion',
    estado: true,
    reparto: 'Actor1, Actor2, Actor3',
    sugerencias: ['Ironman', 'Thor', 'Infinity war'],
    // clasificacion: {
    //     prop1: '',
    //     prop2: ''
    // }
    //metodos
    reproducir: function (){ document.write('<p>Comenzando reproduccion de la peli</p>')},
    pausar: () => { document.write('<p>Se pauso la peli</p>')}
};

// mostrar el objeto
console.log(pelicula);
document.write(`<p>Titulo: ${pelicula.titulo}</p>`);
document.write(`<p>Duración: ${pelicula['duracion'] }</p>`);

//modificar una propiedad del objeto
pelicula.duracion = '3:00';
document.write(`<p>Duración: ${pelicula['duracion'] }</p>`);

//agregar una nueva propiedad a un objeto existente
pelicula.anioPublicacion = 2022;
document.write(`<p>Año de publicación: ${pelicula.anioPublicacion}</p>`);

//borrar una propiedad de un objeto
delete pelicula.anioPublicacion;
document.write(`<p>Año de publicación: ${pelicula.anioPublicacion}</p>`);
console.log(pelicula);