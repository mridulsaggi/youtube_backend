import { utubeuser } from "./schema.js";
import bcrypt from "bcrypt";
import mongoose from "mongoose"
import jwt from "jsonwebtoken"
export const login = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body)
    const a = await utubeuser.findOne({ email: email });
    if (a) {

        const match = await bcrypt.compare(password, a.password)
        console.log(match);
        if (match) {
            const id = jwt.sign({ _id: a._id }, process.env.secretkey)
            res.cookie("token", id, {
                httpOnly: true,
                samesite: "none",
                secure: true,
                expires: new Date(Date.now() + 30 * 1000 * 60)
            })
            res.json({
                success: true,
                message: `welcome back ${a.name}`
            })
        }
        else {
            res.json({
                success: false,
                message: "incorrect password"
            })
        }
    }
    else {
        res.json({
            success: false,
            message: "user doesnt exist please register"
        })
    }
}