import imagekit from '../configs/imageKit.js';
import User from '../models/user.js';
import fs from 'fs';
import Pet from '../models/pet.js';
import Booking from '../models/booking.js';




//Api to change user role to owner
export const changeRoleToOwner = async (req, res) => { 
    try {
        const {_id} = req.user;
        await User.findByIdAndUpdate(_id, { role: 'owner' });
        res.json({ success:true, message: 'Role updated to owner successfully.' });
    } catch (error) {
        console.error(error.message);
        res.json({ success:false, message: ' Please Login first' });
    }
};


//Api to list pets

export const listPet = async (req, res) => {
    try {
        const {_id} = req.user;
        let pet = JSON.parse(req.body.petData);
        const imageFile = req.file;

        //upload image to imagekit
        const fileBuffer = fs.readFileSync(imageFile.path);
        const response = await imagekit.upload({
            file : fileBuffer,
            fileName : imageFile.originalname,
            folder : '/pets'
        })

        //optmizethrough imagekit url parameters
        var optimizedImageURL = imagekit.url({
            path: response.filePath,
            transformation: [
            {
              width: 1280, // Width resizing
             },
            {
                quality: "auto", // Auto Compression
            },
            {
                format: "webp", // Convert to modern-format
            }],
            });

            const image = optimizedImageURL;
            await Pet.create({
                ...pet,
                image,
                owner: _id
            });

            res.json({ success:true, message: 'Pet listed successfully.' });




    } 
    catch (error) {
        console.error(error.message);
        res.json({ success:false, message: error.message });
    }
};


//API to access list all pets of an owner
export async function getOwnerPets(req, res) {
  try {
    const { _id } = req.user;
    const pets = await Pet.find({ owner: _id });
    res.json({success: true, pets});
  } 
  catch (error) {
        console.error(error.message);
        res.json({ success:false, message: 'Server Error' });
    }
  
}



//API to toggle availability of a pet

export async function toggleAvailability(req, res) {
  try {
    const { _id } = req.user;
    const { petId } = req.body;
    const pet = await Pet.findById(petId);

    // checking whether pet belongs to the user
    if (pet.owner.toString() !== _id.toString()) {
      return res.json({ success: false, message: "Unauthorized!" });
    }

    pet.isAvailable = !pet.isAvailable;
    await pet.save();

    res.json({
      success: true,
      message: "Availability toggled",
    });
  } 
  catch (error) {
        console.error(error.message);
        res.json({ success:false, message: 'Server Error' });
    }
}



//API to delete a pet listed by owner
export async function deletePet(req, res) {
  const { _id } = req.user;
  const { petId } = req.body;
  const pet = await Pet.findById(petId);

  // checking whether pet belongs to the user
  if (pet.owner.toString() !== _id.toString()) {
    return res.json({ success: false, message: 'Unauthorized!' });
  }

  pet.owner = null;
  pet.isAvailable = false;


  await pet.save();

  res.json({
    success: true,
    message: "Pet removed",
  });

  try {
  } 
  catch (error) {
        console.error(error.message);
        res.json({ success:false, message: 'Server Error' });
    }
}


//API to get dashboard data

export async function getDashboardData(req, res) {
  try {
    const { _id, role } = req.user;

    // check role
    if (role !== "owner") {
      return res.json({
        success: false,
        message: 'Unauthorized!',
      });
    }

    const pets = await Pet.find({ owner: _id });


    const bookings = await Booking.find({ owner: _id })
      .populate("pet")
      .sort({ createdAt: -1 });

    const pendingBookings = await Booking.find({
      owner: _id,
      status: "pending",
    });

    const completedBookings = await Booking.find({
      owner: _id,
      status: "confirmed",
    });

    // calculate monthly revenue from bookings where status === "confirmed"
    const monthlyRevenue = bookings.slice().filter((booking) => booking.status === "confirmed").reduce((acc, booking) => acc + booking.price, 0);

    // finally, create dashboard-data obj{}
    const dashboardData = {
      totalPets: pets.length,
      totalBookings: bookings.length,
      pendingBookings: pendingBookings.length,
      completedBookings: completedBookings.length,
      recentBookings: bookings.slice(0, 3),
      monthlyRevenue,
    };

    res.json({
      success: true,
      message: "Fetched Dashboard Data",
      dashboardData,
    });

    } 
    catch (error) {
        console.error(error.message);
        res.json({ success:false, message: 'Server Error' });
    }

}




// API to update user-image
export async function updateUserImage(req, res) {
  try {
    const { _id } = req.user;

    const imageFile = req.file;

    // Upload image to ImageKit
    const fileBuffer = fs.readFileSync(imageFile.path);
    const resp = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/users",
    });

    // optimization
    // For URL Generation, works for both images and videos
    const optimizedImageURL = imagekit.url({
      path: resp.filePath,
      transformation: [
        {
          width: 400, // Width resizing
        },
        {
          quality: "auto", // Auto Compression
        },
        {
          format: "webp", // Convert to modern-format
        },
      ],
    });

    const image = optimizedImageURL;

    await User.findByIdAndUpdate(_id, { image });
    res.json({ success: true, message: "Image updated" });
  } 
  
  catch (error) {
        console.error(error.message);
        res.json({ success:false, message: 'Server Error' });
    }
}

