import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ajouterreservation } from '../config/actions'


const Reservation = () => {
    const dispatch=useDispatch()
   

    const reserve=()=>{
    dispatch(ajouterreservation(name,email,date,time,partySize))
    alert("Merci "+name+" 🥺")

    }
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [date,setdate]=useState("")
     const [time,settime]=useState("")
     const [partySize,setpartySize]=useState("")


  return (
      <div>
      <h1 className="mt-0 text-center" style={{color:"#95BDFF",fontFamily:"SignPainter",fontSize:"60px"}}>Reservation</h1>
      <hr className="accent m-5"/>

  <div class="row mx-5">
    <div class="col-6">
      <div class="form-outline">
      <label class="form-label" for="form3Example1">First name</label>
        <input type="text" class="form-control" value={name} onChange={(e)=>setname(e.target.value)} required />
      </div>
    </div>
    <div class="col-6">
      <div class="form-outline">
      <label class="form-label" for="form3Example2">email</label>
        <input type="text"  class="form-control" value={email} onChange={(e)=>setemail(e.target.value)}  />
      </div>
    </div>
  </div>
<div class="row mx-5">
    <div class="col-12">
    <div class="form-outline">
  <label class="form-label" for="form3Example3">Date</label>
    <input type="text" id="form3Example3" class="form-control" value={date} onChange={(e)=>setdate(e.target.value)} />   
  </div>
    </div>
    <div class="col-12">
    <div class="form-outline ">
  <label class="form-label" for="form3Example4">Time</label>
    <input type="text" id="form3Example4" class="form-control" value={time} onChange={(e)=>settime(e.target.value)}  />
  </div>
    </div>

    <div class="col-12">
    <div class="form-outline ">
  <label class="form-label" for="form3Example4">party Size</label>
        <select name="partySize" value={partySize} onChange={(e)=>setpartySize(e.target.value)} className="form-control">
                  <option value="1">1 person</option>
                  <option value="2">2 people</option>
                  <option value="3">3 people</option>
                  <option value="4">4 people</option>
                  <option value="5">5 people</option>
        </select>  </div>
    </div>
    <button type="button" className='my-4 d-flex justify-content-center but4' onClick={reserve}>Reserve</button>
    </div>
    <hr className="accent m-5"/>

    </div>
    
  )
}

export default Reservation
