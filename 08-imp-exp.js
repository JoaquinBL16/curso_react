
//import , export y funciones comunes de arreglos
//import {heroes} from './data/heroes';

import  heroes,{owners} from "../data/heroes";

//console.log(owners)

export const getHeroeById = (id) => 
    heroes.find(heroe => heroe.id === id);


//console.log(getHeroeById(2));

//find no sirve porque el find solo regresa uno 
//aca se utiliza filter 
//export const getHeroeByOwner = ( owner ) => heroes.filter(heroe => heroe.owner === owner);
const getHeroeByOwner = ( owner ) => heroes.filter(heroe => heroe.owner === owner);


//console.log(getHeroeByOwner('DC'));