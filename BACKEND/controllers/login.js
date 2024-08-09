import User from "../model/User.js";
import bcrypt from "bcrypt";

import jsonwebtoken from "jsonwebtoken";
const handleLogin = async (req, res) => {
    const { username, password } = req.body;

    try {
        
        const user = await User.findOne({ username }).exec();
        if (!user) return res.status(400).json("Invalid username or password");

       
        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(400).json("Invalid username or password");
        const access_token = await jsonwebtoken.sign(
            
            {username: user.username},
            process.env.ACCESS_SECRET,
            { expiresIn: "30s" }
        )
        res.status(200).json(access_token);
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json("Internal server error");
    }
};

export default handleLogin;
