import React from 'react'
import {data} from '../data'
import {Block} from '../components'

const Studios = () => {
  const houses = data.filter(house => (
    house.type === "studio"
  ))
  return (
    <div>
      <div className='w-full h-[20vh] flex justify-center items-end bg-cyan-900 text-[white]'>
        <p className='w-full h-[10vh] grid place-items-center text-2xl 2xl:text-4xl'>Studios</p>
      </div>
      <div className='w-full min-h-[80vh] grid place-items-start p-2 md:p-4 2xl:p-10 grid-cols-1 md:grid-cols-4 gap-4 2xl:gap-10'>
        {houses.map(house => (
          <Block image={house?.image} city={house.city} price={house.price} id={house.id} rooms={house.rooms} bathrooms={house.bathrooms} key={house.id}/>
        ))}
      </div>
    </div>
    )
}

export default Studios