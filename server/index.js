const express = require('express');
require("dotenv").config()
const port = process.env.PORT || 8082;
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require('http'); 
const server = http.createServer(app); 

//One change... for vivek branch
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

server.listen(port, () => {
  console.log(`Server is running on port: http://localhost:${port}`);
});
