import React from 'react'
import Card from './Card'

const Home = ({movies,recherche}) => {
  return (
    <div className='home'>
      {movies.filter(el=>el.name.toLowerCase().includes(recherche.toLowerCase())).map(el=><Card el={el} />)}
    </div>
  )
}

export default Home
