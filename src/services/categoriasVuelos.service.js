import categoriasVSchema from "../models/categoriasVuelos.js"
import db from "../database/project.module.js"

const model = new db(categoriasVSchema)

async function getCategoriasVuelos(){
  const rst = await model.get()
  return await rst.map(schema => schema.toJson(schema))
}

async function postCategoriasVuelos(body){
  const rst = await model.post(body)
  return await rst.toJson(rst)
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