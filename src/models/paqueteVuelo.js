import mongoose from "mongoose";

const paqueteVueloSchemas = mongoose.Schema({
  packageName: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  avaibleDates: {
    since: {
      type: Date,
      require: true,
    },
    to: {
      type: Date,
      require: true,
    },
  },
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
