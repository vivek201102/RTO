const numberplate = require("../models/specialNumber.js");


exports.findByNumber = async function(req, res) {
  //Request of data
  console.log("Checking...")
  let { district, number, series } = req.body;
  let plateNo = "GJ " + district + " " + series + " " + number;
  console.log(plateNo);
  let existingPlate;

  try {
    existingPlate = await numberplate.findOne({ plateNo: plateNo });
    console.log(existingPlate);
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
  let series = req.body.series;
  let plateNo = "GJ " + district + " " + series + " " + number;
  let mobile = req.body.mobile;

  console.log(mobile, plateNo)

  try {
    const numberplatedata = new numberplate({
      mobile: mobile,
      plateNo: plateNo
    })

    try{
      let numberplateData = await numberplatedata.save();
      res.json({code: 0, message: "Number plate added"})
    }
    catch(error)
    {
      console.log(error);
      res.json({code: -1, message:error.message})
    }
  }
  catch (error) {
    res.json({ code: 504, message: "server error..." })
    console.log(error);
  }


}