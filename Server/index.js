const express = require("express");
const connectDB = require('./db.js');
const router = require('./routers/user.js');
const application = express();
const route = express.Router();
const PORT = 8080;

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

route.use('/user',router);

application.listen(PORT, (error) => {
    if(!error){
        console.info(`Application is running on the port is ${PORT}`);
        connectDB();
    } else{
        console.error(error);
    }
})