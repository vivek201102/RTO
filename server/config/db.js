const { default: mongoose } = require("mongoose");

require("dotenv").config();

/*
Here you have to set env variable named MONGO_URI as 
mongodb+srv://vivek:<password>@rto.bwg1j2c.mongodb.net/?retryWrites=true&w=majority
password will be replaced with the password of mongodb atlas password
*/

const db = process.env.MONGO_URI;

const connect = async () => {

  try {
    await mongoose.connect(db, { useNewUrlParser: true });
    console.log("Connected...");
  }
  catch (err) {
    console.log(err);
  }
}

module.exports = connect;