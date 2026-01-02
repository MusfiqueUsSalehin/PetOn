import express from 'express';
import { changeBookingStatus, checkAvailabilityOfPet, createBooking, getOwnerBookings, getUserBookings } from '../controllers/bookingController.js';
import { protect } from '../middleware/auth.js';

const bookingRouter = express.Router();

bookingRouter.post('/change-booking-status', protect, changeBookingStatus);
bookingRouter.post('/create-booking', protect, createBooking);
bookingRouter.get('/user-bookings', protect, getUserBookings);
bookingRouter.get('/owner-bookings', protect, getOwnerBookings);
bookingRouter.post('/check-availability', checkAvailabilityOfPet);

export default bookingRouter;