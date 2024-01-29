import React from 'react';
import img from '../assets/Electronics.jpeg'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='container'>
        <div className="row pt-5">
            <div className="col-md-6 mt-5">
                <p className=' fs-1 fw-bold'>Choose The Latest <br/><span className="text-warning">Trending</span> Products</p>
                <p className='text-wrap  text-start pt-5 fs-4 '>I believe that economics is based on scarcity of markets. 
                And it's possible to monetize your art without compromising the integrity of it for commerce.</p>
                <Link type="button" className="btn btn-warning mt-3" to="/login">Explore more</Link>
            </div>
            <div className="col-md-6">
                <img src={img} alt="items"/>
            </div>
        </div>
    </div>
  )
}

export default Header