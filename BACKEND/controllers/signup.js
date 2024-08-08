import User from "../model/User.js"
import bcrypt from "bcrypt"
const handleSignup=async(req,res)=>{
    const {username,password,email,country,gender,tel} = req.body
    console.log(country)
    const findUser = await User.findOne({username:username}).exec()
    if(findUser) return res.status(400).json("User already exist")
    const findEmail = await User.findOne({email:email}).exec()
    if(findEmail) return res.status(400).json("email already exist")
    const hashPwd = await bcrypt.hash(password,10)
    const result = await User.create({
        username:username,
        password:hashPwd,
        email: email,
        gender:gender,
        tel:tel
    })
    res.status(200).json("User Created Successfully")
}

export default handleSignup