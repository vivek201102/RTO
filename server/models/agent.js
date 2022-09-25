const mongooes = require('mongoose');
const Schema = mongooes.Schema;

const agentSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  location: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true }
});

module.exports = mongooes.model("Agent", agentSchema);