const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const specialNumberSchema = new Schema({
  number: {type:String, required:true},
  userid: {type:String, required:true}
});

module.exports = mongoose.model('SpecialNumber', specialNumberSchema);