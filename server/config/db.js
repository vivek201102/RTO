const MongoClient = require('mongodb').MongoClient


const connect = async function(){
    await MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
            try{
                if(err) throw err;
                console.log("database connected successfully");
            } 
            catch(err){
                console.error(err.message);
            }
        });  
}

connect();

module.exports = connect;