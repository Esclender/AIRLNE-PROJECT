import categoriasVSchema from "../models/categoriasVuelos.js"
import db from "../database/project.module.js"

const model = new db(categoriasVSchema)

async function getCategoriasVuelos(){
    return await model.get()
}

async function postCategoriasVuelos(body){
    return  await model.post(body)
}

async function putCategoriasVuelos(id, body){
  return await model.put(id,body)
}

async function deleteCategoriasVuelos(id){
    return await model.delete(id)
}

export default {
  getCategoriasVuelos,
  postCategoriasVuelos,
  putCategoriasVuelos,
  deleteCategoriasVuelos
}