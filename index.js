import express from "express";
import cp from "cookie-parser"
import jwt from "jsonwebtoken"
import { connection } from "./connection.js";
import path from "path";
import { config } from "dotenv";
import { register } from "./register.js";
import { isauth } from "./isauth.js";
import { names } from "./names.js";
import { logout } from "./logout.js";
import { login } from "./login.js";
import { getnames } from "./getnames.js";
import cors from "cors"
const app=express();
app.use(cp());
config({path:"./config.env"})
app.use(express.json());
app.use(express.urlencoded({extended:true}));
connection();
app.use(cors({
    origin:process.env.frontendurl,
    methods:["GET","PUT","POST","DELETE"],
    credentials:true
}))
app.post("/login",login)
app.post("/register",register)
// app.get("/",(req,res)=>{
//     res.send("haa nji")
// })
app.post("/names",isauth,names)
app.get("/logout",logout)
app.get("/getnames",isauth,getnames)
app.listen(2000,(req,res)=>{
    console.log("server running on port no 2000")
})
