import hotelSchema from "../models/hotelesReservas.js"
import db from "./project.module.js"

const model = new db(hotelSchema)

async function getReservasHoteles(req,res){
  try {

    const rst = await model.get()
    return await res.json(rst)

  } catch (error) {
    res.json({
      message:error
    })
  }
}

async function postReservasHoteles(req,res){
  try {
    
    const rst = await model.post(req.body)
    return await res.status(201).json(rst)

  } catch (error) {
    res.json({
      message:error
    })
  }
}

async function putReservasHoteles(req,res){
  try {
    const id = req.params.id
    const rst = await model.put(id,req.body)
    return await res.json({
      message:"Reserva Actualizada"
    })

  } catch (error) {
    console.log(error)
    res.json({
      message:error
    })
  }
}

async function deleteReservasHoteles(req,res){
  try {
    const id = req.params.id
    const rst = await model.delete(id)
    return await res.json({
      message:"Reserva eliminada"
    })

  } catch (error) {
    console.log(error)
    res.json({
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