const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AgentdocumentSchema = new Schema({
    agentId: { type: String },
    location:{type:String,required:true},
    aadharcard: { type: String, required: true },
    photo: { type: String, required: true },
    locproof: { type: String, required: true },
    signature: {type: String, required: true},
    isVarified: {type: Boolean, default: false },
    varifiedBy: { type: String, default: null}
});

module.exports = mongoose.model("AgentDocument", AgentdocumentSchema);