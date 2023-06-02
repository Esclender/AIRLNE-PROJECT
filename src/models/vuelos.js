import mongoose from "mongoose";

const vuelosSchema = mongoose.Schema({
  destino:{
    type:String,
    required: true
  },
  origen:{
    type:String,
    required: true
  },
  idaYvuelta:{
    type:Boolean,
    required: true
  },
  Salida:{
    type:Date,
    required: true
  },
  tarifa$:{
    type:Number,
    required: true
  },
  llegada:{
    type:Date,
    required: true
  },
})

const vuelos = mongoose.model("vuelos", vuelosSchema)

export default vuelos