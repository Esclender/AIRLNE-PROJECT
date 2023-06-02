import mongoose from "mongoose";

const hotelBookingSchema = mongoose.Schema({
  nombreHotel:{
    type:String,
    required: true
  },
  calificacion:{
    type:Number,
    required: true
  },
  ciudad:{
    type:String,
    required: true
  }
})

const booking = mongoose.model("hotelesReservas", hotelBookingSchema)

export default booking