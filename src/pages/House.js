import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import {data} from '../data'
import SlideOne from '../images/slide-one.jpg'
import SlideTwo from '../images/slide-two.jpg'
import SlideThree from '../images/slide-three.jpg'
import SlideFour from '../images/slide-four.jpg'
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import {MdKingBed} from 'react-icons/md'
import {FaBath} from 'react-icons/fa'
const House = () => {
  const slides = [
    {
      image:SlideOne
    },
    {
      image:SlideTwo
    },
    {
      image:SlideThree
    },
    {
      image:SlideFour
    },
  ]
  const {id} = useParams()
  const house = data.filter(house => (
    house.id == id
  ))
  const [current, setCurrent] = useState(0)
  const length = slides.length
  if(!Array.isArray(slides) || slides.length <= 0){
    return null
  }	
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1 )
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  return (
    <div>
      <div className='w-full h-[20vh] flex justify-center items-end bg-cyan-900'>
        <div className='w-full h-[10vh] text-[white] grid place-items-center px-2 text-xl'>
          <p className='2xl:text-4xl'>{house[0].city}</p>
        </div>
      </div>
      <div className='w-full h-[80vh] md:mb-4'>
      <div className='md:hidden w-full h-[50vh] md:h-full'>
        <img className='w-full h-full object-cover' src={house[0].image} alt="house" />
      </div>
      <div className='hidden md:flex w-full h-[50vh] md:h-full'>
        <img className='w-full h-full object-contain' src={house[0].image} alt="house" />
      </div>
        <div className='relative w-full h-[30vh] p-2 md:hidden'>
          <Swiper
            slidesPerView={1}
            className='w-full h-full'
          >
            {slides.map((slide, index) => (
              <div key={index}>
                {index === current && (
                  <SwiperSlide className='w-full h-full relative'>
                    <img className='w-full h-full object-cover' src={slide.image} alt="background"/>
                  </SwiperSlide>
                )}
              </div>
            ))}
          </Swiper>
          <div className='absolute top-1/2 right-0 w-full z-[100] px-2 flex justify-between items-center text-[white] text-2xl'>
              <button className='border-none outline-none cursor-pointer' onClick={prevSlide}>
                <IoIosArrowBack/>
              </button>
              <button className='border-none outline-none cursor-pointer' onClick={nextSlide}>
                <IoIosArrowForward/>
              </button>
          </div>
        </div>
      </div>
      <div className='hidden md:flex w-full h-[30vh] px-8 gap-8'>
        {slides.map((slide, index) => (
          <div className='w-1/4 h-full' key={index}>
            <img className='w-full h-full object-cover' src={slide.image} alt="house" />
          </div>
        ))}
      </div>
      <div className='w-full h-[8vh] flex justify-between items-center px-2 2xl:px-[20vw] md:px-8 text-lg md:text-xl'>
        <div className='w-1/2 h-full flex'>
          <p className='flex justify-center items-center mr-4'>
            <MdKingBed className='mr-2'/>
            {house[0].rooms}
          </p>
          <p className='flex justify-center items-center'>
            <FaBath className='mr-2'/>
            {house[0].bathrooms}
          </p>
        </div>
        <p className='md:hidden'>${house[0].price.toLocaleString()}</p>
        <p className='hidden md:inline'>Price: ${house[0].price.toLocaleString()}</p>
      </div>
      <div className='w-full h-[30vh] md:h-auto p-2 grid place-items-center text-center text-lg'>
        <p className='md:w-4/5 2xl:w-1/2'>This {house[0].type} comes with a great amount of space for when you want to add new things to it. With a great view and a great setting this makes it the perfect {house[0].type} for anyone that wants to have a vacation feeling in their personal space.</p>
      </div>
      <div className='w-full h-[10vh] grid place-items-center'>
        <button className='w-4/5 md:w-[20%] 2xl:w-[10%] h-4/5 md:h-1/2 bg-[crimson] text-[white] text-lg cursor-pointer border-none outline-none'>Place Bid</button>
      </div>
    </div>
  )
}

export default House