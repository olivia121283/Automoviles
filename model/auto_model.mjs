import  mongoose from "mongoose";

const AutoSchema = new mongoose.Schema({
  make: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'makes'
    },
  model: {
    type: String,
    require: true,
    trim: true
  },
  image: String,
  version: String,
  price: String
})

const AutosModel = mongoose.model('autos', AutoSchema);
export default  AutosModel;