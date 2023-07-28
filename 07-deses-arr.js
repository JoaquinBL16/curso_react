


//destrocturacion de arreglos 

const personajes = ['Goku', 'Vegetta','Trunks'];

const [, ,p2] = personajes;

console.log(p2)

const retornaArreglo = () =>{
    return['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//tarea 
//1. el primer valro de la arr se llamara nombre 
//2. y el otro se llamara setNombre 
const userState = (valor)=>{
    return[valor, ()=>{ console.log('Hola Mundo')}];
}

//tarea realizada
const [nombre, setNombre] = userState ('Goku');
console.log(nombre)
setNombre();