const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.get('/',(req,res)=>{
    res.send("hello")
})

app.listen('8080',()=>{
    console.log("server started")
})