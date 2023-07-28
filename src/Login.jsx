import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
const navigate=useNavigate()
  return (
    <div className='login'>
      <div className="box">
        <label htmlFor="">Email</label>
        <input type="email" name="" id="" />
        <label htmlFor="">Password</label>
        <input type="password" />
        <button onClick={()=>navigate("/lkol")} >Sign in</button>
      </div>
    </div>
  )
}

export default Login
