'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

//import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import { reviewData } from '@/data/data';

export default function Reviews() {
    return (
        <div className='pb-20 items-center justify-center flex flex-col bg-[#13357b] text-white'>
            {/* <h2 className='text-3xl font-bold text-center mb-8'>Reviews Section Coming Soon!</h2> */}
            <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10'>
                <div>
                    <h1 className='text-2xl font-semibold text-white'>What our customers are saying to us</h1>
                    <p>Our customers love our travel services and have shared their experiences with us. With our commitment to excellence, we ensure every journey is memorable and fulfilling.</p>

                    <div className='mt-6 flex items-center space-x-6'>
                        <div>
                            <p className='text-2xl font-bold text-white'>4.88</p>
                            <p className='text-white mb-2'>Overall Rating</p>
                            <div className='flex text-yellow-400'>
                                {'★'.repeat(5)}
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper md:w-[400px] md:h-[320px] w-[90%] h-[300px] mt-10"
                    >
                        {reviewData.map((review) => (
                            <SwiperSlide key={review.id} className="bg-white text-black rounded-lg md:p-6 flex flex-col justify-between">
                                <div className='p-2 md:p-5 '>
                                    <p className="text-gray-600">{review.review}</p>
                                    {/* rating */}
                                    <div className='flex text-yellow-400'>
                                        {'★'.repeat(5)}
                                    </div>
                                    <div className='flex gap-4 items-center mt-4'>
                                        <img src={review.image} alt={review.name} className=' rounded-full w-20 h-20' />
                                        <div>
                                            <p className="text-lg font-semibold text-center my-1">{review.name}</p>
                                            <p className="text-sm text-center text-gray-500">{review.title}</p>
                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
        </div>
    )
}
