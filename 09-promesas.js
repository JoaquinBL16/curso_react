import { getHeroeById, getHeroeByOwner } from "./bases/08-imp-exp";


//promesas en JS 


//const promesa = new Promise( (resolve, reject)=> {
//    setTimeout( () =>{
//        //tarea
//        //importen el
//        const heroe = getHeroeById(2);
//        resolve(heroe);
//        //reject('no se pudo encontrar el heroe ');
//        
//
//        //resolve();
//    }, 2000)
//
//});
//
//promesa.then( (heroe) => {
//    console.log('heroe', heroe)
//})
//.catch(err=> console.warn(err));

const getHeroeByIdAsync = ( id ) =>{
    return new Promise( (resolve, reject)=> {
        setTimeout( () =>{
            //tarea
            //importen el
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe);
            }else{
                reject('el numero de id no existe, no se encuentra heroe ');
            }
            //
            //resolve(heroe);
            //reject('no se pudo encontrar el heroe ');
            
    
            //resolve();
        }, 2000)
    
    });
    
}

getHeroeByIdAsync(1)
    .then(console.log)
    .catch(console.warn);
//catch??
