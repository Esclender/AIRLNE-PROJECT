const isFlieAvaible = (vuelo,vueloTo ,body) => {

    if(new Date(vuelo.aboarding).getUTCMonth() != new Date(vueloTo.since).getUTCMonth() ){
      return false
    }
  
    if(!(new Date(vuelo.aboarding).getUTCDate() >= new Date(vueloTo.since).getUTCDate() && 
        new Date(vuelo.aboarding).getUTCDate() <= new Date(vueloTo.to).getUTCDate())){
      return false
    }
  
    if(!vuelo.destination.toUpperCase().includes(body.destination.toUpperCase()) ){
      return false
    }
  
    return true
  }
  
  export default {
    isFlieAvaible
  }