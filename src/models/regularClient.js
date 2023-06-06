import mongoose from "mongoose";

const regularClientSchema = mongoose.Schema({
    miles:{
        type:Number,
        required: true
    },
    
    passenger:{
        type:Object,
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