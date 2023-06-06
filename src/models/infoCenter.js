import mongoose from "mongoose";

const infoCenterSchema = mongoose.Schema({
    contactNumbers:{
        type:Array,
        required: true
    }
})



infoCenterSchema.methods = {
  toJson: (schema) => {
    const {__v, _id, ...vuelo} = schema.toObject()
    vuelo.id = _id
    return vuelo
  }
}

const infoCenter = mongoose.model("vuelosReservas", infoCenterSchema)

export default infoCenter