import mongoose from "mongoose";

const vueloReservaSchema = mongoose.Schema({
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


vueloReservaSchema.methods = {
  toJson: (schema) => {
    const {__v, _id, ...vuelo} = schema.toObject()
    vuelo.id = _id
    return vuelo
  }
}

const vueloReserva = mongoose.model("vuelosReservas", vueloReservaSchema)

export default vueloReserva