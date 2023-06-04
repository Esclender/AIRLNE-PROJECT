import categoriasVSchema from "../models/categoriasVuelos.js"
import db from "../database/project.module.js"
import BaseException from "../exceptions/baseExceptions.module.js"

const model = new db(categoriasVSchema)

async function getCategoriasVuelos(){
  const rst = await model.get()
  const mapped = await rst.map(schema => schema.toJson(schema))
  return await mapped
}

async function postCategoriasVuelos(body){
  const rst = await model.post(body)
  return await rst.toJson(rst)
}

async function putCategoriasVuelos(id, body){
  const rst = await model.put(id,body)
  if(!rst.modifiedCount) throw new BaseException("Categoria not found", 404);
  return rst
}

async function deleteCategoriasVuelos(id){
  const rst = await model.delete(id)
  if(!rst.deletedCount) throw new BaseException("Categoria not found", 404);
  return rst
}

export default {
  getCategoriasVuelos,
  postCategoriasVuelos,
  putCategoriasVuelos,
  deleteCategoriasVuelos
}