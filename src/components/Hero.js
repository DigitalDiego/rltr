import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
const Hero = ({search, setSearch}) => {
  const navigate = useNavigate()
  const handleSearch = event => {
    event.preventDefault()
    if(search.replace(/\s/g, '').length !== 0){
        navigate(`/search=${search}`)
    } else {
        return null
    }
  }
  useEffect(() => {
    setSearch('')
  }, [])
  return (
    <div className='relative w-full h-screen bg-[url("https://source.unsplash.com/1000x2000/?houses")] md:bg-[url("https://source.unsplash.com/2000x900/?houses")] bg-center bg-cover'>
        <div className='absolute top-0 right-0 w-full h-full bg-[black]/80 grid place-items-center px-2 md:px-8'>
          <form className='w-full md:w-1/2 2xl:w-[30%] h-[50px] flex justify-center items-center bg-[white] rounded-lg' onSubmit={handleSearch}>
              <input className='w-full h-[50px] px-2 rounded-lg text-lg border-none outline-none' type="text" placeholder='Search: Houses, Apartments or Los Angeles, New York' onChange={event => setSearch(event.target.value)} value={search}/>
              <button type='submit' className='w-[50px] h-[50px] text-[crimson] text-lg grid place-items-center'>
                <AiOutlineSearch/>
              </button>
          </form>
        </div>
    </div>
  )
}

export default Hero