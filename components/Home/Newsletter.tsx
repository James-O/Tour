import { Mail } from 'lucide-react'
import React from 'react'

export default function Newsletter() {
  return (
    <div className='py-20 bg-black text-white'>
        <div className='w-[90%] xl:w-[80%] mx-auto'>
            <Mail className='text-white mx-auto mb-4' size={40}/>
            <h2 className='text-3xl font-bold text-center mb-4'>Your Travel Journey Starts Here</h2>
            <p className='text-gray-300 text-center mb-8'>Sign up and we will bring the best travel deals and updates directly to your inbox.</p>
            <div className='flex justify-center'>
                <input type="email" placeholder="Enter your email" className='w-full bg-white text-black md:w-1/2 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-white'/>
                <button className='bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 transition-colors duration-300'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}
