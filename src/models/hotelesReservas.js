import mongoose from "mongoose";

const hotelBookingSchema = mongoose.Schema({
  nameHotel:{
    type:String,
    required: true
  },
  qualification:{
    type:Number,
    required: true
  },
  city:{
    type:String,
    required: true
  }
})

hotelBookingSchema.methods = {
  toJson: (schema) => {
    const {__v, _id, ...vuelo} = schema.toObject()
    vuelo.id = _id
    return vuelo
  }
}

const booking = mongoose.model("hotelesReservas", hotelBookingSchema)

export default booking