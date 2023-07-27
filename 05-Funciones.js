//funciones en JS 
//const saludar = function saludar (nombre) {
//    return`Hola, ${nombre}`;
//}

const saludar2 = (nombre) => {
    return`Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `hola mundo`;


//console.log( saludar('Joaquin'))
console.log(saludar2('Joaquin') );
console.log( saludar3('Brito'));
console.log( saludar4());

const getUser = () => 
    ({
        uid:'ABC123',
        username:'El_Papi123'
    });

const user = getUser();
console.log(user);

//Tarea 
// transformen a una funcion de flecha 
//2.- retornar un objeto implicito
//3.- pruebas


//function getUsuarioActivo (nombre ){
//    return{
//        id: 'ABC567',
//        username: nombre,
//    }
//};
//const usuarioActivo = getUsuarioActivo('Joaquin');
//console.log( usuarioActivo)

//funcion de flecha 
const getUsuarioActivo = (nombre) =>
({
    id: 'ABC567',
    username: nombre,
});

//retornar un objeto implicito
const usuarioActivo = getUsuarioActivo("Joaquin");
console.log(usuarioActivo)