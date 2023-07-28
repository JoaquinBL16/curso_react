//destructuracion
// asignacion destrocturante

const persona = {
    nombre: 'Tony',
    edad: 30,
    clave:'Ironman',
    
};

//const { nombre, edad, clave } = persona;

//console.log(nombre);
//console.log(edad);
//console.log(clave);

const userContext= ({nombre, edad, rango='capitan', clave}) =>{

    //console.log(nombre, edad , clave, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            latitude:-12.456789,
            longitud:-12.3213
        }
    }

}



const {nombreClave, anios, latlng:{latitude,longitud} } = userContext(persona);
console.log(nombreClave,anios);
console.log(latitude, longitud)