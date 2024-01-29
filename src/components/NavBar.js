import React from 'react';
import { Link } from "react-router-dom";
import { ShoppingCart } from 'phosphor-react';
import { BsSearch } from "react-icons/bs";

function NavBar({searchvalue}) {

  console.log(searchvalue)

  const token = localStorage.getItem('token');
console.log(token)
  return (
    <div className="navbar">
        <h4>Shopify</h4>
        <div className="d-flex" role="search">
            <input className="form-control-sm "  type="search" placeholder="Search" aria-label="Search"/>
            <BsSearch className='nav-item fs-2 text-light' type="submit" />
        </div>
      <div className="end">
        {token? 
        <div>
          <Link to="/shop"> shop </Link>          
          <Link to="/cart">
            <ShoppingCart size={24} />
          </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/logout"> Logout </Link>
        </div> : <div>
          <Link to="/login"> Login </Link>
          <Link to="/signup"> Signup </Link>
        </div>}
    </div>  
    </div>
  )
}

export default NavBar;