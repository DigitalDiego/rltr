import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import {Home, House, Houses, Apartments, Lofts, Studios, Search} from './pages'
import {Nav} from './components'
import {data} from './data'
import Aos from 'aos'
import 'aos/dist/aos.css'
const App = () => {
  const [search, setSearch] = useState('')
  const [intro, setIntro] = useState(true)
  const searchResults = data.filter(item => (
    item.type.toLowerCase().includes(search.toLowerCase()) || item.city.toLowerCase().includes(search.toLowerCase())
  ))
  useEffect(() => {
    setInterval(() => {
      setIntro(false)
    }, 4500)
  }, [])
  useEffect(() => {
    Aos.init({duration:1000})
  }, [])
  return (
    <div className='relative'>
      {intro &&
        <div className='md:hidden fixed top-0 right-0 w-full h-screen bg-cyan-900 z-[2000] flex justify-center items-center text-[white] text-5xl'>
          <span data-aos='fade-down'>R</span>
          <span data-aos='fade-up' data-aos-delay='1000'>L</span>
          <span data-aos='fade-down' data-aos-delay='2000'>T</span>
          <span data-aos='fade-up' data-aos-delay='3000'>R</span>
        </div>
      }
      <Nav/>
      <Routes>
        <Route path='/' element={<Home search={search} setSearch={setSearch}/>}/>
        <Route path='/house/:id' element={<House/>}/>
        <Route path='/houses' element={<Houses/>}/>
        <Route path='/apartments' element={<Apartments/>}/>
        <Route path='/lofts' element={<Lofts/>}/>
        <Route path='/studios' element={<Studios/>}/>
        <Route path='/search=:search' element={<Search searchResults={searchResults}/>}/>
      </Routes>
    </div>
  )
}

export default App