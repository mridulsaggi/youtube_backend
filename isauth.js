import { utubeuser } from "./schema.js";
import jwt from "jsonwebtoken";
export const isauth=async(req,res,next)=>{
    const {token}=req.cookies
    if(token){
        // const id=token._id
        const decodedid=await jwt.verify(token,process.env.secretkey);
        req.user=await utubeuser.findById(decodedid);
        next();
    }
    else{
        res.json({
            sucess:false,
            message:"please login first",
        })
    }
    // console.log(req.cookies);
}