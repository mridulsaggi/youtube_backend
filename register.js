import { utubeuser } from "./schema.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
export const register = async (req, res) => {
    const { name, email, password } = req.body;
    const b=await utubeuser.findOne({email:email});
    if(b){
        res.json({
            success:false,
            message:"email already registered"
        })
    }
    const hashedpassword = await bcrypt.hash(password,12);
    const user = await utubeuser.create({ name, email, password: hashedpassword })
    // const id=user._id;
    const id= jwt.sign({_id:user._id},process.env.secretkey);
    console.log("record added");
    res.cookie("token",id,{
        httpOnly:true,
        samesite:"none",
        secure:true,
        expires:new Date(Date.now()+30*60*1000),
    })
    res.json({
        success: true,
        message: "user created"
    })
}