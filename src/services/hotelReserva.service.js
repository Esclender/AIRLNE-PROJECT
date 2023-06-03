import hotelSchema from "../models/hotelesReservas.js"
import db from "../database/project.module.js"

const model = new db(hotelSchema)

async function getReservasHoteles(){
    return await model.get()
}

async function postReservasHoteles(body){
    return  await model.post(body)
}

async function putReservasHoteles(id, body){
  return await model.put(id,body)
}

async function deleteReservasHoteles(id){
    return await model.delete(id)
}

export default {
  getReservasHoteles,
  postReservasHoteles,
  putReservasHoteles,
  deleteReservasHoteles
}