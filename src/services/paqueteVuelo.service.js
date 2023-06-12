import paqueteSchema from "../models/paqueteVuelo.js";
import hotelSchema from "../models/hotelesReservas.js";
import vueloSchema from "../models/vuelos.js";
import db from "../database/project.module.js";
import BaseException from "../exceptions/baseExceptions.module.js";
import validateFields  from "../utils/validateFilter.js";


const model = new db(paqueteSchema);
const modelHotel = new db(hotelSchema);
const modelVuelo = new db(vueloSchema);


const checkAvaibles = async (avaibleDates, body) => {
  const fliesResults = await modelVuelo.get()
  const HotelsResults = await modelHotel.get()


  const avaibleFlies = fliesResults.filter(v => validateFields.isFlieAvaible(v, avaibleDates,body ))
  const avaibleHotels = HotelsResults.filter(h => {
    if(!h.city.toUpperCase().includes(body.destination.toUpperCase()) ){
      return false
    }
    return true
  })


  return {avaibleFlies,avaibleHotels}
}


async function getPaquete() {
  const rst = await model.get();
  const mapped = await rst.map((schema) => schema.toJson(schema))


  return mapped
}


async function postPaquete(body) {
  const {avaibleDates} = body
  const result = await checkAvaibles(avaibleDates,body)


  const newPack = {
    ...body,
    endingDate: avaibleDates.to,
    ...result,
    status: true
  }


  console.log(newPack)


  const rst = await model.post(newPack)
  return await rst.toJson(rst)
}


async function putPaquete(id, body) {
  const actPackage = await model.get(id)
  const oldPack = {
    ...actPackage._doc,
    ...body
  }
  let updatedPack = {
    ...oldPack
  }
  if(oldPack.avaibleDates){
    const result = await checkAvaibles(oldPack.avaibleDates,oldPack)
    updatedPack = {
      ...oldPack,
      ...result
    }
  }




  const rst = await model.put(id, updatedPack);
  console.log(rst)
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




