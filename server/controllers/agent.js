const agent = require('../models/agent.js');
const bcrypt = require("bcryptjs");

/*
  Registration of agent
*/
exports.register = async function(req, res) {
  //Fetching data
  const { name, email, mobile, location, username, password } = req.body;

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
    res.json({ "message": message, "agentInfo": null });
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
      location,
      username,
      password: hashedPassword
    });

    try {
      //saving data in collection
      await newAgent.save();
      message = "Agent created successfully";
    }

    catch (error) {
      console.log(error);
    }
    //Final response...
    res.json({ "message": message, "agentInfo": newAgent });
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
