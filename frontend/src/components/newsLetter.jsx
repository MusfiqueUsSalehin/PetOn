import React from 'react'
import { useState } from 'react'
import axios from 'axios';

import toast from 'react-hot-toast';




const NewsLetter = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null) 

  const sendEmail = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      
      const {data} = await axios.post('/api/newsletter/subscribe', {userEmail: email});

      
      console.log('Server Response:', data.message);
      setStatus('success')
      setEmail('') // Clear input

    } catch (err) {
      toast.error(err.message)
      setStatus('error')
    }
  }
  return (
     <div
     
      className="flex flex-col items-center justify-center text-center text-[#FFD369] space-y-2 max-md:px-4 my-10 mb-40">
      <h1
        
        className="md:text-4xl text-2xl font-semibold">
        Never Miss a Deal!
      </h1>
      <p
        
        className="md:text-lg text-gray-500/90 pb-8">
        Subscribe to get the latest offers, new arrivals, and exclusive
        discounts.
      </p>
      <form
        onSubmit={sendEmail}
        
        className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12">
        <input
          className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
          type="text"
          placeholder="Enter your email id"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className={`md:px-12 px-8 h-full text-white transition-all cursor-pointer rounded-md rounded-l-none ${
            status === 'sending'? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'}`}>
          {status === 'sending' ? 'Sending...' : 'Subscribe'}
        </button>
      </form>

      {/* UI Feedback Messages */}
      {status === 'success' && (
        <p className="text-green-600 mt-4 font-medium">
          ✅ Success! Check your inbox.
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-500 mt-4 font-medium">
          ❌ Something went wrong. Please try again.
        </p>
      )}
    </div>
  )
}

export default NewsLetter;