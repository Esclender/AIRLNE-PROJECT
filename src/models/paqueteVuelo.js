import mongoose from "mongoose";

const paqueteVueloSchemas = mongoose.Schema({
  avaibleHotels: {
    type: String,
    required: true,
  },
  avaibleFlie: {
    type: Number,
    required: true,
  },
});

paqueteVueloSchemas.methods = {
  toJson: (schema) => {
    const { __v, _id, ...vuelo } = schema.toObject();
    vuelo.id = _id;
    return vuelo;
  },
};

const paquete = mongoose.model("hotelesReservas", paqueteVueloSchemas);

export default paquete;
