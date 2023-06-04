import mongoose from "mongoose";

const pasajeroSchema = mongoose.Schema({
  name:{
    type:String,
    required: true
  },
  LastName:{
    type:String,
    required: true
  },
  Age:{
    type:Number,
    required: true
  },
  Passport_N:{
    type:String,
    required: true
  },
  Destination:{
    type:String,
    required: true
  }
})

pasajeroSchema.methods = {
  toJson: (schema) => {
    const {__v, _id, ...vuelo} = schema.toObject()
    vuelo.id = _id
    return vuelo
  }
}

const pasajeros = mongoose.model("pasajeros", pasajeroSchema)

export default pasajeros