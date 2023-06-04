import reservaVueloServices from "../services/reservaVuelos.service.js"

async function getReservaVuelos(req,res){
  try {

    const rst = await reservaVueloServices.getReservaVuelo()
    return await res.json(rst)

  } catch (error) {
    console.log(error);
    res.status(404).json({
      message:error
    })
  }
}

async function postReservaVuelos(req,res){
  try {
    
    const rst = await reservaVueloServices.postReservaVuelo(req.body)
    return await res.status(201).json({
      message:"Nueva reserva registrada",
      data:rst
    })

  } catch (error) {
    console.log(error)
    res.status(400).json({
      message:error
    })
  }
}


export default {
  getReservaVuelos,
  postReservaVuelos
}