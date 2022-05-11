//importo la funcion 
//import { saludo } from './js/funciones';
//import '../src/css/funciones.css';
//-------------------------CALLBACK--------------------------------------
import { buscarHeroeas as buscarHeroeCalllback} from './js/callback';//le ponemos un alias para identificarlo a la hora de llamar a la funcion ---> as buscarHeroeCalllback
//-----------------------PROMESAS--------------------------------
import { buscarHeroe  } from "./js/promesas";
import './style.css'

const heroeId1 = 'capi'; 

const heroeId2 = 'iron'; 


//------------------CALLBACK---------------------------------------------
/* buscarHeroe (heroeId1, ( error, heroe1) => {
 //si existe un error
 if(error){ return  console.error(error);}
  
   buscarHeroe ( heroeId2, (error, heroe2) => {

    if(error){ return  console.error(error);}
    
    console.log(`Enviando al Héroe 1 ${heroe1.nombre} y ${heroe2.nombre} a la misón`);
   });
}); */

//-----------------------PROMESAS--------------------------------
/* 
buscarHeroe ( heroeId1).then( heroe1 =>{
  //console.log(`Enviando a ${heroe.nombre} a la misión`);

  buscarHeroe(heroeId2).then(heroe2 =>{
   console.log(`Enviando al Héroe 1 ${heroe1.nombre} y ${heroe2.nombre} a la misón`);
  })
}); */
 //el all recibe un arraglo de ojb
Promise.all( [buscarHeroe(heroeId1), buscarHeroe(heroeId2) ] )
       .then( ([heroe1, heroe2]) =>{
   console.log(`Enviando al Héroe 1 ${heroe1.nombre} y ${heroe2.nombre} a la misón`);
  //alert(`Enviando al Héroe 1 ${heroe1.nombre} y ${heroe2.nombre} a la misón`);
      }).catch( error =>{
         alert(error)
      }).finally( ()=>{
         console.log('Se terminó el Promise.all');
      })