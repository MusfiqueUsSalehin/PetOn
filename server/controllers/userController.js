import jwt from "jsonwebtoken";
import User from "../models/user";
import bcrypt from "bcrypt";




const generateToken = (userId) => {
    const payload = userId;
    return jwt.sign(payload, process.env.JWT_SECRET);

}


// Register User
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password || password.length < 8) {

            return res.json({ success: false, message: "fill all fields correctly" });

        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ success: false, message: "user already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ 
            name, 
            email, 
            password: hashedPassword 
        });

        const token = generateToken(user._id.toString());
        res.json({ success: true, token});


    }
    catch (error) {

        console.log(error.message);
        res.json({ success: false, message: error.message });

    }

}



//Login User

