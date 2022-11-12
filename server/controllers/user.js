const user = require('../models/userregister.js');
const document = require('../models/document.js');
const token = require('../models/token.js');
const bcrypt = require("bcryptjs");
// const JWT = require("jsonwebtoken");
// const user = require('../models user.js');


/*
  Registration of User
*/
exports.register = async function (req, res) {
    //Fetching data
    let { firstname, middlename, lastname, dob, age,dateregister, email, mobile, address, password } = req.body;

    let existingUser, message;

    try {
        //Checking if user already exists.
        existingUser = await user.findOne({$or: [{ email: email }, { mobile: mobile} ] });
    }
    catch (error) {
        console.log(error);
    }

    if (existingUser) {
        //If exists...
        message = "Application is already under process";
        res.json({ "code": -1, "message": message, "UserInfo": null });
    }

    else {
        //Password hashing
        let hashedPassword;
        hashedPassword = await bcrypt.hash(password, 12);
        // age = (new Date().getFullYear) - parseInt(dob.slice(0,4));
        let currentyear = new Date().getFullYear();
        let dobyear = parseInt(dob.slice(0,4));
        let ageOf = currentyear - dobyear;
        
        //Creating new object
        const newUser = new user({
            firstname,
            middlename,
            lastname,
            dob,
            age: ageOf,
            dateregister,
            email,
            mobile,
            address,
            password: hashedPassword
        });

        let UserInfo;

        try {
            //saving data in collection
            UserInfo = await newUser.save();
            message = "User created successfully";


        }

        catch (error) {
            console.log(error);
        }

        //Final response...
        res.json({ "code": 0, "message": message, "UserInfo": UserInfo, "token": token });
    }
}


exports.uploadDocument = async function(req, res, next){
    
    let aadharcard = req.files[0].filename;
    let photo = req.files[1].filename;
    let addressproof = req.files[2].filename;
    let signature = req.files[3].filename;
    let userId = req.body.userid;
    try{
        let documentData = new document({
            userId,
            aadharcard,
            photo,
            addressproof,
            signature
        })
        let docdata = await documentData.save();
        res.json({code:0, message: "Document uploaded successfully", docdata : docdata});
    }
    catch(error)
    {
        res.json({code:-1, message:"server error...", docdata: null})
    }

}

exports.resetPassword = async function (req, res) {
    let email = req.body.email;

    let UserInfo = await user.findOne({ email });

    if (!UserInfo) {
        throw new Error("User does not exists");
    }

    let token = await token.findOne({ userId: UserInfo._id })
    if (token) {
        token.deleteOne()
    }

    let resetToken = crypto.randomBytes(32).toString("hex");
    const hash = await bcrypt.hash(resetToken, Number(process.env.BCRYPT_SALT));
    /*
      
    */
}

exports.getUserInformation = async (req, res) =>{
    try{
        let userdatas = []
        let documentUser = await document.find({isVerified: false});
        for(u of documentUser)
        {
            let userinfo =  await user.findOne({_id: u.userId});
            let userdata = {...userinfo.toJSON(), aadharcard: u.aadharcard, photo: u.photo, addressproof: u.addressproof, signature:u.signature, isVerified:u.isVerified, varifiedBy: u.varifiedBy };
            console.log(userdata)
            userdatas.push(userdata);
        }

        res.json({code:0, message:"Data fetched", userdatas: userdatas});
    }
    catch(error)
    {
        res.status(500).json({code:-1, message: "Internal Server Error", error:error.message})
    }
}

exports.getUser = async function(req, res){
    let {mobile, password} = req.body;

    try{
        let userdata = await user.findOne({mobile, mobile});
        if(userdata)
        {
            let isValidate = false;
            isValidate = await bcrypt.compare(password, userdata.password);

            if(isValidate)
            {
                let documentData = await document.findOne({userId: userdata._id})
                res.json({code:0, message:"Authenticated", documentData:documentData})
            }
            else{
                res.json({code:1, message:"Password is incorrect"})
            }

        }
        else{
            res.json({code:-1, message:"User not found"})
        }
    }
    catch(error){
        res.json({code:-1, message: error.message})
    }
}


exports.bookSlot = async (req, res) => {
    let {docId, userId, slotDate, slotTime, licenceType } = req.body;

    try{
        let documentData = await document.findOne({_id: docId});

        documentData.slotDate = slotDate;
        documentData.slotTime = slotTime;
        documentData.licenceType = licenceType;
 
        documentData = await documentData.save();

        let userinfo = await user.findOne({_id: userId});

        res.json({code: 0, message:"slot updated successfully", documentData:documentData, userinfo: userinfo});

    }
    catch(error){
        res.json({code:-1, message:error.message})
    }
}