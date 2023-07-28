import React from 'react'
import ReactStars from "react-rating-stars-component";

const CardModal = ({el, setshowCard}) => {
  return (
    <div className='CardModal'>
      <div className="box_modal">
        <button onClick={()=>setshowCard(false)} >X</button>
        <img src={el.image} alt=""  />
        <div className='right_modal'>
            <h3>{el.genre}</h3>
        <h1>{el.name}</h1>
        <ReactStars
    count={5}
    size={24}
    edit={false}
    value={el.rate}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />
        <p>{el.description}</p>

        </div>
      </div>
    </div>
  )
}

export default CardModal
