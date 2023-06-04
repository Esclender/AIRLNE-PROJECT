import pasajerosSchema from "../models/pasajeros.js"
import db from "../database/project.module.js"
import BaseException from "../exceptions/baseExceptions.module.js"

const model = new db(pasajerosSchema)

async function getPasajeros(){
  const rst = await model.get()
  const mapped = await rst.map(schema => schema.toJson(schema))
  return await mapped
}

async function postPasajeros(body){
  const rst = await model.post(body)
  return await rst.toJson(rst)
}

async function putPasajeros(id, body){
  const rst = await model.put(id,body)
  if(!rst.modifiedCount) throw new BaseException("Pasajero not found", 404);
  return rst
}

async function deletePasajeros(id){
  const rst = await model.delete(id)
  if(!rst.deletedCount) throw new BaseException("Pasajero not found", 404);
  return rst
}

export default {
  getPasajeros,
  postPasajeros,
  putPasajeros,
  deletePasajeros
}