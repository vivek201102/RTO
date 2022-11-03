const officerDb = require("../models/officer");
const bcrypt = require("bcryptjs");

/* Register the officer */
exports.registerOfficer = async function(req, res) {
  //Requesting data
  const { name, email, mobile, username, password } = req.body;
  let existUser, message;
  try {
    //Check if username and email is already taken
    existUser = await officerDb.findOne({
      $or: [
        { username: username },
        { email: email }
      ]
    });
  }

  catch (error) {
    console.log(error);
  }

  if (existUser) {
    message = "Username or Email is already taken.";
    res.json({"code":-1, "message": message, "officerInfo": null });
  }


  else {
    //password encyption (hashing)
    let hashedPassword;

    try {
      //bcryptjs - for data encryption
      hashedPassword = await bcrypt.hash(password, 12);
    }
    catch (error) {
      console.log(error);
    }

    //creating object of officerDb to save with encrypted password
    const newOfficer = new officerDb({
      name,
      email,
      mobile,
      username,
      password: hashedPassword,
    });

    try {
      //save in database (collection)
      await newOfficer.save();
      message = "User created successfully";
    }

    catch (error) {
      console.log(error);
    }

    //final
    res.json({"code":0,"message": message, "officerInfo": newOfficer });
  }
}

/* Geting information of officer using id of officer */
exports.getOfficer = async function(req, res) {
  let id = req.params.id;
  let officerData;
  try {
    officerData = await officerDb.findById(id);
  }
  catch (error) {
    console.log(error);
  }
  if (officerData)
    res.json({ "message": "Data fetched", "officerInfo": officerData });
  else
    res.json({ "messsage": "Data not found" });
}


/* Authentication (login) of officer */
exports.authOfficer = async function(req, res) {
  //Requesting username and password

  const { username, password } = req.body;

  let officerData;

  //Check if officer exist or not
  try {
    officerData = await officerDb.findOne({ username: username });
  }
  catch (error) {
    console.log(error);
  }

  //Officer does not exists
  if (!officerData) {
    res.json({ "message": "User not found" });
  }

  //Officer exists with username
  else {
    let isValidate = false;

    //Comparing password (bcryption)
    try {
      isValidate = await bcrypt.compare(password, officerData.password);
    }

    catch (error) {
      console.log(error);
    }

    //Authencication successfull
    if (isValidate)
      res.json({ "message": "Authentication successful", "officerInfo": officerData });

    //Password is incorrect
    else
      res.json({ "message": "Password is incorrect" });
  }
}

/* Get user's id from username */
exports.getUserId = async function(req, res) {
  let username = req.params.uname;
  try {
    let userdata = await officerDb.findOne({ username: username })
    console.log(userdata.id)
    res.json({ "userid": userdata._id });
  }
  catch (error) {
    res.json({ "userid": 0 });
    console.log(error)
  }
}

/* Update user's data */
exports.updateUserData = async function(req, res) {
  let id = req.params.id;
  let userdata = req.body;
  try {
    await officerDb.findByIdAndUpdate(id, userdata)
    res.json({ "message": "Success" })
  }
  catch (error) {
    console.log(error);
    res.json({ "message": "Error" })
  }
}


/* Update password */
exports.changePassword = async function(req, res) {
  let oldPass = req.body.oldPass;
  let newPass = req.body.newPass;
  let id = req.params.id;

  try {
    console.log(id)
    console.log(oldPass)
    console.log(newPass)
    let officerinfo = await officerDb.findById(id);
    var isValidate = false;

    if (officerinfo) {
      isValidate = await bcrypt.compare(oldPass, officerinfo.password)

      if (isValidate) {
        let hashedPassword;
        hashedPassword = await bcrypt.hash(newPass, 12);


        userinfo = await officerDb.findByIdAndUpdate(id, { "password": hashedPassword });
        res.json({ "code": 1, "message": "Password updated successfully", "officerData": officerinfo })
      }

      else {
        res.json({ "code": 0, "message": "Enter correct old password", "officerData": officerinfo })
      }
    }

    else {
      res.json({ "code": -1, "message": "Invalid user id" })
    }

  }
  catch (error) {
    console.log(error);
    res.json({ "message": "Server Error" })
  }
}


/* Reset password */
exports.resetPassword = async function(req, res) {

}