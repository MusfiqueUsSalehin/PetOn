import mongoose from 'mongoose';

const connectDB = async () => {
    try {

        mongoose.connection.on('connected', () => console.log('MongoDB connected successfully'));
        await mongoose.connect(`${process.env.MONGODB_URI}/petOn2`) 
        
    } catch (error) {

        console.log(error.message);
        
    }

};

export default connectDB;