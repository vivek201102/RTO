const mongooes = require('mongoose');
const Schema = mongooes.Schema;

const agentSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  address: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  token: { type: String }
});

module.exports = mongooes.model("Agent", agentSchema);