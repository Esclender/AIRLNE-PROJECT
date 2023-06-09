import mongoose from "mongoose";

const infoCenterSchema = mongoose.Schema({
  center:{
    type:String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  contacts:{
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

const infoCenter = mongoose.model("infocenters", infoCenterSchema)

export default infoCenter