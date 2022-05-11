
import { obtenerHeroesArray, obtenerHeroeAwait,heroesCiclo, heroeIfAwait } from "./js/await";
//import { heroesCiclo } from "./js/await";
//import './style.css'

//-----------------------promesas-----------------------------------------
//import {buscarHeroe ,buscarHeroeAsync } from "./js/promesas";
/* promesaLenta.then(console.log);
promesaMedia.then(console.log);
promesaRapida.then(console.log); */

/* Promise.race([promesaLenta, promesaMedia, promesaRapida])
       .then(console.log)
       .catch(console.warn); */

/*  buscarHeroe('capi2')
            .then(heroe => console.log(heroe))    
            .catch(console.warn);

 buscarHeroeAsync('iron2')
            .then(console.log)
            .catch(console.warn);       */


//-----------------------------------AWAIT-----------------------------------------

 console.time('await');     

 obtenerHeroeAwait('capi')
            .then(heroe =>{
                  console.log(heroe);
                  console.timeEnd('await');
        })  .catch(console.warn)

//-------------------------------------------------------------------

heroesCiclo();
heroeIfAwait('iron')