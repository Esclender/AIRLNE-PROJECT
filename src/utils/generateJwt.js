import jwt from "jsonwebtoken"

const generateJwt = (payload) => {
  return new Promise((resolve,reject) => {
    jwt.sign(payload, process.env.TOKEN_KEY,
      {
        expiresIn: "24h",
      }, (err, token) => {
        if(err){
          console.log(err);
          reject("Token couldn't be generated");
        }else{
          resolve(token)
        }
    
      }
    )
  })
}

export default generateJwt