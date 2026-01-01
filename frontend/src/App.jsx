import React from 'react'
import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Pets from './pages/Pets';
import PetDetails from './pages/PetDetails';
import Footer from './components/Footer';
import MyBookings from './pages/MyBookings';



import Layout from './pages/owner/Layout';
import Dashboard from './pages/owner/Dashboard';
import AddPet from './pages/owner/AddPet';
import ManageBookings from './pages/owner/ManageBookings';
import ManagePets from './pages/owner/ManagePets';
import Login from './components/Login';

import {Toaster} from 'react-hot-toast';


export const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith('/owner');


  return (
    <>
      <Toaster position='top-center' />
      {showLogin && <Login setShowLogin={setShowLogin}/>}
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin}/>}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pets' element={<Pets />} />
        <Route path='/petDetails/:id' element={<PetDetails />} />
        <Route path='/my-bookings' element={<MyBookings />} />

        

        <Route path='/owner' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='add-pet' element={<AddPet />} />
          <Route path='manage-bookings' element={<ManageBookings />} />
          <Route path='manage-pets' element={<ManagePets />} />
        </Route>
      </Routes>

      {!isOwnerPath && <Footer />}

      




    </>
  )
}

export default App
