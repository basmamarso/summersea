import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ajoutercommandefinal } from '../config/actions'
const ValiderCommande = ({commande}) => {
    const [name,setname]=useState("")
   const [lastname,setlastname]=useState("")
   const [adrss,setadrss]=useState("")
   const [tele,settele]=useState("")
   const dispatch=useDispatch()
   const c=useSelector(s=>s.reducer2)
   //const [commandfinal,setcommandfinal]=useState([])
   const send=(commande)=>{
    //setcommandfinal([...commandefinal,{commande:[commande],client:{name,lastname,adrss,tele}}])
    dispatch(ajoutercommandefinal(commande,name,lastname,adrss,tele))
   // console.log(com)
    //console.log(c)
    alert("ok")
   }
  return (
    <div>
            <h1 className="mt-0" align="center" style={{color:"#F7C8E0",fontFamily:"SignPainter",fontSize:"60px"}}></h1>
  <div class="row mx-5">
    <div class="col-6">
      <div class="form-outline">
      <label class="form-label" for="form3Example1">First name</label>
        <input type="text" class="form-control" value={name} onChange={(e)=>setname(e.target.value)} required />
      </div>
    </div>
    <div class="col-6">
      <div class="form-outline">
      <label class="form-label" for="form3Example2">Last name</label>
        <input type="text"  class="form-control" value={lastname} onChange={(e)=>setlastname(e.target.value)}  />
      </div>
    </div>
  </div>
<div class="row mx-5">
    <div class="col-12">
    <div class="form-outline">
  <label class="form-label" for="form3Example3">Address</label>
    <input type="text" id="form3Example3" class="form-control" value={adrss} onChange={(e)=>setadrss(e.target.value)} />   
  </div>
    </div>
    <div class="col-12">
    <div class="form-outline ">
  <label class="form-label" for="form3Example4">Telephone</label>
    <input type="text" id="form3Example4" class="form-control" value={tele} onChange={(e)=>settele(e.target.value)}  />
  </div>
    </div>
    <div class="col-12">
    <div class="form-check  my-4">
    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
    <label class="form-check-label" for="form2Example33">
      Remember me
    </label>
  </div>
    </div>
     <Link to="/summersea/Merci/" style={{textDecoration:"none"}}> 
    <button  class="mb-4 d-flex justify-content-center but4" type="button" 
       onClick={()=>send(commande)}>Envoyer</button>
     </Link> 
</div>

</div>

  )
}

export default ValiderCommande
