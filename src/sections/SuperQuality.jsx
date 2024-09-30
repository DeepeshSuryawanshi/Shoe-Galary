import React from 'react'
import { arrowRight } from '../assets/icons'
import Button from '../Components/Button'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section id="About-us"
    className='flex justify-between pt-10  items-center max-lg:flex-col gap-10 w-full max-container'
    >
        <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold max:max-w-lg">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10  max-sm:pr-10">We Provide you</span>
          <br/>
          <span className="text-coral-red inline-block mt-3 max-sm:mt-1">Super Quatity</span>{"  "}Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience
          with unbeatable deals. From premier selections to incredible
          savings, we offer unparalleled value that sets us apart.
        </p>
        <p className="mt-4 mb-4 lg:max-w-lg info-text" >
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with
          us is nothing short of exceptional..
        </p>
        <div className="mt-4">
        <Button lable="View Details"/>
        </div>
        </div>
        <div className='flex flex-1 justify-center items-center '>
          <img src={shoe8} alt="Shoe 8" />
        </div>

    </section>
  )
}

export default SuperQuality
