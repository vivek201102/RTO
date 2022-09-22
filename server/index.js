const express = require('express');
const port = process.env.PORT || 8082;
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");


/*
Database connection
Mongooes atlas connection
*/
const db = require('./config/db.js');
db();


/*
Some configurations
*/
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/*
Reuire for routes...
*/
const officer_routes = require('./routes/officer.js');


/*
Redirect as per requirements
*/
app.use("/officer", officer_routes);

/*
*/
app.get('/', (req, res) => res.send('Hello world!'));

app.listen(port, () => {
  console.log(`Server is running on port: http://localhost:${port}`);
});
