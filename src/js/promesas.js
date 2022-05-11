
const heroes = {
   capi : {
        nombre : 'Capitán América',
        poder  : 'Ahguantar inyecciones sin morir' 
   },
   iron : {
        nombre : 'Ironman',
        poder  : 'Absurda cantidad de dinero sin morir'
   },
  spider : {
       nombre : 'Spiderman',
       poder  : 'La mejor reaccion alergica a las picaduras de araña'
   },
}

 export const buscarHeroe = (id) =>{

   const heroe = heroes[id];

   //resuelve promesa correcto(if) o rechazo promesa(else)
  return new Promise( ( resolve, reject ) =>{
     if(heroe){
      setTimeout(() => resolve( heroe), 1000);
     /*  setTimeout(() => {
       resolve( heroe);
      }, 1000); */
     
     }else{
      reject(`No existe un héroe con el id ${id}`);
     }
  }); 

}
//export {buscarHeroe}
//------------------------------Async  funccion asincrona------------------------------------------

export const buscarHeroeAsync = async(id) =>{
 //devuelve una nuevba promesa

 const heroe = heroes[id];

   if(heroe){
    return heroe
   }else{
     throw `No existe un héroe con el id ${id}`;
   } 

}

//Hacer una respuesta en dos seg
 const promesaLenta = new Promise((resolve, reject) => {
 setTimeout(() => resolve ('Promesa lenta'), 2000);
});
 const promesaMedia = new Promise((resolve, reject) => {
 setTimeout(() => resolve ('Promesa media'), 1500);
});
 const promesaRapida = new Promise((resolve, reject) => {
 setTimeout(() => resolve ('Promesa rápida'), 1000);
});

export{
  promesaLenta, promesaMedia,promesaRapida
}