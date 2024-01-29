import React, { useState } from "react";
import {NavLink, useNavigate } from "react-router-dom";



function Signup() {
  const navigate = useNavigate()
  const [name, setName]= useState('');
  const [email, setEmail]= useState('');
  const [password, setPassword] = useState("");


    const postData= async (e)=>{
        e.preventDefault();

        if(name.length === 0){
          alert("name has left Blank!");
        }
        else if(password.length === 0){
          alert("password has left Blank!");
        }
        else if(email.length === 0){
          alert('Provide email')
        } else {
          const res = await fetch('https://online-market-msht.onrender.com/signup',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, email, password
            })
        });
        const data = await res.json();

        if(res.status === 201){
            localStorage.setItem('token', data.token)
            window.alert("Registration successful")

            navigate('/login')
            window.location.reload();

        } else {
            window.alert('Registration failed')
        }
        }
        
    }
  return (
    <div className="signup d-flex justify-content-center">
        <form className="border border-primary p-4">
            <h2>Create account</h2>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Username</label>
              <input type="text" className="form-control" id="exampleInputText"
              value={name} onChange={e=> setName(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              value={email} onChange={e=> setEmail(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1"
              value={password} onChange={e=> setPassword(e.target.value)}/>
            </div>
            <div className="mb-3">
              <NavLink to="/login">
                Already Registered, then Login here!
              </NavLink>
            </div>
            <button type="submit" className="btn btn-primary" onClick={postData}>Submit</button>
        </form>
    </div>
  )
}

export default Signup;