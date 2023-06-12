import mongoose from "mongoose";


const paqueteVueloSchemas = mongoose.Schema({
  packageName:{
    type: String,
    required:true
  },
  origin: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  avaibleDates:{
    since:{
      type: Date,
      required: true
    },
    to:{
      type: Date,
      required: true
    }
  },
  endingDate:{
    type: Date,
    required: true
  },
  status:{
    type: Boolean,
    required: true
  },
  avaibleHotels: {
    type: Array,
    required: true,
  },
  avaibleFlies: {
    type: Array,
    required: true,
  }
});


paqueteVueloSchemas.methods = {
  toJson: (schema) => {
    const { __v, _id, ...info } = schema.toObject();
    info.id = _id;
    return info;
  },
};


const paquete = mongoose.model("paquetevuelos", paqueteVueloSchemas);


export default paquete;