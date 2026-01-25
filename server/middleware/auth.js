import jwt from "jsonwebtoken";
import User from "../models/user.js";



export const protect = async (req, res, next) => {

    const token = req.headers.authorization;
    if (!token) {
        return res.json({ success: false, message: "please login first" });

    }
    try {
        const decoded = jwt.decode(token, process.env.JWT_SECRET);

        if (!decoded) {
            return  res.json({ success: false, message: "token is not valid" });
        }
        req.user = await User.findById(decoded).select('-password');
        next();
        

    } 

   
    catch (error) {
        
        res.json({ success: false, message: "token is not valid" });
    }   
}

