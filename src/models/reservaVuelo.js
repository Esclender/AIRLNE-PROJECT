import mongoose from "mongoose";
import pasajeroSchema from "./pasajeros.js"
import vueloSchema from "./vuelos.js"

const vueloReservaSchema = mongoose.Schema({
    passenger:{
      type: Object,
      required: true
    },
    bookedFlie:{
      type: Object,
      required:true
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