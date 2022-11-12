const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AgentdocumentSchema = new Schema({
    agentId: { type: String },
    aadharcard: { type: String, required: true },
    photo: { type: String, required: true },
    signature: {type: String, required: true},
    isVerified: {type: Boolean, default: false },
    verifiedBy: { type: String, default: null},
    isRejected: { type: Boolean, default: false},
});

module.exports = mongoose.model("AgentDocument", AgentdocumentSchema);