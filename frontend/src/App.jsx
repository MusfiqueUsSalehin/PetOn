import React from 'react'
import { Navbar } from './components/Navbar'
import Hero from './components/Hero'
import FeaturedPets from './components/FeaturedPets'
import JoinCommunity from './components/JoinCommunity'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export const App = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <Hero />
      <FeaturedPets />
      <JoinCommunity />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
