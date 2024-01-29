import React, { useState } from 'react';
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
  }
  from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
  

export default function Login() {

    const [name, setName]= useState('');
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(name.length === 0){
          alert("name has left Blank!");
        }
        else if(password.length === 0){
          alert("password has left Blank!");
        }
        else {
          const res = await fetch('https://online-market-msht.onrender.com/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, password
            })
        })
        const data = await res.json();

        if(res.status === 200){
            localStorage.setItem('token', data.token)
            window.alert("Login successful")

            navigate('/shop')
            window.location.reload();

        } else {
            window.alert('Invalid Credentials')
        }
        }
        
    }

  return (
    <MDBContainer className="mt-2">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-75'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                <MDBInput wrapperClass='mb-4' label='Username' id='formControlLgText' type='text' size="lg" 
                value={name} onChange={e=> setName(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"
                value={password} onChange={e=> setPassword(e.target.value)}/>

                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
              <a className="small text-muted" href="#!">Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p>

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  )
}
