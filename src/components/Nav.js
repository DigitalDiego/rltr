import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Nav = () => {
  const links = [
    {name:'Houses', link:"houses"},
    {name:"Apartments",link:"/apartments"},
    {name:"Lofts", link:"/lofts"},
    {name:"Studios",link:"/studios"}
  ]
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)
  const handleClick = () => {
    setClick(!click)
  }
  const handleLink = () => {
    setClick(!click)
    window.scrollTo(0, 0)
  }
  const handleWindow = () => {
    if(window.scrollY == 0){
      setScroll(false)
    } else {
      setScroll(true)
    }
  }
  useEffect(() => {
    Aos.init({duration:'1000'})
  }, [])
  const handleScroll = () => {
    if(click){
      window.scrollTo(0, 0)
      setClick(!click)
    } else {
      window.scrollTo(0, 0)
    }
  }
  window.addEventListener('scroll', handleWindow)
  return (
    <div className={`fixed z-[1000] top-0 right-0 w-full h-[10vh] flex justify-between items-center px-2 md:px-8 ${scroll ? "bg-cyan-900" : "bg-transparent"}`}>
      <Link className='relative z-[1000] ext-[white] text-4xl flex justify-center items-center' to='/' onClick={handleScroll}>
        <button className='bg-[white] text-cyan-900 text-2xl w-[1.5em] h-[1.5em] grid place-items-center rounded-lg md:mr-2'>
          <BsFillHouseFill/>
        </button>
        <BsFillHouseFill className='hidden'/>
        <p className='hidden md:inline text-[white]'>RLTR</p>
      </Link>
      <nav className='hidden md:flex justify-center items-center'>
        {links.map(link => (
          <Link className='text-[white] text-lg ml-10' to={link.link} key={link.name} onClick={() => window.scrollTo(0, 0)}>{link.name}</Link>
        ))}
      </nav>
      <button className='md:hidden relative z-[1000] text-lg text-[white] border-none outline-none cursor-pointer' onClick={handleClick}>
        {click ? <FaTimes/> : <FaBars/>}
      </button>
      <div className={`fixed top-0 right-0 w-full h-screen bg-cyan-900/90 backdrop-blur flex justify-start items-start flex-col px-2 pt-[10vh] duration-[1s] ${click ? "translate-x-0 opacity-100" : "translate-x-[100%] opcity-0"}`}>
        {links.map(link => (
          <Link className='w-full h-[8vh] text-lg text-[white] flex justify-start items-center border-b-solid border-b-[white] border-b-[1px]' to={link.link} key={link.name} onClick={handleLink}>{link.name}</Link>
        ))}
      </div>
    </div>
  )
}

export default Nav