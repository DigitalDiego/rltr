import React from 'react'
import {BsHouseDoor, BsBuilding} from 'react-icons/bs'
import {MdApartment, MdOtherHouses} from 'react-icons/md'
import {Link} from 'react-router-dom'
const Links = () => {
  const links = [
    {
      name:"Houses",
      image:<BsHouseDoor className='text-[2em] mb-2'/>,
      link:"/houses",
      border:"border-blue-500",
      color:"text-blue-500",
      background:"bg-blue-100"
    },
    {
      name:"Apartments",
      image:<MdApartment className='text-[2em] mb-2'/>,
      link:"/apartments",
      border:"border-pink-500",
      color:"text-pink-500",
      background:"bg-pink-100"
    },
    {
      name:"Lofts",
      image:<BsBuilding className='text-[2em] mb-2'/>,
      link:"/lofts",
      border:"border-green-500",
      color:"text-green-500",
      background:"bg-green-100"
    },
    {
      name:"Studios",
      image:<MdOtherHouses className='text-[2em] mb-2'/>,
      link:"/studios",
      border:"border-yellow-500",
      color:"text-yellow-500",
      background:"bg-yellow-100"
    },
  ]
  return (
    <div className='w-full px-2 pt-4 md:py-4 flex justify-center md:justify-evenly items-center flex-col md:flex-row'>
      {links.map(link => (
        <Link className={`w-[150px] h-[150px] flex justify-center items-center flex-col border-4 border-solid mb-4 md:mb-0 rounded-lg ${link.border} ${link.color} ${link.background}`} to={link.link} key={link.name} onClick={() => window.scrollTo(0, 0)}>
          {link.image}
          <p className='text-lg'>{link.name}</p>
        </Link>
      ))}
    </div>
  )
}

export default Links