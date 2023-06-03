import vuelosSchema from "../models/vuelos.js"
import db from "../database/project.module.js"

const model = new db(vuelosSchema)

async function getVuelos(){
    return await model.get()
}

async function postVuelos(body){
    return  await model.post(body)
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
  deleteVuelos
}