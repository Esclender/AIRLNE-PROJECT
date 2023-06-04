import hotelSchema from "../models/hotelesReservas.js"
import db from "../database/project.module.js"

const model = new db(hotelSchema)

async function getReservasHoteles(){
  const rst = await model.get()
  return await rst.map(schema => schema.toJson(schema))
}

async function postReservasHoteles(body){
  const rst = await model.post(body)
  return await rst.toJson(rst)
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