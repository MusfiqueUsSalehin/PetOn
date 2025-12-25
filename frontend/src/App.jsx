import React from 'react'
import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Pets from './pages/Pets';
import PetDetails from './pages/PetDetails';
import Footer from './components/Footer';

import MyBookings from './pages/MyBookings';


export const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith('/owner');


  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin}/>}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pets' element={<Pets />} />
        <Route path='/petDetails/:id' element={<PetDetails />} />
        <Route path='/my-bookings' element={<MyBookings />} />
      </Routes>

      {!isOwnerPath && <Footer />}

      




    </>
  )
}

export default App
