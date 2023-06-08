import mongoose from "mongoose";

const infoCenterSchema = mongoose.Schema({
    contactNumbers:{
        type:Array,
        required: true
    }
})



infoCenterSchema.methods = {
  toJson: (schema) => {
    const {__v, _id, ...info} = schema.toObject()
    info.id = _id
    return info
  }
}

const infoCenter = mongoose.model("infocenter", infoCenterSchema)

export default infoCenter