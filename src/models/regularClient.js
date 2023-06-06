import mongoose from "mongoose";

const regularClientSchema = mongoose.Schema({
    destination:{
        type:String,
        required: true
    },
    origin:{
        type:String,
        required: true
    },
    passenger:{
        type:String,
        required: true
    }
})



regularClientSchema.methods = {
  toJson: (schema) => {
    const {__v, _id, ...vuelo} = schema.toObject()
    vuelo.id = _id
    return vuelo
  }
}

const regularClient = mongoose.model("vuelosReservas", regularClientSchema)

export default regularClient