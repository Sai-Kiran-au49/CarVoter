const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 30,
    minLength: 5,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  
  phone : {
    type:String,
    required : true
  },

  votes :{
     type:[{
       modelId : {
        type : String
       },
       votes : {
        type:Number
       }
     }]
  }
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
