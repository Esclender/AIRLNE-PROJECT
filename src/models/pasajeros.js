import mongoose from "mongoose";

const pasajeroSchema = mongoose.Schema({
  name:{
    type:String,
    required: true
  },
  lastName:{
    type:String,
    required: true
  },
  age:{
    type:Number,
    required: true
  },
  passport_N:{
    type:String,
    required: true
  }
})

pasajeroSchema.methods = {
  toJson: (schema) => {
    const {__v, _id, ...pass} = schema.toObject()
    pass.id = _id
    return pass
  }
}

const pasajeros = mongoose.model("pasajeros", pasajeroSchema)

export default pasajeros