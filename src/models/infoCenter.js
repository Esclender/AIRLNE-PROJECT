import mongoose from "mongoose";


const infoCenterSchema = mongoose.Schema({
  userData:{
    type:Object,
    required: true
  },
  comment:{
    type: String,
    required: true
  },
  claimType:{
    type:String,
    required: true
  }
}, { timestamps: true })






infoCenterSchema.methods = {
  toJson: (schema) => {
    const {__v, _id, ...info} = schema.toObject()
    info.id = _id
    return info
  }
}


const infoCenter = mongoose.model("infocenters", infoCenterSchema)


export default infoCenter


