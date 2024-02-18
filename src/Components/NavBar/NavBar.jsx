import React, { useState } from 'react'
import './NavBar.css'
import logo from '../Assests/logo.png'
//import Link from '@material-ui/core/Link';
//import AddShoppingCartIcon from '@mui/icons-material';

const NavBar = () => {
const [menu,setMenu]=useState("shop");
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt=""/>
        </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><link to='/'>Shop</link>{menu==="shop"?<hr/>:<></> }</li>
        <li onClick={()=>{setMenu("mens")}}><link to='/mens'>Mens</link>{menu==="mens"?<hr/>:<></> }</li>
        <li onClick={()=>{setMenu("womens")}}><link to='/Womens'>Womens</link>{menu==="womens"?<hr/>:<></> }</li>
        <li onClick={()=>{setMenu("kids")}}><link to='/Kids'>Kids</link>{menu==="kids"?<hr/>:<></> }</li>
      </ul>
      <div className="nav-login-cart">
       <link to='/login'> <button>LOGIN</button></link> 
      {/* // <AddShoppingCartIcon/> */}
      <div className="nav-cart-count">0
</div>
</div>
 </div>
  )
}
export default NavBar;
