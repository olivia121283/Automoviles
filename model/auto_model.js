const mongoose = require('mongoose');
const Schema = mongoose.Schema

const AutoSchema = new Schema({
  make: String,
  model: {
    type: String,
    require: true,
    trim: true
  },
  image: String,
  version: String,
  price: String

})

const AutoModel = mongoose.model('autos', AutoSchema);
module.exports = AutoModel;