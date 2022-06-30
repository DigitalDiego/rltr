import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import {Home, House, Houses, Apartments, Lofts, Studios, Search} from './pages'
import {Nav} from './components'
import {data} from './data'
const App = () => {
  const [search, setSearch] = useState('')
  const searchResults = data.filter(item => (
    item.type.toLowerCase().includes(search.toLowerCase()) || item.city.toLowerCase().includes(search.toLowerCase())
  ))
  return (
    <div>
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