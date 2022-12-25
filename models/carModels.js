const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    maxLength: 30,
    minLength: 5,
    unique : true
    
  },
  model: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  votable: {
    type: Boolean,
    default: false,
  },
  votes : {
    type:Number,
    required : true,
    default:0
    
  }
});

const carModel = mongoose.model("cars", carSchema);
module.exports = carModel;
