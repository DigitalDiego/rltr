import React from 'react'
import {Hero, Links, Blocks, Footer} from '../components'
const Home = ({search, setSearch}) => {
  return (
    <div>
      <Hero search={search} setSearch={setSearch}/>
      <Links/>
      <Blocks/>
      <Footer/>
    </div>
  )
}

export default Home