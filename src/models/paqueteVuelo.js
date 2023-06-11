import mongoose from "mongoose";

const paqueteVueloSchemas = mongoose.Schema({
  avaibleHotels: {
    type: Array,
    required: true,
  },
  avaibleFlie: {
    type: Array,
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

const paquete = mongoose.model("paquetevuelos", paqueteVueloSchemas);

export default paquete;
