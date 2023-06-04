import vuelosSchema from "../models/vuelos.js"
import db from "../database/project.module.js"

const model = new db(vuelosSchema)

async function getVuelos(){
  const rst = await model.get()
  return await rst.map(schema => schema.toJson(schema))
}

async function getVueloById(id){
  const rst = await model.get(id)
  return await rst.toJson(rst)
  
}

async function postVuelos(body){
  const rst = await model.post(body)
  return await rst.toJson(rst)
}

async function putVuelos(id, body){
  return await model.put(id,body)
}

async function deleteVuelos(id){
    return await model.delete(id)
}

export default {
  getVuelos,
  postVuelos,
  putVuelos,
  deleteVuelos,
  getVueloById
}