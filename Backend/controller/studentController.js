import Student from '../models/student.js'

export const register=async(req,res)=>{
    try {
        const student=await Student.create(req.body);
        res.send(student);
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
    
    
} 