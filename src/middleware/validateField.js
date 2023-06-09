import { validationResult } from "express-validator"

function validateFields(req, res){
  const result = validationResult(req)

  if(!result.isEmpty()){
    res.status(400).json({result})
  }
}

export default validateFields