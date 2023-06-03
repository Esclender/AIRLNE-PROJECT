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

const booking = mongoose.model("hotelesReservas", hotelBookingSchema)

export default booking