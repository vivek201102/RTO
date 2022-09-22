const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const officerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  post: { type: String, required: true },

});