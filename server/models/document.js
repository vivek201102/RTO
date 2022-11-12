const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const documentSchema = new Schema({
    userId: { type: String, required: true},
    aadharcard: { type: String, required: true },
    photo: { type: String, required: true },
    addressproof: { type: String, required: true },
    signature: {type: String, required: true},
    isVerified: {type: Boolean, default: false },
    verifiedBy: { type: String, default: null },
    isRejected: { type: Boolean, default: false },
    slotDate: { type: String },
    slotTime: { type: String },
    licenceType: {type: String }
});

module.exports = mongoose.model("Documents", documentSchema);