import hotelServices from "../services/hotelReserva.service.js"


async function getReservasHoteles(req,res){
  try {

    const rst = await hotelServices.getReservasHoteles()
    return res.json(rst)

  } catch (error) {
    res.status(404).json({
      message:error
    })
  }
}

async function postReservasHoteles(req,res){
  try {
    
    const rst = await hotelServices.postReservasHoteles(req.body)
    return await res.status(201).json({
      message:"Reserva registrada",
      data:rst
    })

  } catch (error) {
    res.status(400).json({
      message:error
    })
  }
}

async function putReservasHoteles(req,res){
  try {
    const id = req.params.id
    await hotelServices.putReservasHoteles(id,req.body)
    return await res.json({
      message:"Reserva Actualizada"
    })

  } catch (error) {
    res.status(404).json({
      message:error
    })
  }
}

async function deleteReservasHoteles(req,res){
  try {
    const {id} = req.params
    await hotelServices.deleteReservasHoteles(id)
    return await res.json({
      message:"Reserva Cancelada"
    })

  } catch (error) {
    res.status(404).json({
      message:error
    })
  }
}

export default {
  getReservasHoteles,
  postReservasHoteles,
  putReservasHoteles,
  deleteReservasHoteles
}