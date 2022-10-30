const numberplate = require("../models/specialNumber.js");


exports.findByNumber = async function(req, res) {
  //Request of data
  let district = req.body.district;
  let number = req.body.number;
  let plateNo = "GJ " + district + number;

  let existingPlate, message;

  try {
    existingPlate = await numberplate.findOne({ plateNo: plateNo });
  }

  catch (error) {
    console.log(error);
  }

  if (existingPlate) {
    res.json({ code: 1, message: "Numberplate already exist" });
  }
  else {
    res.json({ code: 0, message: "Numberplate does not exist" });
  }

}

exports.addNumber = async function(req, res) {
  let district = req.body.district;
  let number = req.body.number;
  let plateNo = "GJ " + district + number;

  try {

  }
  catch (error) {
    res.json({ code: 504, message: "server error..." })
    console.log(error);
  }


}