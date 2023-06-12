import reservaVueloSchema from "../models/reservaVuelo.js"
import db from "../database/project.module.js"

const model = new db(reservaVueloSchema)


async function getReservaVuelo(){
  const rst = await model.get()
  const mapped = await rst.map(schema => schema.toJson(schema))
  return await mapped
}


async function postReservaVuelo(body){
  const rst = await model.post(body)
  return await rst.toJson(rst)
}


async function putReservaVuelo(id, body){
  let {bookedFlie} = body
  const rst = await model.put(id,{bookedFlie})
  if(!rst.modifiedCount) throw new BaseException("Reserva not found", 404);
  return rst
}

async function deleteReservaVuelo(id){
  const rst = await model.delete(id)
  if(!rst.deletedCount) throw new BaseException("Reserva not found", 404);
  return rst
}


export default {
  getReservaVuelo,
  postReservaVuelo,
  putReservaVuelo,
  deleteReservaVuelo
}


