import userSchema from "../models/authSchema.js"
import BaseRequestException from "../exceptions/baseRequestExceptions.module.js"
import genrateJwt from"../utils/generateJwt.js"

async function loginUser(email,passw){
  const user = await userSchema.findOne({email:email})

  if(!user){
    throw new BaseRequestException("email is obligatory")
  }

  const validatePassw = user.password == passw

  if(!validatePassw){
    throw new BaseRequestException("The passwords don't match")
  }

  return genrateJwt({id: user._id, email: user.email})
}

export default {
  loginUser
}
