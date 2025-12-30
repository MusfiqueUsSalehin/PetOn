import User from '../models/user.js';

//Api to change user role to owner
export const changeRoleToOwner = async (req, res) => { 
    try {
        const {_id} = req.user;
        await User.findByIdAndUpdate(_id, { role: 'owner' });
        res.json({ success:true, message: 'Role updated to owner successfully.' });
    } catch (error) {
        console.error(error.message);
        res.json({ success:false, message: 'Server Error' });
    }
};


//Api to list pets

export const listPet = async (req, res) => {
    try {
        const {_id} = req.user;
        let pet = json.parese(req.body.petData);
        const imageFile = req.file;
    } 
    catch (error) {
        console.error(error.message);
        res.json({ success:false, message: 'Server Error' });
    }
};

