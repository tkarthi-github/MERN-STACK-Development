const express = require("express")
const userRouter = express.Router()

userRouter.get("/",(req,res)=>{
    const userlist = ['Karthi','Malar'];
    return res.json({
        status : 'success',
        message : userlist
    })
})

module.exports = userRouter;
