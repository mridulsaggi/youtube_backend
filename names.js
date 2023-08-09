import { utubedata } from "./schema.js";

export const names=async (req,res)=>{
    const {name,email,_id}=req.user;
    const {name1,name2,name3,name4,name5}=req.body;
    const a= await utubedata.create({name1,name2,name3,name4,name5,user:_id})
    res.json({
        message:`hello ji welcome ${name}`
    })
}