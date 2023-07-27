const persona = {
    Nombre: 'Tony',
    Apellido: 'Stark',
    Edad: 34,
    Direccion: {
        ciudad: 'New York',
        zip: 45532253,
        lat: 12.3213,
        lng: 32.432432,
    }

};

//console.table ({persona});


const persona2 = {...persona}; 
persona2.nombre = 'joaquin'

console.log(persona)
console.log(persona2)