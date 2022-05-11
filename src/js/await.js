
//importo la funcion de las promesas en Async

//import { ConcatenationScope } from "webpack";
import { buscarHeroeAsync, buscarHeroe } from "./promesas";

//funcion de un arreglo

const heroesID = [ 'capi', 'iron', 'spider' ];
const heroesPromesas = heroesID.map( buscarHeroe );

export const obtenerHeroesArray = async() =>{
  //retornar nuevo arreglo
  //array vacio
  //mejor manera de hacerlo

  return await Promise.all(heroesID.map( buscarHeroe ));

 //Manera uno de hacerlo
/*  const heroesArry = [];

 //llamo a la función hecha/declarada en promesas
 for (const id of heroesID) {
  heroesArry.push( buscarHeroe( id  ));
   
 }
 return await Promise.all(heroesArry); */
};


export const obtenerHeroeAwait = async( id ) => {
    //Intenta realizar este cod y si hay un erro o escepcion entonces ejecuta el catch
    try {
        const heroe = await buscarHeroeAsync( id );
        return heroe;
  
        
    } catch (error) {
        console.log('CARCH!!!!');
        return{
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        } ;

    }
    
   
}


export const heroesCiclo = async () => {

 console.time('HeroesCiclo');
 // heroesPromesas.forEach( async(p) => console.log( await p ));
 for await( const heroe of heroesPromesas ) {
     console.table(heroe);
     console.log(heroe);
 }
 console.timeEnd('HeroesCiclo');
 // const heroes = await Promise.all( heroesPromesas );
 // heroes.forEach( heroe => console.log(heroe) );
}


export const heroeIfAwait = async(id) => {

 if ( (await buscarHeroeAsync(id)).nombre === 'Ironman' ) {
     console.log('Es el mejor de todos');
 } else {
     console.log('Naaaa');
 }

}
