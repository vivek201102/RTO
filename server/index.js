const express = require('express');
const port = process.env.PORT || 8082;
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");


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
app.use(session({ secret: 'XASDASDA' }));

var ssn;

/*
Reuire for routes...
*/
const officer_routes = require('./routes/officer.js');
const agent_routes = require('./routes/agent.js');
const vehicle_routes = require('./routes/specialNumber.js');


/*
Redirect as per requirements
*/

app.use("/api/officer", officer_routes);
app.use("/api/agent", agent_routes);
app.use("api/vehicle", vehicle_routes);

/*
*/
app.get('/', (req, res) => {
  res.send('Hello world!')  
});

app.listen(port, () => {
  console.log(`Server is running on port: http://localhost:${port}`);
});