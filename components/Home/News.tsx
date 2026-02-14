import React from 'react'
import SectionHeader from '../Helper/SectionHeader'

export default function News() {
  return (
    <div className='py-20 bg-white'>
        <SectionHeader
            heading="Exiting Travel News for you"
            subHeading="Stay updated with the latest travel news and tips from around the world."
        />
        <div className='w-[90%] xl:w-[80%] mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {/* news card */}
            <div className='rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300'>
                <img src="/images/n1.jpg" alt="News 1" className='w-full h-48 object-cover'/>
                <div className='p-3'>
                    <h3 className='text-xl font-semibold mb-2'>Top 10 Travel Destinations for 2024</h3>
                    <p className='text-gray-600 mb-4'>Discover the must-visit places for your next adventure in 2024.</p>
                    <button className='text-blue-800 font-medium hover:underline'>2 February 2026</button>
                </div>
            </div>
            <div className='rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300'>
                <img src="/images/n2.jpg" alt="News 2" className='w-full h-48 object-cover'/>
                <div className='p-3'>
                    <h3 className='text-xl font-semibold mb-2'>Travel Safety Tips for Solo Travelers</h3>
                    <p className='text-gray-600 mb-4'>Essential tips to ensure a safe and enjoyable solo travel experience.</p>
                    <button className='text-blue-800 font-medium hover:underline'>4 February 2026</button>
                </div>
            </div>
            <div className='rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300'>
                <img src="/images/n3.jpg" alt="News 3" className='w-full h-48 object-cover'/>
                <div className='p-3'>
                    <h3 className='text-xl font-semibold mb-2'>How to Travel Sustainably in 2024</h3>
                    <p className='text-gray-600 mb-4'>Learn how to minimize your environmental impact while exploring the world.</p>
                    <button className='text-blue-800 font-medium hover:underline'>3 February 2026</button>
                </div>
            </div>
            <div className='rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300'>
                <img src="/images/n4.jpg" alt="News 3" className='w-full h-48 object-cover'/>
                <div className='p-3'>
                    <h3 className='text-xl font-semibold mb-2'>Top 10 places to visit in Canada in 2026</h3>
                    <p className='text-gray-600 mb-4'>Learn how to minimize your environmental impact while exploring Canada in 2026.</p>
                    <button className='text-blue-800 font-medium hover:underline'>6 February 2026</button>
                </div>
            </div>
        </div>
    </div>
  )
}
