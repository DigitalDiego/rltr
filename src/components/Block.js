import React from 'react'
import {Link} from 'react-router-dom'
import {MdKingBed} from 'react-icons/md'
import {FaBath} from 'react-icons/fa'
const Block = (props) => {
  return (
    <div className='w-full bg-cyan-100'>
        <div className='w-full h-[40vh] 2xl:h-[30vh]'>
            <img className='w-full h-full object-cover' src={props.image} alt="house" />
        </div>
        <div className='w-full h-[8vh] 2xl:h-[5vh] flex justify-between items-center text-lg px-2'>
            <p>{props.city}</p>
            <p>${props.price.toLocaleString()}</p>
        </div>
        <div className='w-full h-[8vh] 2xl:h-[5vh] flex justify-between items-center text-lg px-2'>
            <div className='flex justify-center items-center'>
                <div className='w-1/2 flex'>
                    <p className='flex justify-center items-center mr-4'>
                        <MdKingBed className='mr-2'/>
                        {props.rooms}
                    </p>
                </div>
                <div className='w-1/2'>
                    <p className='flex justify-center items-center'>
                        <FaBath className='mr-2'/>
                        {props.bathrooms}
                    </p>
                </div>
            </div>
            <Link className='w-1/2 h-4/5 bg-[crimson] text-[white] grid place-items-center' to={`/house/${props.id}`} onClick={() => window.scrollTo(0, 0)}>View</Link>
        </div>
    </div>
  )
}

export default Block