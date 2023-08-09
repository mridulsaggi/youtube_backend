import mongoose, { mongo } from "mongoose";
const userschema=mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true
    }
})
const dataschema=mongoose.Schema({
    name1:{
        type:String,
        require:true
    },
    name2:{
        type:String,
        require:true
    },
    name3:{
        type:String,
        require:true
    },
    name4:{
        type:String,
        require:true
    },
    name5:{
        type:String,
        require:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"utubeuser"
    }
})
export const utubeuser=new mongoose.model("user",userschema);
export const utubedata=new mongoose.model("utubedata",dataschema);
