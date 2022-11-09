const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const documentSchema = new Schema({
    userId: { type: String, required: true},
    aadharcard: { type: String, required: true },
    photo: { type: String, required: true },
    addressproof: { type: String, required: true },
    signature: {type: String, required: true},
    isVarified: {type: Boolean, default: false },
    varifiedBy: { type: String, default: null}
});

module.exports = mongoose.model("Documents", documentSchema);