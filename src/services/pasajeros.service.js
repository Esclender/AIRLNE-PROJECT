import pasajerosSchema from "../models/hotelesReservas.js"
import db from "../database/project.module.js"

const model = new db(pasajerosSchema)

async function getPasajeros(){
    return await model.get()
}

async function postPasajeros(body){
    return  await model.post(body)
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