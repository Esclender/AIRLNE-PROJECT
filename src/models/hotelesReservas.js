import mongoose from "mongoose";

const hotelBookingSchema = mongoose.Schema({
  nameHotel:{
    type:String,
    required: true
  },
  rating:{
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
    const {__v, _id, ...hotel} = schema.toObject()
    hotel.id = _id
    return hotel
  }
}

const booking = mongoose.model("hotelesReservas", hotelBookingSchema)

export default booking