import hotelSchema from "../models/hotelesReservas.js"
import db from "../database/project.module.js"
import BaseException from "../exceptions/baseExceptions.module.js"

const model = new db(hotelSchema)

async function getReservasHoteles(){
  const rst = await model.get()
  const mapped = await rst.map(schema => schema.toJson(schema))
  return await mapped
}

async function postReservasHoteles(body){
  const rst = await model.post(body)
  return await rst.toJson(rst)
}

async function putReservasHoteles(id, body){
  const rst = await model.put(id,body)
  if(!rst.modifiedCount) throw new BaseException("Reserva not found", 404);
  return rst
}

async function deleteReservasHoteles(id){
  const rst = await model.delete(id)
  if(!rst.deletedCount) throw new BaseException("Reserva not found", 404);
  return rst
}

export default {
  getReservasHoteles,
  postReservasHoteles,
  putReservasHoteles,
  deleteReservasHoteles
}