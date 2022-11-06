const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const specialNumberSchema = new Schema({
  plateNo: {type:String, required:true},
  mobile: {type:String, required:true}
});

module.exports = mongoose.model('SpecialNumber', specialNumberSchema);