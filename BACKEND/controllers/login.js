import User from "../model/User.js";
import bcrypt from "bcrypt";

const handleLogin = async (req, res) => {
    const { username, password } = req.body;

    try {
        
        const user = await User.findOne({ username }).exec();
        if (!user) return res.status(400).json("Invalid username or password");

       
        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(400).json("Invalid username or password");

        
        res.status(200).json("Login successful");
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json("Internal server error");
    }
};

export default handleLogin;
