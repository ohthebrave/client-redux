import React, { } from "react";
 
import {Link} from 'react-router-dom';
import Header from "./Header";
 
export default function LandingPage(){
 
  return (
    <div>
        <div className="container h-100">
            <div className="row h-100">
                <div className="col-12">
                    <Header/>
                    <p><Link to="/login" className="btn btn-secondary">Login</Link> | <Link to="/signup" className="btn btn-secondary">register</Link> </p>
                </div>
            </div>
        </div>
    </div>
  );
}