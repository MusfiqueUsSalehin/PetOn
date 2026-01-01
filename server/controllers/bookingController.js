import Booking from "../models/booking.js";
import Pet from "../models/pet.js";



//check availability of a pet at given date
export async function checkAvailability(pet, pickupDate, returnDate) {
  const bookings = await Booking.find({
    pet,
    pickupDate: { $lte: returnDate },
    returnDate: { $gte: pickupDate },
  });
  return bookings.length === 0;
}



// Find avilabilty of pet for the given date and location
export async function checkAvailabilityOfPet(req, res) {
  try {
    const { location, pickupDate, returnDate } = req.body;

    // fetch all available pets for the given location
    const pets = await Pet.find({ location, isAvailable: true });

    // check car availability for the given date-range using PROMISE
    const availablePetsPromise = pets.map(async (pet) => {
      const available = await checkAvailability(
        pet._id,
        pickupDate,
        returnDate
      );
      return { ...pet._doc, isAvailable: available };
    });


    let availablePets = await Promise.all(availablePetsPromise);
    availablePets = availablePets.filter((pet) => pet.isAvailable === true);
    //availablePets = availablePets.filter((pet) => pet.isAvailable === true);
    res.json({
      success: true,
      message: "Fetched list of available pets",
      availablePets,
    });
  } 
  catch (error) {
        console.error(error.message);
        res.json({ success:false, message: 'Server Error' });
    }
}


// API to create booking
export async function createBooking(req, res) {
  try {
    const { _id } = req.user;
    const { pet, pickupDate, returnDate } = req.body;

    const isAvailable = await checkAvailability(pet, pickupDate, returnDate);
    if (!isAvailable) {
      return res.json({
        success: false,
        message: "Pet is UNAVAILABLE ",
      });
    }

    // If available, add pet-data
    const petData = await Pet.findById(pet);

    // Calculate price based on pickup and return dates
    const picked = new Date(pickupDate);
    const returned = new Date(returnDate);
    const noOfDays = Math.ceil((returned - picked) / (1000 * 60 * 60 * 24));
    const price = petData.pricePerDay * noOfDays;

    // store the data in DB
    await Booking.create({
      pet,
      owner: petData.owner,
      user: _id,
      pickupDate,
      returnDate,
      price,
    });

    res.json({ success: true, message: "Booking created" });
  } 
  
  catch (error) {
        console.error(error.message);
        res.json({ success:false, message: 'Server Error' });
    }
}



// API to list user-bookings
export async function getUserBookings(req, res) {
  try {
    const { _id } = req.user;
    const bookings = await Booking.find({ user: _id }).populate("pet").sort({ createdAt: -1 });
    res.json({ success: true, message: "User Bookings fetched ", bookings });
  } 
  
  catch (error) {
        console.error(error.message);
        res.json({ success:false, message: 'Server Error' });
    }
}


// API to list owner-bookings
export async function getOwnerBookings(req, res) {
  try {
    if (req.user.role !== "owner") {
      return res.json({ success: false, message: "UNAUTHORIZED!" });
    }

    const bookings = await Booking.find({ owner: req.user._id }).populate("pet user").select("-user.password").sort({ createdAt: -1 });

    res.json({ success: true, message: "Owner Bookings fetched", bookings });
  } 
  
  catch (error) {
        console.error(error.message);
        res.json({ success:false, message: 'Server Error' });
    }
}


// API to change booking-status by owner
export async function changeBookingStatus(req, res) {
  try {
    const { _id } = req.user;
    const { bookingId, status } = req.body;
    const booking = await Booking.findById(bookingId);

    if (booking.owner.toString() !== _id.toString()) {
      // if owner isn't same
      return res.json({ success: false, message: "UNAUTHORIZED!" });
    }

    booking.status = status;
    await booking.save();
    res.json({ success: true, message: "Booking-Status updated" });
  } 
  
  catch (error) {
        console.error(error.message);
        res.json({ success:false, message: 'Server Error' });
    }
}