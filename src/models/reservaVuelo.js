import mongoose from "mongoose";


const vueloReservaSchema = mongoose.Schema({
    passenger:{
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
      }
    },
    aboardingDate:{
      type:Date,
      required: true
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


