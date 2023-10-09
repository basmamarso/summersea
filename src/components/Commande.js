import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modifierqte, supprimercommande } from '../config/actions'
import { useState } from 'react'
import ValiderCommande from './ValiderCommande'



const Commande = () => {
    const commande=useSelector(s=>s.reducer)
  // const [panier,setpanier]=useState(commande)
   const [v,setv]=useState(false)
   const  [qc,setqc]=useState(false)
   
    const dispatch=useDispatch()
    //const [total,settotal]=useState(0)
    var total1=0
    var total2=0
//console.log(total)
    const supprimer=(idc)=>{

        dispatch(supprimercommande(idc))
//console.log(commande)
    }
    const valider=()=>{
      setv(true)
     

   

    }


  return (
    <div>
       <div>
       <h1 className="mt-0" align="center" style={{color:"#95BDFF",fontFamily:"SignPainter",fontSize:"60px"}}>Vos commande</h1>

      <div className="container py-5">

        <div className="row  align-items-center g-2">

        {
        commande.length==0?<p>vous n'avez rien encore commandé</p>:
        commande.map((s,i)=>{
            total1+=(s.price*qc);
            total2+=(s.price*s.q);
            return(
        <div className="col-lg-6 col-md-12" key={i}>
            <div className="m-3 p-4" style={{border:"solid 6px #B4E4FF"}}>
            <div className="row justify-content-center align-items-center g-2" >
        <div class="col">
        <span className="float-right font-weight-bold">{s.price}$</span>
        <h6 className="text-truncate">{s.name}</h6>
        <p className="small">{s.description}</p>
        <input min="1" max="20" type="number" placeholder={s.q} style={{width:"130px",border:"solid 5px #B4E4FF",marginBottom:"10px"}} onChange={(e)=>{
         setqc(e.target.value);
         dispatch(modifierqte(s.idc,qc+1))
         //console.log(commande)
        }
       }
       
         />
            <button type="button" className='but3 mx-2'
       onClick={()=>dispatch(modifierqte(s.idc,qc))}>Modifier</button>
        <button type="button" className='but3'
       onClick={()=> supprimer(s.idc)}>Supprimer</button>
     
        </div>
            <div className="col">
                <img src={s.image} style={{height:"200px",width:"200px",border:"solid 5px #95BDFF"}} />
            </div>
            </div>
            </div>
        </div>)}
        )}
        </div> 
    </div>
</div>

{commande.length!=0&&
<center>
<table  style={{border:"solid 6px #B4E4FF",width:"70%"}}>
    <tr>
        <td align='center'> Total    :</td>
        {total1!=0?<td align='center'> {total1} $</td>:<td align='center'> {total2} $</td>}
    </tr>
    <tr >
        <td colspan="2">
        <button  className="my-4 d-flex justify-content-center but4" type="button" 
       onClick={valider} >valider</button>
        </td> 
    </tr>
</table>
</center>
    }
 <hr className="accent m-5"/>
     
       {v==true&&<ValiderCommande commande={commande}></ValiderCommande>}

    </div>
    
  )
}

export default Commande
