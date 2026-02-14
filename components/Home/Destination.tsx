'use client'
import React from 'react'
import SectionHeader from '../Helper/SectionHeader'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { destinationData } from '@/data/data';


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
export default function Destination() {

    return (
        <div className="pt-20">
            <h2 className="text-3xl font-bold text-center mb-8">Popular Destinations</h2>
            <SectionHeader
                heading="Exploring popular Destinations"
                subHeading="Discover the most popular travel destinations around the world."
            />
            <div className='mt-14 w-[80%] mx-auto'>
                {/* slider */}
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'
                >
                    {destinationData.map((destination) => (
                        <div key={destination.id} className='m-2 border border-gray-200 rounded-lg overflow-hidden shadow-lg h-96 flex flex-col'>
                            <img src={destination.image} alt={destination.country} className='w-full h-56 object-cover' />
                            <div className='p-4 flex flex-col flex-grow bottom-0 inset-0'>
                                <h3 className='text-lg font-bold mb-2'>{destination.country}</h3>
                                <p className='text-gray-600 text-sm'>{destination.travelers} Travelers</p>
                                <p className='text-gray-600 text-sm flex-grow'>{destination.description}</p>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}
