import express from 'express';
import { protect } from '../middleware/auth.js';
import { changeRoleToOwner, deletePet, getDashboardData, getOwnerPets, toggleAvailability, updateUserImage } from '../controllers/ownerController.js';
import upload from '../middleware/multer.js';
import { listPet } from '../controllers/ownerController.js';

const ownerRouter = express.Router();

ownerRouter.post('/change-role', protect, changeRoleToOwner);
ownerRouter.post('/list-pet',protect, upload.single('image'), listPet);
ownerRouter.get('/pets', protect, getOwnerPets);
ownerRouter.post('/toggle-pet', protect, toggleAvailability);
ownerRouter.post('/delete-pet', protect, deletePet);


ownerRouter.get('/dashboard', protect, getDashboardData);
ownerRouter.post('/update-image', protect, upload.single('image'), updateUserImage );

export default ownerRouter;