const user = require('../models/userregister.js');
const token = require('../models/token.js');
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
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
        existingUser = await user.findOne({
            $or: [
                { email: email }
            ]
        });
    }
    catch (error) {
        console.log(error);
    }

    if (existingUser) {
        //If exists...
        message = "User with same email already exists";
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

            //JWT Signin
            // const token = JWT.sign({ id: UserInfo._id, email: UserInfo.email }, process.env.JWT_SECRET, {
            //   expiresIn: "2h"
            // });

            // UserInfo.token = token;
            message = "User created successfully";


        }

        catch (error) {
            console.log(error);
        }

        //Final response...
        res.json({ "code": 0, "message": message, "UserInfo": UserInfo, "token": token });
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