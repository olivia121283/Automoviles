import {Schema as _Schema, model as _model} from "mongoose";

const Schema = _Schema

const MakeSchema = new Schema({
  make: String,
  surcursal: String,
  contact:{
    phone: Number,
    email: String,
  },
  address: String 
},{
  versionKey: false

})

const MakeModel = _model('makes', MakeSchema)
export default MakeModel
