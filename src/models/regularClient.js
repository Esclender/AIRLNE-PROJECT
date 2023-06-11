import mongoose from "mongoose";


const regularClientSchema = mongoose.Schema({
  miles:{
    type:Number,
    required: true
  },
  names:{
    type:String,
    required: true
  },
  lastnames:{
    type:String,
    required: true
  },
  birthday:{
    type:Date,
    required: true
  },
  document:{
    type:String,
    required: true
  },
  documentType:{
    type: String,
    required: true
  },
  email:{
    type:String,
    required: true
  },
  username:{
    type:String,
    required: true
  },  
  password:{
    type:String,
    required: true
  }
})


regularClientSchema.methods = {
  toJson: (schema) => {
    const {__v, _id, ...vuelo} = schema.toObject()
    vuelo.id = _id
    return vuelo
  }
}


const regularClient = mongoose.model("regularclient", regularClientSchema)


export default regularClient


