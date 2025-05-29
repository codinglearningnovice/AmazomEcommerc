const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

  username: {
    type: String,
    required: true,
  },
 /* firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },*/
  password: {
    type: String,
    required: true,
  },
  refreshToken: String
},
{timestamps:true});

module.exports = mongoose.model("User",userSchema);


