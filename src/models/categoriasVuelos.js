import mongoose from "mongoose";

const vueloCategorySchema = mongoose.Schema({
    type:{
    type:String,
    required: true
  },
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

const vcategory = mongoose.model("vueloCategorias", vueloCategorySchema)

export default vcategory