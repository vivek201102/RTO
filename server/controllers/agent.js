const agent = require('../models/agent.js');
const token = require('../models/token.js');
const bcrypt = require("bcryptjs");
const officerDb = require("../models/officer");
const agentdoc = require('../models/agentdoc.js');


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
Upload doc of agent
*/ 
exports.uploadDocument = async function(req, res, next){
  let aadharcard = req.files[0].filename;
  let photo = req.files[1].filename;
  let signature = req.files[2].filename;
  let agentId = req.body.agentid;
  try{
    let documentData = new agentdoc({
      agentId,
      aadharcard,
      photo,
      signature
    })

    documentData = await documentData.save();
    
      res.json({code:0, message: "Document uploaded successfully", docdata : documentData});
  }
  catch(error)
  {
      console.log(error.message);
      res.json({code:-1, message:"server error...", docdata: null})
  }

}


/*
  Authentication of agent  
*/
exports.authentication = async function(req, res) {
  const { username, password } = req.body;
  
  let agentData;
  try {
    agentData = await agent.findOne({$or:[{ username: username} , {email: username }]});
    
  }
  catch (error) {
    message = error.message;
    console.log(error);
  }

  if (!agentData) {
    res.json({ "message": "Agent data not found", "agentInfo": null });
  }

  else {
    let isValidate = false;

    //Comparing password (bcryption)
    try {
      isValidate = await bcrypt.compare(password, agentData.password);
    }

    catch (error) {
      console.log(error);
    }

    if(!isValidate)
    {
      res.json({ "code": -1, "message": "Password is incorrect" });
    }
    else{
      res.json({ "code": 0, "message": "Authentication successful", "agentInfo": agentData });
    }
    
  }

}


/*
  Fetching data by id
*/



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


exports.getApplication = async(req, res) => {
  console.log("In function")
  let sendData = []
  try{

    let agentDocDatas =  await agentdoc.find({isVerified: false});
    for(let agentDocData of agentDocDatas)
    {
      let agentInfo = await agent.findOne({_id: agentDocData.agentId})
      let result = {...agentInfo.toJSON(), ...agentDocData.toJSON()}
      sendData.push(result); 

    let agentDocDatas =  await agentdoc.find({});
    for(let agentDocData of agentDocDatas)
    {
      console.log(agentDocData);
      let agentInfo = await agent.findOne({_id: agentDocData.agentId})
      console.log(agentInfo);
      let result = {...agentInfo.toJSON(), ...agentDocData.toJSON()}
      sendData.push(result);
      console.log("------------------------------")
    }
    res.json({message:"Success", sendData:sendData})
  }
  catch(error)
  {
    res.json({code:-1, message:"server error..."})
  }

}

exports.approveAgent = async (req, res) => {
  const { docid, agentid, officerusername} = req.body;
  try{
    let agentdocdata = await agentdoc.findOne({_id: docid});
    agentdocdata.isVerified = true;
    agentdocdata.verifiedBy = officerusername;
    await agentdocdata.save();

    let officerinfo = await officerDb.findOne({username: officerusername});
    res.json({code:0, message:"Success", agentdocdata:agentdocdata, officerinfo});
  }
  catch(error)
  {
    res.json({code:error.code, message:error.message})
  }
}


exports.rejectAgent = async (req, res) => {
  const { docid, agentid, officerusername} = req.body;
  try{
    let agentdocdata = await agentdoc.findOne({_id: docid});
    agentdocdata.isVerified = true;
    agentdocdata.verifiedBy = officerusername;
    agentdocdata.isRejected = true;
    await agentdocdata.save();
    let officerinfo = await officerDb.findOne({username: officerusername});
    res.json({code:0, message:"Success", agentdocdata:agentdocdata, officerinfo:officerinfo})
  }
  catch(error)
  {
    res.json({code:error.code, message:error.message})
  }

}

exports.getAgentInfo = async (req, res) => {
  let {mobile, password } = req.body;
  try{
    let agentInfo = await agent.findOne({mobile: mobile});
    console.log(agentInfo)
    let isValidate = false;
    if(agentInfo)
    {
      isValidate = await bcrypt.compare(password, agentInfo.password);
      
      if(isValidate)
      {
        let docData = await agentdoc.findOne({agentId:agentInfo._id});
        if(docData)
        {
          res.json({code:0, message:"Authenticated", agentInfo:agentInfo, docData:docData});
        }
        else{
          res.json({code:-1, message:"Authenticated But Application not found", agentInfo:agentInfo, docData});
        }
      }
      else{
        res.json({code:-1, message:"Password Incorrect"});
      }
    }
    else{

      res.json({code:-1, message:"Agent not found"});
    }
  }
  catch(error)
  {
    res.json({code:-1, message:"Server error..."})
  }
}