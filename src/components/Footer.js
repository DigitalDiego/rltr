import React from 'react'

const Footer = () => {
  return (
    <div className='w-full md:h-[28vh] bg-cyan-900 px-2'>
      <p className='w-full h-[8vh] grid place-items-center text-[white] text-xl md:text-2xl 2xl:text-4xl'>Subscribe</p>
      <div className='w-full h-[8vh] md:h-[15vh] flex justify-between md:justify-center items-center'>
        <input className='w-3/4 md:w-[40%] 2xl:w-1/4 border-none outline-none px-2 py-1 md:mr-4 2xl:text-lg' type="text" placeholder='Email'/>
        <button className='md:w-[10%] 2xl:w-[5%] border-none outline-none cursor-pointer bg-[crimson] p-1 text-[white] 2xl:text-lg'>Subscribe</button>
      </div>
      <div className='w-full h-[5vh] grid place-items-center text-[white]'>
        <p>RLTR &copy;2022</p>
      </div>
    </div>
  )
}

export default Footer