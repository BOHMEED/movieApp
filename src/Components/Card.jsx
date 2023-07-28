import React, { useState } from 'react'
import CardModal from './CardModal'


const Card = ({el}) => {
    const [showCard, setshowCard] = useState(false)
  return (
    <div className='card'  >
        {showCard?<CardModal el={el} setshowCard={setshowCard} />:null}
      <img src={el.image} onClick={()=>setshowCard(true)} alt="" />
    </div>
  )
}

export default Card
