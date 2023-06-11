import infoCenterSchema from "../models/infoCenter.js"
import db from "../database/project.module.js"
import BaseException from "../exceptions/baseExceptions.module.js"


const model = new db(infoCenterSchema)


async function getInfoCenter(){
  const rst = await model.get()
  const claimsArray = rst.filter(cla => !cla._doc.allClaims)
  const mapped = await claimsArray.map(schema => schema.toJson(schema))
  return await mapped
}


async function getInfoCenterClaims(){
  const rst = await infoCenterSchema.findOne({"allclaims":[]})
  const {allClaims} = rst._doc
  return await allClaims
}


async function postInfoCenter(body){
  const rst = await model.post(body)
  return await rst.toJson(rst)
}


async function putInfoCenter(id, body){
  const rst = await model.put(id,body)
  if(!rst.modifiedCount) throw new BaseException("Center not found", 404)
  return rst
}


async function deleteInfoCenter(id){
  const rst = await model.delete(id)
  if(!rst.deletedCount) throw new BaseException("Center not found", 404);
  return rst
}


export default {
  getInfoCenter,
  postInfoCenter,
  putInfoCenter,
  deleteInfoCenter,
  getInfoCenterClaims
}
