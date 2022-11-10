const mongooes = require('mongoose');
const Schema = mongooes.Schema;

const userregisterSchema = new Schema({
  firstname: { type: String, required: true },
  middlename: { type: String, required: true },
  lastname: { type: String, required: true },
  dob: { type: String, required: true },
  dateregister: { type: String, required: true },
  age: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  address: { type: String, required: true },
  password: { type: String, required: true },
  learningno: { type: String, default: null },
  token: { type: String }
});

module.exports = mongooes.model("userRegister", userregisterSchema);