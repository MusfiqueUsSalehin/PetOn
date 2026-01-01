import mongoose from 'mongoose';



const bookingSchema = new mongoose.Schema({
    pet: { type: mongoose.Schema.Types.ObjectId, ref: "Pet", required: true }, // from Pet model
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // from User model
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // from User model
    pickupDate: { type: Date, required: true },
    returnDate: { type: Date, required: true },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
    price: { type: Number, required: true },
}, { timestamps: true });


const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;