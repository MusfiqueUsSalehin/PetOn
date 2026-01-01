import express from 'express';
import { changeBookingStatus, checkAvailabilityOfPet, createBooking, getOwnerBookings, getUserBookings } from '../controllers/bookingController.js';

const bookingRouter = express.Router();

bookingRouter.post('/change-booking-status', changeBookingStatus);
bookingRouter.post('/create-booking', createBooking);
bookingRouter.get('/user-bookings', getUserBookings);
bookingRouter.get('/owner-bookings', getOwnerBookings);
bookingRouter.post('/check-availability', checkAvailabilityOfPet);

export default bookingRouter;