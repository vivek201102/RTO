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
    const { firstname, middlename, lastname, dob, age,dateregister, email, mobile, address, password } = req.body;

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
        //Creating new object
        const newUser = new user({
            firstname,
            middlename,
            lastname,
            dob,
            age,
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