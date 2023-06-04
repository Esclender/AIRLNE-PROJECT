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

export default {
  getReservaVuelo,
  postReservaVuelo
}