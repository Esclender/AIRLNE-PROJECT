import mongoose from "mongoose";

const vuelosSchema = mongoose.Schema({
  destination:{
    type:String,
    required: true
  },
  origin:{
    type:String,
    required: true
  },
  roundtrip:{
    type:Boolean,
    required: true
  },
  aboarding:{
    type:Date,
    required: true
  },
  currency:{
    type:String,
    required: true
  },
  price:{
    type:Number,
    required: true
  },
  arrival:{
    type:Date,
    required: true
  },
})


vuelosSchema.methods = {
  toJson: (schema) => {
    const {__v, _id, ...vuelo} = schema.toObject()
    vuelo.id = _id
    return vuelo
  }
}

const vuelos = mongoose.model("vuelos", vuelosSchema)

export default vuelos