# `Project Information`
This project contains some functionalities of RTO website. This project was created as the college project to learn full stack development with MERN stack.
</br>


## `Project Name :`
- Regional Transport Office Website

## `Technologies :`

- MongoDB
- Express JS
- React JS
- Node JS



## `Functions:`
- Driving Licence Related Services
    - Apply for Learning License</li>
    - Apply for Driving License</li>
    - Change the Details in License</li>
    
- Vehicle Registration
    
    - Apply for New Vehicle Registration
    - Fancy Number Plate Allocation

- Driving School Related Services
    - Driving School Registration



## `Team Members :`
- Vivek Patel
- Jay Shah

</br>

(Screen shots of the project will be added as soon as the project gets completed)

</br>

# `RTO Website (MERN STACK)`



## Project Initialization

### Basic Structure
- Create Project Folder (Suggested Name: Project)
- Create Two Folder under Project folder named server and client
- client folder contains all frontend code
- server folder contains all backend code.
- Initilize Project folder with npm using `'npm init'`

    ```js
    //Where you want to create project open it in terminal
        mkdir Project
        cd Project
        mkdir client
        mkdir server
        npm init -y
    ```
### Client side Initilization
- Open the client folder
- Create react app in that folder
- Test your react app using `npm start`

    ```js
    //continue with previos code
        cd client
        ngx create-react-app rto
        npm start
    ```

- Add following dependencies. 
- Axios is a lightweight HTTP client based similar to a Fetch API. Axios is a promise-based async/await library for readable asynchronous code. We can easily integrate with React, and it is effortless to use in any front-end framework.
    ```js

        npm install --save react-router-dom
        npm install --save axios
    ```
- Make components and make ready the frontend part of the project separately.
</br>

### Server side Initilization
- Open the server folder
- Run command `npm init`
- Install dependencies which are needed(Express, mongoose, multer etc.)
- Create file named as app.js

    ```js
    //continue with previos code
        cd server
        npm init -y
        npm install express
        npm install multer
        npm install mongoose
    //create file name as app.js
    ```
- Open file app.js
- Initilize the express app
- Declare port manually or env port
- Listen that port to run the file

    ```js
    //Code for app.js
    const express = require('express');
    const port = process.env.PORT || 8082;
    const app = express();

    app.get('/', (req, res) => res.send('Hello world!'));

    app.listen(port, ()=>{
        console.log(`Server is running on port: http://localhost:${port}`);
    });
    ```
- Now run app.js file (`node app.js`)
- Check the url [http://localhost:8082](http://localhost:8082)
- It will display "Hello world!" output to the screen.

</br>

### Structure for client side
- controller folder from where you can controll all logics
- routes folder from where you can manage url redirecting
- models folder for handling the database models
- config folder to configure database
    ```js
    //Open Project folder in terminal then run
    mkdir routes
    mkdir controller
    mkdir models
    mkdir config
    ```

### MongoDB Setup (Localhost)
- Install Dependency for database connection
- You need to install mongodb & await
    
    ```js
        npm install mongodb
        npm install await
    ```
- Create file name as db.js
    ```js
    //db.js file content
    const MongoClient = require('mongodb');

    const connect = async function(){
    await MongoClient.connect('mongodb://localhost:2c7017/', (err, client) => {
            try{
                if(err) throw err;
                console.log("database connected successfully");
            } 
            catch(err){
                console.error(err.message);
            }
        });  
    }

    module.exports = connect;
    ```
- In file where you want to access database you can use config file as require argument.
- You can check wheather given code is working or not by running the `db.js` file but before that you need to add `connect();` befor module.exports to run function.

</br>

### Connection between Frontend and Backend
- we need to install cors in our back-end (server-side) project. run `npm install` cors in backend project.
- now start the `npm start` in frontend and `npm run app` in the backend. It should Work!!
    

