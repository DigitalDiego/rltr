import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
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
        <form className='absolute top-0 right-0 w-full h-full bg-[black]/80 flex justify-center items-center flex-col' onSubmit={handleSearch}>
            <input  className='w-4/5 md:w-1/2 2xl:w-1/4 px-2 py-1 rounded-lg text-lg mb-2 border-none outline-none' type="text" placeholder='Search: Houses, Apartments or Los Angeles, New York' onChange={event => setSearch(event.target.value)} value={search}/>
            <input type='submit' className='w-1/4 md:w-[20%] 2xl:w-[10%] bg-[crimson] text-[white] rounded-lg py-1 text-lg' value='Search'/>
        </form>
    </div>
  )
}

export default Hero