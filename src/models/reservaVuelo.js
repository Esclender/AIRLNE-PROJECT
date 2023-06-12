import mongoose from "mongoose";


const vueloReservaSchema = mongoose.Schema({
    passengerData:{
      names:{
        type:String,
        required: true
      },
      lastNames:{
        type:String,
        required: true
      },
      documentType:{
        type:String,
        required: true
      },
      document:{
        type:String,
        required: true
      }
    },
    bookedFlie:{
      destination:{
        type:String,
        required: true
      },
      origin:{
        type:String,
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
      }
    }
}, { timestamps: true })






vueloReservaSchema.methods = {
  toJson: (schema) => {
    const {__v, _id, ...vuelo} = schema.toObject()
    vuelo.id = _id
    return vuelo
  }
}


const vueloReserva = mongoose.model("vuelosReservas", vueloReservaSchema)


export default vueloReserva


