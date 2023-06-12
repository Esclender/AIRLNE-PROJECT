import pasajerosServices from "../services/pasajeros.service.js"

async function getpasajero(req,res){
  try {

    const rst = await pasajerosServices.getPasajeros()
    return await res.json(rst)

  } catch (error) {
    res.status(404).json({
      message:error
    })
  }
}

async function postpasajero(req,res){
  try {
    
    const rst = await pasajerosServices.postPasajeros(req.body)
    return await res.status(201).json({
      message:"Pasajero registrado",
      data:rst
    })

  } catch (error) {
    res.status(400).json({
      message:error
    })
  }
}

async function putpasajero(req,res){
  try {
    const id = req.params.id
    await pasajerosServices.putPasajeros(id,req.body)
    return await res.json({
      message:"Info del Pasajero actualizada."
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

async function deletepasajero(req,res){
  try {
    const id = req.params.id
    await pasajerosServices.deletePasajeros(id)
    return await res.json({
      message:"El pasajero ha sido inhabilitado."
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
  getpasajero,
  postpasajero,
  putpasajero,
  deletepasajero
}