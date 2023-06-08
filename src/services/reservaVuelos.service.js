import reservaVueloSchema from "../models/reservaVuelo.js"
import passengerSchema from "../models/pasajeros.js"
import vueloSchema from "../models/vuelos.js"
import db from "../database/project.module.js"


const model = new db(reservaVueloSchema)
const modelVuelo = new db(vueloSchema)

async function getReservaVuelo(){
  const rst = await model.get()
  const mapped = await rst.map(schema => schema.toJson(schema))
  return await mapped
}

async function postReservaVuelo(body){
  const {passengerPassportN, bookedFlieId} = body
  const isNull = passengerPassportN == undefined || bookedFlieId == undefined

  const rstBody = {
    passenger: null,
    bookedFlie: null
  }

  rstBody.passenger = await passengerSchema.find({passport_N:passengerPassportN})
  rstBody.bookedFlie = await modelVuelo.get(bookedFlieId)

  rstBody.passenger =  rstBody.passenger[0]

  const rst = await model.post(rstBody)
  return await rst.toJson(rst)
}

async function putReservaVuelo(id, body){
  let {bookedFlieId} = body
  const isNull = bookedFlieId == undefined

  bookedFlieId = await modelVuelo.get(bookedFlieId)

  const rst = await model.put(id,{bookedFlie: bookedFlieId})
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