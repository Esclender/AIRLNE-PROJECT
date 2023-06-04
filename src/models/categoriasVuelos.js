import mongoose from "mongoose";

const vueloCategorySchema = mongoose.Schema({
  beneficies:{
    type:Array,
    required: true
  },
  categoryName:{
    type:String,
    required: true
  },
  price:{
    type:Number,
    required: true
  },
  currency:{
    type:String,
    required: true
  }
})

vueloCategorySchema.methods = {
  toJson: (schema) => {
    const {__v, _id, ...vuelo} = schema.toObject()
    vuelo.id = _id
    return vuelo
  }
}

const vcategory = mongoose.model("vueloCategorias", vueloCategorySchema)

export default vcategory