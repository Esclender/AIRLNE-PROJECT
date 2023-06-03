import categoriasVuelosSchema from "../models/categoriasVuelos.js"
import db from "./project.module.js"

const model = new db(categoriasVuelosSchema)

async function getcategoriasVuelos(req,res){
  try {

    const rst = await model.get()
    return await res.json(rst)

  } catch (error) {
    res.json({
      message:error
    })
  }
}

async function postcategoriasVuelos(req,res){
  try {
    
    const rst = await model.post(req.body)
    return await res.status(201).json(rst)

  } catch (error) {
    res.json({
      message:error
    })
  }
}

async function putcategoriasVuelos(req,res){
  try {
    const id = req.params.id
    const rst = await model.put(id,req.body)
    return await res.json({
      message:"Categoria actualizada"
    })

  } catch (error) {
    console.log(error)
    res.json({
      message:error
    })
  }
}

async function deletecategoriasVuelos(req,res){
  try {
    const id = req.params.id
    const rst = await model.delete(id)
    return await res.json({
      message:"Categoria eliminada"
    })

  } catch (error) {
    console.log(error)
    res.json({
      message:error
    })
  }
}

export default {
  getcategoriasVuelos,
  postcategoriasVuelos,
  putcategoriasVuelos,
  deletecategoriasVuelos
}