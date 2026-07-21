import express from 'express';

const app=express();

import studentRouter from './routes/studentRoute.js'

app.get('/',(req,res)=>{
    res.send("Hello Shubham")
})

app.get('/contact',(req,res)=>{
    res.send("Ye Contact Page hai")
})

app.use('/student',studentRouter);




app.listen(5000,()=>{
    console.log("server is listening on port 5000")
})