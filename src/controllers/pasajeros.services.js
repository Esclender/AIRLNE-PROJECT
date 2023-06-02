import pasajerosSchema from "../models/pasajeros.js"
import db from "./project.module.js"

const model = new db(pasajerosSchema)

async function getpasajero(req,res){
  try {

    const rst = await model.get()
    return await res.json(rst)

  } catch (error) {
    res.json({
      message:error
    })
  }
}

async function postpasajero(req,res){
  try {
    
    const rst = await model.post(req.body)
    return await res.status(201).json(rst)

  } catch (error) {
    res.json({
      message:error
    })
  }
}

async function putpasajero(req,res){
  try {
    const id = req.params.id
    const rst = await model.put(id,req.body)
    return await res.json({
      message:"Pasajero Actualizado"
    })

  } catch (error) {
    console.log(error)
    res.json({
      message:error
    })
  }
}

async function deletepasajero(req,res){
  try {
    const id = req.params.id
    const rst = await model.delete(id)
    return await res.json({
      message:"El pasajero ha cancelado su vuelo"
    })

  } catch (error) {
    console.log(error)
    res.json({
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