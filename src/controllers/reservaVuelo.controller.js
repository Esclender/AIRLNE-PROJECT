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
    res.status(400).json({
      message:error
    })
  }
}

async function putReservaVuelo(req,res){
  try {
    const id = req.params.id
    await reservaVueloServices.postReservaVuelo(id,req.body)
    return await res.json({
      message:"la reserva ha sido actualizada."
    })

  } catch (error) {
    if(error.cause.status){
      return res.status(error.cause.status).json({
        message:error.message
      })
    }

    res.status(500).json({
      message:error
    })
  }
}

async function deleteReservaVuelo(req,res){
  try {
    const id = req.params.id
    await reservaVueloServices.deleteReservaVuelo(id)
    return await res.json({
      message:"La reserva ha sido cancelada."
    })

  } catch (error) {
    console.log(error);
    if(error.cause.status){
      return res.status(error.cause.status).json({
        message:error.message
      })
    }

    res.status(500).json({
      message:error
    })
  }
}


export default {
  getReservaVuelos,
  postReservaVuelos,
  putReservaVuelo,
  deleteReservaVuelo
}