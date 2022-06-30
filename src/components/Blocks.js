import React from 'react'
import ImageOne from '../images/image-one.jpg'
import ImageTwo from '../images/image-two.jpg'
const Blocks = () => {
  return (
    <div className='w-full p-2 md:px-8 md:h-[200vh] 2xl:h-[100vh]'>
      <div className='w-full md:h-[80vh] 2xl:h-[50vh] flex justify-center items-center flex-col md:flex-row md:flex-row-reverse'>
        <div className='w-full h-[40vh] grid place-items-center'>
          <div className='w-[90%] 2xl:w-[80%] h-[80%] 2xl:h-[40vh] md:h-[50vh] shadow-lg'>
            <img className='w-full h-full object-cover' src={ImageOne} alt="house" />
          </div>
        </div>
        <div className='w-full md:h-full flex justify-center 2xl:justify-center items-center'>
          <p className='w-4/5 2xl:w-1/2 text-center md:text-left md:text-lg 2xl:text-xl'>Find a house that fits your criteria from area to lifestyle. Check out the listing and find your dream house.</p>
        </div>
      </div>
      <div className='w-full md:h-[80vh] 2xl:h-[50vh] flex justify-center items-center flex-col md:flex-row'>
        <div className='w-full h-[40vh] grid place-items-center'>
          <div className='w-[90%] 2xl:w-[80%] h-[80%] 2xl:h-[40vh] md:h-[50vh] shadow-lg'>
            <img className='w-full h-full object-cover' src={ImageTwo} alt="house" />
          </div>
        </div>
        <div className='w-full md:h-full flex justify-center items-center'>
          <p className='w-4/5 2xl:w-1/2 text-center md:text-left md:text-lg 2xl:text-xl'>Thousands of houses sold and many happy clients. RLTR is the place to visit when looking for a house.</p>
        </div>
      </div>
    </div>
  )
}

export default Blocks