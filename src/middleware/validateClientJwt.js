import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import regularClientSchema from "../models/regularClient.js"

async function verifyJwt(req,res,next) {
  let token = req.header("X-API-KEY")


  if (!token) {
    return res.status(401).send("A client token is required for authentication");
  }

  try {
    const {username} = jwt.verify(token, process.env.TOKEN_KEY);

    const user = await regularClientSchema.findOne({username})
    console.log(user, "user")

    if(!user){
      res.status(401).json({
        message:"The client token is not valid. Check that you have an account"
      })
    }


    req.authenticatedUser = {
      ...req.authenticatedUser,
      client:user
    }

    next()


  } catch (err) {
    console.log(err);
    return res.status(401).send("Invalid Token");
  }
}

export default verifyJwt