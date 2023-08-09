
export const logout=(req,res)=>{
    res.cookie("token","",{
        httpOnly:true,
        samesite:"none",
        secure:true,
        expires:new Date(Date.now())
    })
    res.json({
        success:true,
        message:"user logged out"
    })
}