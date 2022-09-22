const { default: mongoose } = require("mongoose");

require("dotenv").config();

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