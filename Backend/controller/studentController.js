import Student from '../models/student.js'
import bcrypt from 'bcrypt'
const emailRegx=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

import jwt from 'jsonwebtoken'

export const register=async(req,res)=>{
    try {

        const{name,email,password,course,skills}=req.body;
        if(!name){
            return res.status(400).json({
                message:"Name provide karo !!"
            })
        }

        if(!email){
            return res.status(400).json({
                message:"Email provide karo !!"
            })
        }

        if(!emailRegx.test(email)){
            return res.status(400).json({
                message:"Invalid Email"
            })
        }

        if(!password){
            res.status(400).json({
                message:"Password Dalo !!"
            })
        }

        if(!course){
            res.status(400).json({
                message:"Course Empty hai Sir pls Enter !!"
            })
        }
        if(!skills){
            res.status(400).json({
                message:"Agar Koi skills hai to daldo !!"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const student=await Student.create({
            name,
            email,
            password:hashedPassword,
            course,
            skills
        });
        res.status(200).json({
            success:true,
            message:"Sab kuch sahi hai Sir !!"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
       
}



export const login=async(req,res)=>{
    try {

        const{email,password}=req.body;

        if(!email){
            return res.status(400).json({
                message:"Email Enter Karo !!"
            })
        }

        const existUser=await Student.findOne({email});
        if(!existUser){
            return res.status(400).json({
                message:"User Not Exist Pls Register First !!"
            })
        }


        const checkPass=await bcrypt.compare(password,existUser.password);

        if(!checkPass){
            return res.status(400).json({
                message:"Password Galat Hai Sir Sahi Karo !!"
            })
        }

        let token=jwt.sign({email:email,id:existUser._id},"This is a secret Key",{expiresIn:'2d'})
        return res.status(200).json({
            success:true,
            message:"Token Generated Sucessfully",
            token:token
        })
        
    } catch (error) {
        return res.status(400).json({
            message:error
        })
    }
}