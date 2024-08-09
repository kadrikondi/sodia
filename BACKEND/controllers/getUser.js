import User from "../model/User.js"
const getAllUser = async (req,res)=>{
    const allusers = await User.find();
    res.status(200).json(allusers);
} 
export default getAllUser