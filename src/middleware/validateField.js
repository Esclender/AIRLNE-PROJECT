import { validationResult } from "express-validator"

function validateFields(req, res,next){
  const result = validationResult(req)

  if(!result.isEmpty()){
    const messages = result.errors.map(err => err.msg)
    res.status(400).json({messages})
  }

  next()
}

export default validateFields