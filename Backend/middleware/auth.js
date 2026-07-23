import jwt from 'jsonwebtoken'
export const verifyToken=(req,res)=>{
    try {
        let token=req.headers.authorization
        console.log(token)

        let authToken=token.split(' ')[1];

        let decodeToken=jwt.verify(authToken,"This is a secret Key");
        console.log(decodeToken);
        req.user=decodeToken;
        next()
    } catch (error) {
        return res.status(500).json({
            sucess:false,
            message:error.message
        })
    }
}