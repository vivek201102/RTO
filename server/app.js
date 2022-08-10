const express = require('express');
const port = process.env.PORT || 8082;
const app = express();

app.get('/', (req, res) => res.send('Hello world!'));

app.listen(port, ()=>{
    console.log(`Server is running on port: http://localhost:${port}`);
});