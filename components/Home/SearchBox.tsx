import { Calendar, Map, UsersIcon } from 'lucide-react'
import React from 'react'

export default function SearchBox() {
  return (
    <div className='bg-white rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-8 mt-4 sm:mt-12 w-[95%] sm:w-[60%]'>
        {/* Ist search input */}
        <div className='flex items-center space-x-6'>
            <Map className='fill-blue-700  w-8 h-8'/>
            <div>
                <p className='text-lg font-medium mb-[0.2rem]'>Location</p>
                <input 
                  type="text" 
                  placeholder='Where are you going?' 
                  className='outline-none border-none placeholder:text-gray-600 w-full'/>             
            </div>
        </div>
        {/* 2nd search input */}
        <div className='flex items-center space-x-6'>
            <Calendar className='fill-blue-700 w-10 h-10'/>
            <div>
                <p className='text-lg font-medium mb-[0.2rem]'>Start Date</p>
                <input
                  type="date" 
                  className='outline-none border-none placeholder:text-gray-600'/>             
            </div>
        </div>
        {/* 3rd search input */}
        <div className='flex items-center space-x-6'>
            <Calendar className='fill-blue-700  w-10 h-10'/>
            <div>
                <p className='text-lg font-medium mb-[0.2rem]'>End Date</p>
                <input
                  type="date" 
                  className='outline-none border-none placeholder:text-gray-600'/>             
            </div>
        </div>
        <div className='flex items-center space-x-6'>
            <UsersIcon className='fill-blue-700 w-6 h-6'/>
            <div>
                <p className='text-lg font-medium mb-[0.2rem]'>Guests</p>
                <p>1 Guest 1 Room</p>
            </div>
        </div>
    </div>
  )
}
