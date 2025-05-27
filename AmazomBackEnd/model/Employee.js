const mongoose = require("mongoose");
const { Admin } = require("../config/roles_list");
const Schema = mongoose.Schema;

const employeeSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: {
      employeeId:Number,
      Admin: Number,
    },
    refreshToken: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", employeeSchema);
