import React from 'react'

const AddModal = ({setshowAdd,setnewmovie,newmovie,addmovi}) => {
  return (
    <div className='CardModal'>
      <div className="box_modal add_box">
        <button onClick={()=>setshowAdd(false)} >X</button>
        <label htmlFor="">Name:</label>
        <input type="text" name="" id="" onChange={(e)=>setnewmovie({...newmovie,name:e.target.value})} />
        <label htmlFor="">Genre:</label>
        <input type="text" name="" id="" onChange={(e)=>setnewmovie({...newmovie,genre:e.target.value})} />
        <label htmlFor="">Description:</label>
        <input type="text" name="" id="" onChange={(e)=>setnewmovie({...newmovie,description:e.target.value})} />
        <label htmlFor="">Image:</label>
        <input type="text" name="" id="" onChange={(e)=>setnewmovie({...newmovie,image:e.target.value})} />
        <label htmlFor="">Rate:</label>
        <input type="number" name="" id="" onChange={(e)=>setnewmovie({...newmovie,rate:e.target.value})} />
        <input type="button" value="Apply" onClick={()=>{setshowAdd(false);addmovi()}} />
      </div>
    </div>
  )
}

export default AddModal
