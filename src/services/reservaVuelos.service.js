import reservaVueloSchema from "../models/reservaVuelo.js"
import db from "../database/project.module.js"

const model = new db(reservaVueloSchema)

async function getReservaVuelo(){
  const rst = await model.get()
  return await rst.map(schema => schema.toJson(schema))
}

async function postReservaVuelo(body){
  const rst = await model.post(body)
  return await rst.toJson(rst)
}

export default {
  getReservaVuelo,
  postReservaVuelo
}