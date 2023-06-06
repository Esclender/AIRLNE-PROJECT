import paqueteSchema from "../models/paqueteVuelo.js";
import db from "../database/project.module.js";
import BaseException from "../exceptions/baseExceptions.module.js";

const model = new db(paqueteSchema);

async function getPaquete() {
  const rst = await model.get();
  const mapped = await rst.map((schema) => schema.toJson(schema));
  return await mapped;
}

async function postPaquete(body) {
  const rst = await model.post(body);
  return await rst.toJson(rst);
}

async function putPaquete(id, body) {
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
