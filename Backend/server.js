import express from 'express';

const app=express();

import studentRouter from './routes/studentRoute.js'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';

dotenv.config();

connectDB();

const PORT=process.env.PORT;
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello Shubham")
})

app.get('/contact',(req,res)=>{
    res.send("Ye Contact Page hai")
})

app.use('/student',studentRouter);




app.listen(PORT,()=>{
    console.log("server is listening on port 5000")
})