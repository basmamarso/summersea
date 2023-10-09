import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import reducer2 from '../config/reducer2'

const Merci = () => {
    //const {commandfinal}=useParams()
    const commandfinal=useSelector(s=>s.reducer2)
    //console.log(commandfinal)
    console.log(commandfinal[commandfinal.length-1])
    var total=0
  return (
    
    <div className='m-5 text-center' >
    <h1 className="mt-0" style={{color:"#95BDFF",fontFamily:"SignPainter",fontSize:"60px"}}>Merci  {commandfinal[commandfinal.length-1].client.name}</h1>

        <p>
Nous tenions à vous remercier pour votre commande de repas en ligne et pour votre confiance en notre service.

</p> 
<p>
Nous sommes heureux de vous informer que votre commande sera livrée a L'adresse <span style={{color:"#95BDFF"}}>{commandfinal[commandfinal.length-1].client.adrss}</span> plus tôt que prévu.
 Nous nous efforçons toujours de fournir un service rapide et efficace à nos clients, et nous sommes ravis de pouvoir vous offrir une livraison anticipée.
</p>
<p>
Nous espérons que vous apprécierez votre repas et que notre service répondra à toutes vos attentes. Si vous avez des commentaires ou des suggestions sur votre expérience d'achat, n'hésitez pas à nous en faire part. Nous sommes toujours à l'écoute de nos clients pour améliorer notre service.

Encore une fois, merci beaucoup de nous avoir choisi et nous espérons vous revoir bientôt.
</p>
<table class="table">
    <thead>
      <tr  class="table-primary">
        <th>Items</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Price*Quantity</th>
      </tr>
    </thead>
    <tbody>     
      {commandfinal[commandfinal.length-1].commands.map((c)=>{
      total+=c.q*c.price
      return ( <tr class="table-primary">
        <td>{c.name}</td>
        <td>{c.price} $</td>
        <td>{c.q}</td>
        <td>{c.q*c.price} $</td>
      </tr>)
      }
      )}
      <tr class="table-primary">
        <td colSpan="2">Total</td>
        <td colSpan="2">{total}</td>
      </tr>
    </tbody>
  </table>

<hr className="accent my-5"/>
<h3></h3>
<textarea className='form-controls' cols="40" rows="7" placeholder='Message...'></textarea>
<button  className="my-4 d-flex justify-content-center but4" type="button" 
     >Envoyer</button>
    </div>
  )
}

export default Merci
