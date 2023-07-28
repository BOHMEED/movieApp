import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = ({setrecherche,setshowAdd}) => {
  const navigate=useNavigate()
    
  return (
    <div className='nav'>

        <nav>
            <h1>U_watch</h1>
            <ul>
                <input type="text" placeholder='Type your movie' name="" id="" onChange={(e)=>setrecherche(e.target.value)} />
                <li onClick={()=>setshowAdd(true)} >Add</li>
                <li onClick={()=>navigate("/")} >Logout</li>

            </ul>
        </nav>
    </div>
  )
}

export default Navbar
