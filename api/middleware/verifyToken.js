import jwt from "jsonwebtoken"
import dotenv from "dotenv"

export const verifyToken= (req,res,next)=>{
    const token=req.cookies.token; 
    if(!token) res.status(401).json({message:"Not Authenticated"})
    
     jwt.verify(token, process.env.JWT_SECRET_KEY, async(err,payload)=>{
        if(err) return  res.status(403).json({message:"Token is Invalid"});

        req.userId=payload.id;

        next();
     }); 
}
