import paqueteSchema from "../models/paqueteVuelo.js";
import hotelSchema from "../models/hotelesReservas.js";
import vueloSchema from "../models/vuelos.js";
import db from "../database/project.module.js";
import BaseException from "../exceptions/baseExceptions.module.js";
import BaseRequestException from "../exceptions/baseRequestExceptions.module.js";

const model = new db(paqueteSchema);
const modelHotel = new db(hotelSchema);
const modelVuelo = new db(vueloSchema);

async function getPaquete() {
  const rst = await model.get();
  const mapped = await rst.map((schema) => schema.toJson(schema));
  return await mapped;
}

async function postPaquete(body) {
  const {avaibleHotels,avaibleFlies} = body
  body.avaibleHotels = await Promise.all(avaibleHotels.map(async id => await modelHotel.get(id)));
  body.avaibleFlies = await Promise.all(avaibleFlies.map(async id => await modelVuelo.get(id)));
  const isNull = body.avaibleFlies.some(v => v == null) || body.avaibleHotels.some(v => v == null)

  if (isNull) throw new BaseRequestException("Revisa si todos los vuelos o hoteles ingresados estan disponibles.")
  
  const rst = await model.post(body);
  return await rst.toJson(rst);
}

async function putPaquete(id, body) {
  for (let avaible in body) {
    if (avaible == "avaibleHotels") {
      body[avaible] = await Promise.all(body[avaible].map(async id => await modelHotel.get(id)))
    }else if(avaible == "avaibleFlies"){
      body[avaible] = await Promise.all(body[avaible].map(async id => await modelVuelo.get(id)))
    }
  }
  const isNull = body.avaibleFlies.some(v => v == null) || body.avaibleHotels.some(v => v == null)

  if (isNull) throw new BaseRequestException("Revisa si todos los vuelos o hoteles ingresados estan disponibles.")
  
  const rst = await model.put(id, body);
  if (!rst.modifiedCount) throw new BaseException("Paquete not found", 404);
  return rst;
}

async function deletePaquete(id) {
  const rst = await model.delete(id);
  if (!rst.deletedCount) throw new BaseException("Paquete not found", 404);
  return rst;
}

export default {
  getPaquete,
  postPaquete,
  putPaquete,
  deletePaquete,
};
