import jwt from "jsonwebtoken";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import Pet from "../models/pet.js";




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

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "user not found" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.json({ success: false, message: "invalid password" });
        }
        const token = generateToken(user._id.toString());
        res.json({ success: true, token });
    }
    catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message }); 
    }

}



// get user data using jwt token

export const getUserData = async (req, res) => {
    try {
        const {user} = req;

        res.json({ success: true, user });
    }
    catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message }); 

    }
}


// API to get pet list

export const getPets = async (req, res) => {
    try {
        const pets = await Pet.find({isAvailable: true});


        res.json({ success: true, pets });
    }
    catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message }); 

    }
}