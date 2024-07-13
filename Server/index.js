const express = require("express");
const connectDB = require('./db.js');

const PORT = 8080;
const application = express();

application.get('/', (req,res) =>{
    return res.json({
        status : 'success',
        message : 'This is home page'
    })
})

application.get('/home',(req,res) =>{
    return res.json({
        status : 'success',
        message : 'This is home page'
    })
})

application.listen(PORT, (error) => {
    if(!error){
        console.info(`Application is running on the port is ${PORT}`);
        connectDB();
    } else{
        console.error(error);
    }
})