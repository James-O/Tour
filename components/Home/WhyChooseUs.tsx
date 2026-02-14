import React from 'react'
import SectionHeader from '../Helper/SectionHeader'

export default function WhyChooseUs() {
  return (
    <div className='pb-20'>
        <SectionHeader
            heading='Why Choose Us'
            subHeading="We're the best in the business"
        />
        <div className='mt-14 w-[80%] mx-auto'>
            {/* Why Choose Us content */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='border border-gray-200 rounded-lg p-6 text-center shadow-lg'>
                    <img src="images/c1.svg" alt="Expert Guidance" className='mx-auto'/>
                    <h3 className='text-xl font-bold mb-4'>Expert Guidance</h3>
                    <p className='text-gray-600'>Our travel experts provide personalized recommendations to ensure you have the best experience.</p>
                </div>  
                <div className='border border-gray-200 rounded-lg p-6 text-center shadow-lg'>
                    <img src="images/c2.svg" alt="Best Price Guarantee" className='mx-auto'/>
                    <h3 className='text-xl font-bold mb-4'>Best Price Guarantee</h3>
                    <p className='text-gray-600'>We offer competitive pricing and exclusive deals to help you save on your travel plans.</p>
                </div>  
                <div className='border border-gray-200 rounded-lg p-6 text-center shadow-lg'>
                    <img src="images/c3.svg" alt="24/7 Customer Support"  className='mx-auto'/>
                    <h3 className='text-xl font-bold mb-4'>24/7 Customer Support</h3>
                    <p className='text-gray-600'>Our dedicated support team is available around the clock to assist you with any travel needs.</p>
                </div>  
            </div>
        </div>
    </div>
  )
}
