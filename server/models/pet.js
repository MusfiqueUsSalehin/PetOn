import mongoose from 'mongoose';



const petSchema = new mongoose.Schema({
    owner : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    species: { type: String, required: true },
    breed: { type: String, required: true },
    image: { type: String, default: "" },
    age: { type: Number, required: true },
    category: { type: String, required: true },
    behaviour: { type: String, required: true },
    diet: { type: String, required: true },
    pricePerDay: { type: Number, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    isAvailable: { type: Boolean, default: true },
    trained: { type: String, required: true },
    active: { type: String, required: true },
}, { timestamps: true });


const Pet = mongoose.model('Pet', petSchema);

export default Pet;