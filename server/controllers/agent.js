const agent = require('../models/agent.js');
const token = require('../models/token.js');
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");


/*
  Registration of agent
*/
exports.register = async function(req, res) {
  //Fetching data
  const { name, email, mobile, address, username, password } = req.body;

  let existingAgent, message;

  try {
    //Checking if user already exists.
    existingAgent = await agent.findOne({
      $or: [
        { username: username },
        { email: email }
      ]
    });
  }
  catch (error) {
    console.log(error);
  }

  if (existingAgent) {
    //If exists...
    message = "Agent with same username or email already exists";
    res.json({ "code":-1, "message": message, "agentInfo": null });
  }

  else {
    //Password hashing
    let hashedPassword;
    hashedPassword = await bcrypt.hash(password, 12);
    //Creating new object
    const newAgent = new agent({
      name,
      email,
      mobile,
      address,
      username,
      password: hashedPassword
    });

    let agentInfo;

    try {
      //saving data in collection
      agentInfo = await newAgent.save();

      //JWT Signin
      // const token = JWT.sign({ id: agentInfo._id, email: agentInfo.email }, process.env.JWT_SECRET, {
      //   expiresIn: "2h"
      // });
      
      // agentInfo.token = token;
      message = "Agent created successfully";


    }

    catch (error) {
      console.log(error);
    }

    //Final response...
    res.json({ "code":0,"message": message, "agentInfo": agentInfo, "token": token });
  }
}


/*
  Authentication of agent  
*/
exports.authentication = async function(req, res) {
  const { username, password } = req.body;
  let agentData;
  try {
    agentData = await agent.findOne({ username: username, password: password });
  }
  catch (error) {
    console.log(error);
  }

  if (!agentData) {
    res.status(404).json({ "message": "Agent data not found", "agentInfo": null });
  }

  else {
    const token = JWT.sign({ id: agentData._id, email: agentData.email }, process.env.JWT_SECRET, {
      expiresIn: "2h"
    });

    agentData.token = token;
    res.json({ "message": "Agent data found", "agentInfo": agentData });
  }

}


/*
  Fetching data by id
*/

exports.getAgentData = async function(req, res) {
  const id = req.params.id;
  try {
    let agentData = await agent.findById(id);
    if (agentData)
      res.json({ "agentInfo": agentData });
    else
      res.json({ "agentInfo": null });
  }
  catch (error) {
    console.log(error);
  }
}


exports.resetPassword = async function(req, res) {
  let email = req.body.email;

  let agentInfo = await agent.findOne({ email });

  if (!agentInfo) {
    throw new Error("User does not exists");
  }

  let token = await token.findOne({userId : agentInfo._id})
  if(token)
  {
    token.deleteOne()
  }

  let resetToken = crypto.randomBytes(32).toString("hex");
  const hash = await bcrypt.hash(resetToken, Number(process.env.BCRYPT_SALT));
  /*
    
  */
}