import { utubedata } from "./schema.js";

export const getnames=async(req,res)=>{
    const {_id,name,email} =req.user;
    const allnames=await utubedata.find({user:_id});
    res.json({
        success:true,
        allnames
    })
}