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
    return await res.status(201).json(rst)

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
      message:"La info del pasajero se ha actualizado"
    })

  } catch (error) {
    res.status(404).json({
      message:error
    })
  }
}

async function deletepasajero(req,res){
  try {
    const id = req.params.id
    await pasajerosServices.deletePasajeros(id)
    return await res.json({
      message:"El pasajero ha cancelado su vuelo"
    })

  } catch (error) {
    res.status(404).json({
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