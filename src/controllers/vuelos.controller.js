import vuelosSchema from "../models/vuelos.js"
import db from "../database/project.module.js"

const model = new db(vuelosSchema)

async function getvuelos(req,res){
  try {

    const rst = await model.get()
    return await res.json(rst)

  } catch (error) {
    res.status(404).json({
      message:error
    })
  }
}

async function getvuelosbyid(req,res){
  try {

    const rst = await model.get(req.params.id)
    return await res.json(rst)

  } catch (error) {
    res.json({
      message:error
    })
  }
}

async function postvuelos(req,res){
  try {
    
    const rst = await model.post(req.body)
    return await res.status(201).json(rst)

  } catch (error) {
    res.status(400).json({
      message:error
    })
  }
}

async function putvuelos(req,res){
  try {
    const id = req.params.id
    await model.put(id,req.body)
    return await res.json({
      message:"Vuelo Actualizado"
    })

  } catch (error) {
    res.status(404).json({
      message:error
    })
  }
}

async function deletevuelos(req,res){
  try {
    const id = req.params.id
    await model.delete(id)
    return await res.json({
      message:"Vuelo cancelado"
    })

  } catch (error) {
    res.status(404).json({
      message:error
    })
  }
}

export default {
  getvuelos,
  postvuelos,
  putvuelos,
  getvuelosbyid,
  deletevuelos
}