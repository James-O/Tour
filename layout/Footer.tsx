import { Facebook, Twitter } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <div className='py-6 border-t border-gray-200 mt-10'>
        <div className='mx-auto w-[90%] xl:w-[80%] text-start  grid md:grid-cols-2 lg:grid-cols-4 gap-4 py-6'>
            <div className='space-y-5'>
                <h1 className='font-bold text-lg'>Company</h1>
                <p className='font-medium text-gray-800 text-sm cursor-pointer hover:text-blue-950'>About Us</p>
                <p className='font-medium text-gray-800 text-sm cursor-pointer hover:text-blue-950'>Careers</p>
                <p className='font-medium text-gray-800 text-sm cursor-pointer hover:text-blue-950'>Blogs</p>
                <p className='font-medium text-gray-800 text-sm cursor-pointer hover:text-blue-950'>Gift Cards</p>
                <p className='font-medium text-gray-800 text-sm cursor-pointer hover:text-blue-950'>Magazine</p>
            </div>
            <div className='space-y-5'>
                <h1 className='font-bold text-lg'>Support</h1>
                <p className='font-medium text-gray-800 text-sm cursor-pointer hover:text-blue-950'>Contact</p>
                <p className='font-medium text-gray-800 text-sm cursor-pointer hover:text-blue-950'>Legal Notice</p>
                <p className='font-medium text-gray-800 text-sm cursor-pointer hover:text-blue-950'>Privacy Policy</p>
                <p className='font-medium text-gray-800 text-sm cursor-pointer hover:text-blue-950'>Terms & Conditions</p>
                <p className='font-medium text-gray-800 text-sm cursor-pointer hover:text-blue-950'>Sitemap</p>
            </div>
            <div className='space-y-5'>
                <h1 className='font-bold text-lg'>Other Services</h1>
                <p className='font-medium text-gray-800 text-sm cursor-pointer hover:text-blue-950'>Car Hire</p>
                <p className='font-medium text-gray-800 text-sm cursor-pointer hover:text-blue-950'>Activity Finder</p>
                <p className='font-medium text-gray-800 text-sm cursor-pointer hover:text-blue-950'>Tour Lists</p>
                <p className='font-medium text-gray-800 text-sm cursor-pointer hover:text-blue-950'>Flight Finders</p>
                <p className='font-medium text-gray-800 text-sm cursor-pointer hover:text-blue-950'>Travel Agents</p>
            </div>
            <div>
                <h1 className='font-bold text-lg'>Contact us</h1>
                <div className='mt-6'>
                   <h1 className='text-sm text-gray-600'>Our mobile number</h1>
                   <h1 className='text-base font-bold text-blue-950 mt-1'>123-456-7890</h1>
                </div>
                <div className='mt-6'>
                   <h1 className='text-sm text-gray-600'>Our email address</h1>
                   <h1 className='text-base font-bold text-blue-950 mt-1'>contact@traveltour.com</h1>
                </div>
            </div>
        </div>
        <div className='w-[80%] mt-4 border-t border-gray-200 mx-auto md:flex md:justify-between items-center'>
            <p className='text-center text-gray-500 text-sm mt-5'>© 2026 Travel Tour. All rights reserved.</p>
            <div className='flex items-center text-gray-500 text-sm'>
                <p>Socials: </p>
                <span className='flex items-center justify-center gap-5 mt-2'>
                    <Facebook/>
                    <Twitter/>
                </span>
            </div>
        </div>
    </div>
  )
}
