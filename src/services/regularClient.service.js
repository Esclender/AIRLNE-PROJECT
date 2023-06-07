import regularClientSchema from "../models/regularClient.js"
import db from "../database/project.module.js"
import BaseException from "../exceptions/baseExceptions.module.js"

const model = new db(regularClientSchema)

async function getRegularClient(){
  const rst = await model.get()
  const mapped = await rst.map(schema => schema.toJson(schema))
  return await mapped
}

async function postRegularClient(body){
  const rst = await model.post(body)
  return await rst.toJson(rst)
}

async function putRegularClient(id, body){
  const rst = await model.put(id,body)
  if(!rst.modifiedCount) throw new BaseException("client not found", 404);
  return rst
}

async function deleteRegularClient(id){
  const rst = await model.delete(id)
  if(!rst.deletedCount) throw new BaseException("client not found", 404);
  return rst
}

export default {
  getRegularClient,
  postRegularClient,
  putRegularClient,
  deleteRegularClient
}