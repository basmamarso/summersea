import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/11.png';


const Nav = () => {
  return (
    
    <nav className="navbar  navbar-light navbar-expand-lg justify-content-center" style={{backgroundColor:"white"}}>
  <a className="navbar-brand" href="#"><img src={logo} style={{height:"70px",width:"60px"}} alt="image1"></img></a>
    <ul className="navbar-nav ">
      <li className="nav-item active" >
      <Link to="/summersea/Home/" style={{textDecoration:"none"}}><a className="nav-link" href="#" >HOME <span className="sr-only"></span></a></Link>
      </li>
      <li className="nav-item">
      <Link to="/summersea/Menus/" style={{textDecoration:"none"}}> <a className="nav-link" href="#">MENUS</a></Link>
      </li>
      <li className="nav-item">
      <Link to="/summersea/Commande/" style={{textDecoration:"none"}}><a className="nav-link" href="#">COMMANDE</a></Link>
       
      </li>
      <li className="nav-item">
      <Link to="/summersea/Reservation/" style={{textDecoration:"none"}}><a className="nav-link" href="#">RESERVATION</a></Link>
       
      </li>
    </ul>
</nav>
  )
}

export default Nav
