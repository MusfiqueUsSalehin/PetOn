import "dotenv/config";
import cors from "cors";
import express from "express";
import { connect } from "mongoose";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import ownerRouter from "./routes/ownerRoutes.js";


// Initialize express app
const app = express();

// Connect to database
await connectDB();

//middleware
app.use(cors());
app.use(express.json());


app.get('/', (req,res)=>res.send('server is running!!'))
app.use('/api/users', userRouter);
app.use('/api/owner', ownerRouter);

const PORT = process.env.PORT || 3000 ;

app.listen(PORT, ()=> console.log(`server running on port ${PORT}`))