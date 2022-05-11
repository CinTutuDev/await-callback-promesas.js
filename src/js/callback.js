
//El id es la keys del obj (capi, iron, spider)

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

//Funcion buscar a heroes
export const buscarHeroe = (id, callback ) =>{

 const heroe = heroes[id];

 //si existe
 if(heroe){
   callback(null, heroe);
 }else{
  //no existe...ERROR
  callback(`No existe un héroe con el id ${id}`);

 }

 //callback( heroe )

}