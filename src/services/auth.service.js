import userSchema from "../models/authSchema.js"
import db from "../database/project.module.js"
import bcrypt from "bcrypt"
import BaseRequestException from "../exceptions/baseRequestExceptions.module.js"
import genrateJwt from"../utils/generateJwt.js"

const model = new db(userSchema)

async function loginUser(email,passw){
  const user = await userSchema.findOne({email:email})

  if(!user){
    throw new BaseRequestException("The email is not registered")
  }
  const validatePassw = await bcrypt.compare( passw, user.password)

  if(!validatePassw){
    throw new BaseRequestException("The passwords don't match")
  }

  return genrateJwt({id: user._id, email: user.email})
}

async function registerUser(email,passw){
  if(!email){
    throw new BaseRequestException("email is obligatory")
  }

  if(!passw){
    throw new BaseRequestException("A password is obligatory")
  }

  const newUser ={
    email,
    password: await bcrypt.hash(passw, 10)
  }

  model.post(newUser)
}

export default {
  loginUser,
  registerUser
}
