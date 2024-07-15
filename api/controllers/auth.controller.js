import bcrypt from 'bcrypt'
import prisma from '../lib/prisma.js';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';

export const register = async(req,res)=>{
    // db operations
    const {username,email, password}=req.body;
 try{
    // Hash the password 
    const hashedPassoword = await bcrypt.hash(password,10); 
    // save the entry to database 
    const newUser= await prisma.user.create({
        data:{
            username,
            email,
            password:hashedPassoword, 
            createdAt: new Date()
        },
     })
        console.log(newUser)

        // success 
        res.status(201).json({message:"User created successfully"})
    } catch(err){
        console.log(err)
        res.status(500).json({message:"Failed to create user!"})
    }
}

// Login
export const login = async (req,res)=>{
    // db operations
    const {username, password}=req.body; 
    try{
        // CHECK IF USER EXIST OR NOT IN USER MODEL
        const user= await prisma.user.findUnique({
            where:{username}
        })
        // IF USER NOT PRESENT
        if(!user) res.status(400).json({message:"Invalid Credentials !"})

        // CHECK IF THE PASSWORD IS CORRECT
       const isPassword= await bcrypt.compare(password,user.password); 
       if(!isPassword) res.status(400).json({message:"Invalid Credentials !"})
        
     
        // GENERATE COOKIE TOKEN AND SENT TO THE USER
        const age=1000*60*60*24*7;
        const token= jwt.sign({
            id:user.id, // user information
            isAdmin:false,
        }, process.env.JWT_SECRET_KEY, {
            expiresIn: age
        })   

        const {password: userPassword, ...userInfo}=user;
        res.cookie("token", token,{
            httpOnly:true,
            // secure:ture make it as true while deployment 
            maxAge:age
        }).status(200).json(userInfo)
    }catch(err){
        console.log(err)
        res.status(500).json({message:"Failed to login!"})
    }
}


// Logout 
export const logout = async (req,res)=>{
    // db operations
    res.clearCookie("token").status(200).json({message:"Logout successfully"});  
}