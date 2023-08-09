import mongoose, { mongo } from "mongoose"
export const connection=(req,res)=>{
    mongoose.connect(process.env.mongodburl,{dbName:"youtube"}).then(()=>{
        console.log("database connected")
    }).catch((err)=>{
        console.log(err);
    })
}