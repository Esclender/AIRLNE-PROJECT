import jwt from "jsonwebtoken"
import userSchema from "../models/authSchema.js"

async function verifyJwt(req,res,next) {
  let token = req.header("Authorization")
  console.log(token)


  if (!token) {
    return res.status(401).send("A token is required for authentication");
  }

  try {
    token = token.split(" ")[1]
    console.log(token)
    const {id} = jwt.verify(token, process.env.TOKEN_KEY);

    const user = userSchema.findById(id)

    if(!user){
      res.status(401).json({
        message:"The token user is not valid"
      })
    }

    req.authenticatedUser = user

    next()


  } catch (err) {
    console.log(err);
    return res.status(401).send("Invalid Token");
  }
}

export default verifyJwt
