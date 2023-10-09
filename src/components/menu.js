import React, { useState } from 'react'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import { ajoutercommande } from '../config/actions'
import "./ST.css"


const Menu = ({menu}) => {
    const [q,setq]=useState(1)
    const dispatch=useDispatch()
    //const commande=useSelector(s=>s)
    const commander=(idpro)=>{

        dispatch(ajoutercommande(menu.find((m)=>m.id==idpro),q))
        setq(1)

    }
  return (
    <div>
       <div>
      <div className="container py-5">
       
        
        <div className="row  align-items-center g-2">
        {menu.map((s)=>
        <div className="col-lg-6 col-md-12" >
            <div className="m-3 p-4" style={{border:"solid 6px #B4E4FF"}}>
            <div className="row justify-content-center align-items-center g-2" >
        <div class="col">
        <span className="float-right font-weight-bold">{s.price}$</span>
        <h6 className="text-truncate">{s.name}</h6>
        <p className="small">{s.description}</p>
      <input min="1" max="20" type="number"   onChange={(e)=>setq(e.target.value)}  style={{width:"150px",border:"solid 5px #B4E4FF",marginBottom:"10px"}} /><br/>
        <button type="button" className='but3'
        onClick={()=>commander(s.id)}>Commander</button>
        </div>
            <div className="col">
                <img src={s.image} style={{maxHeight:"200px",maxWidth:"200px",border:"solid 5px #95BDFF"}}/>
            </div>
            </div>
            </div>
    
        </div>
        )}
        </div>
        
        
        <div className="col-12 mt-4">
            <hr className="accent my-5"/>
        </div>
        <div className="col-6 mx-auto">
            <div className="card card-body text-center">
                <h5 className="text-uppercase">Tuesday Only!</h5>
                <h6>Albondigas Soup</h6>
                <p className="small"> A steaming cup or bowl of Mexican meatball &amp; vegetable soup garnished with crispy tortilla strips and fresh cheddar-Jack cheese. If you like Mexican food try this!</p>
                <span className="float-right font-weight-bold">$7</span>
            </div>
        </div>
    </div>
</div>
    </div>
    
  )
}

export default Menu
