import pasajerosSchema from "../models/pasajeros.js"
import db from "../database/project.module.js"

const model = new db(pasajerosSchema)

async function getPasajeros(){
  const rst = await model.get()
  return await rst.map(schema => schema.toJson(schema))
}

async function postPasajeros(body){
  const rst = await model.post(body)
  return await rst.toJson(rst)
}

async function putPasajeros(id, body){
  return await model.put(id,body)
}

async function deletePasajeros(id){
    return await model.delete(id)
}

export default {
  getPasajeros,
  postPasajeros,
  putPasajeros,
  deletePasajeros
}