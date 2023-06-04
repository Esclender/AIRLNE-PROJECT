import vuelosSchema from "../models/vuelos.js"
import db from "../database/project.module.js"
import BaseException from "../exceptions/baseExceptions.module.js"

const model = new db(vuelosSchema)

async function getVuelos(){
  const rst = await model.get()
  const mapped = await rst.map(schema => schema.toJson(schema))
  return await mapped
}

async function getVueloById(id){
  const rst = await model.get(id)
  if(!rst) throw new BaseException("Vuelo not found", 404);
  return rst.toJson(rst)
  
}

async function postVuelos(body){
  const rst = await model.post(body)
  return await rst.toJson(rst)
}

async function putVuelos(id, body){
  const rst = await model.put(id,body)
  if(!rst.modifiedCount) throw new BaseException("Vuelo not found", 404);
  return rst
}

async function deleteVuelos(id){
  const rst = await model.delete(id)
  if(!rst.deletedCount) throw new BaseException("Vuelo not found", 404);
  return rst
}

export default {
  getVuelos,
  postVuelos,
  putVuelos,
  deleteVuelos,
  getVueloById
}