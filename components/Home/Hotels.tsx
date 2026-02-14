import React from 'react'
import SectionHeader from '../Helper/SectionHeader'
import { hotelsData } from '@/data/data'
import { Heart } from 'lucide-react'

export default function Hotels() {
    return (
        <div className='py-20'>
            <SectionHeader
                heading='Recommended Hotels'
                subHeading="Discover the best hotels in the world"
            />
            <div className='mt-14 w-[80%] mx-auto'>
                {/* Hotels content */}
                {hotelsData.map((hotel) => (
                    <div key={hotel.id} className='relative mb-8 border border-gray-200 rounded-lg overflow-hidden shadow-lg flex'>
                        <div className='relative w-1/3'>
                            <img src={hotel.image} alt={hotel.name} 
                                className=' w-full h-full object-cover hover:scale-110 overflow-hidden' />
                            <div className='absolute top-2 right-2'>
                                <Heart className='bg-white p-1' size={30}/>
                            </div>
                        </div>
                        <div className='p-4 flex-grow'>
                            <h3 className='text-lg font-bold mb-2'>{hotel.name}</h3>
                            <p className='text-gray-600 text-sm'>{hotel.location}</p>
                            <p className='text-gray-600 text-sm'>{hotel.reviews}</p>
                            <div>
                                <span className='text-yellow-500 font-bold'>{'★'.repeat(hotel.rating)}</span>
                                <span className='text-gray-400'>{'★'.repeat(5 - hotel.rating)}</span>
                                <div>${hotel.price}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
