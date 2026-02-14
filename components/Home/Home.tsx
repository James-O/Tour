import React from 'react'
import Hero from './Hero'
import Destination from './Destination'
import Hotels from './Hotels'
import WhyChooseUs from './WhyChooseUs'
import Reviews from './Reviews'
import News from './News'
import Newsletter from './Newsletter'

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Destination />
      <Hotels />
      <WhyChooseUs />
      <Reviews />
      <News />
      <Newsletter />
    </div>
  )
}
