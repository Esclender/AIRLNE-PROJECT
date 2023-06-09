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
    const {__v, _id, ...vuelo} = schema.toObject()
    vuelo.id = _id
    return vuelo
  }
}

const infoCenter = mongoose.model("infocenters", infoCenterSchema)

export default infoCenter