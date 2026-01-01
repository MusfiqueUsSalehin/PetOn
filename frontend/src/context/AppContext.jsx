import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';



axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;


export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const navigate = useNavigate();
    const currency = import.meta.env.VITE_CURRENCY || '৳';

    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const [isOwner, setIsOwner] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [pickupDate, setPickupDate] = useState('');
    const [returnDate, setReturnDate] = useState('');


    const [pets, setPets] = useState([]);



    //check if user is logged in
    async function fetchUser() {
    try {
      const { data } = await axios.get("/api/user/data");
      if (data.success) {
        setUser(data.user);
        setIsOwner(data.user.role === "owner");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  }




  // f(x) to fetch all pets from the server
  async function fetchPets() {
    try {
      const { data } = await axios.get("/api/user/pets");
      data.success ? setPets(data.pets) : toast.error(data.message);
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  }


  //function to logout the user
  async function logoutUser() {

    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    setIsOwner(false);
    axios.defaults.headers.common["Authorization"] = '';
    toast.success("You have been logged out");
  }




   // effect to retrieve token from local-storage
  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
    fetchPets();
  }, []);


  // effect to fetch user-data when token is available
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      fetchUser();
    }
  }, [token]);



    const value = {navigate, 
      currency,
      user, setUser,
      isOwner, setIsOwner,
      token, setToken,
      showLogin, setShowLogin,
      pickupDate, setPickupDate,
      returnDate, setReturnDate,
      pets, setPets,
      logoutUser,
      fetchPets,
      fetchUser,
      };

    return <AppContext.Provider value={value} >
        {children}
    </AppContext.Provider>


}

export const useAppContext = () => {
    return useContext(AppContext);
}