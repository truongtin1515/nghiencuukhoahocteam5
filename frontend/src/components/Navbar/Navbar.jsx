import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../components/Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [menu, setMenu] = useState("home");
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>GYM FITNESS</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("home")}}><Link to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("aboutus")}}><Link to='aboutus'>AboutUs</Link>{menu==="aboutus"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("trainingplans")}}><Link to='training'>Training Plans</Link>{menu==="trainingplans"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("health")}}><Link to='health'>Health Consultation</Link>{menu==="health"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("schedule")}}><Link to='schedule'>Schedule</Link>{menu==="schedule"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src = {cart_icon} alt=""/></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar