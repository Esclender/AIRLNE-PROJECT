import regularClientSchema from "../models/regularClient.js"
import { generateFromEmail } from "unique-username-generator";
import bcrypt from "bcrypt"
import db from "../database/project.module.js"
import generateJwt from "../utils/generateJwt.js";
import BaseException from "../exceptions/baseExceptions.module.js"
import BaseRequestException from "../exceptions/baseRequestExceptions.module.js";


const model = new db(regularClientSchema)


async function getRegularClient(body){
  const {username, password} = body
  const regularClient = await regularClientSchema.findOne({username})
 


  if(!regularClient){
    throw new BaseRequestException("Invalid credentials")
  }
  const validatePassw = await bcrypt.compare( password, regularClient.password)


  if(!validatePassw){
    throw new BaseRequestException("The passwords don't match")
  }
  return await generateJwt({username: username})
 
}


async function getRegularClientInfo(header){
  const {__v, _id, password, ...info} = header.client._doc


  return info
}


async function postRegularClient(body){
  const {password,email} = body
  const newUser = {
    ...body,
    username: generateFromEmail(email,2),
    password: await bcrypt.hash(password, 10),
    miles: 0
  }
  const rst = await model.post(newUser)
  await rst.toJson(rst)
  return {
    data: rst
  }
}


async function putRegularClient(header,body){
  const { _id } = header.client._doc


  const rst = await model.put(_id, body.parameters)
  return rst
}


async function deleteRegularClient(header){
  const { _id } = header.client._doc


  const rst = await model.delete(_id )
  if(!rst.deletedCount) throw new BaseException("client not found", 404);
  return rst
}


export default {
  getRegularClient,
  postRegularClient,
  putRegularClient,
  deleteRegularClient,
  getRegularClientInfo
}


