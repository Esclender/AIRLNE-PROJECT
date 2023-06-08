import mongoose from "mongoose";

const vueloReservaSchema = mongoose.Schema({
    passenger:{
      names:{
        type: String,
        required: true
      },
      lastnames:{
        type: String,
        required:true
      },
      passportN:{
        type: String,
        reuired:true
      }
    },
    bookedFlie:{
      type: Array,
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