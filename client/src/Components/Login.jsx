import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


function Login() {    

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const navigate = useNavigate()

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        setPhoneNumber(e.target.value)
    }
    

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/Login", { email, password , phoneNumber  })
        .then(result => {
            console.log(result)
            if(result.data === "Success"){
                navigate("/")
            }else{
                navigate("/Signup")
                alert("You are not registered to this service")

            }
       
        })
        .catch(err => console.log(err))
    }



  return (
    <div className="d-flex justify-content-center align-items-center bg-danger vh-100  bg-login">
        <div className="bg-black p-3 rounded w-25 " >
            <h2 className="text-danger"><center>Login</center></h2>
            <form onSubmit={handleSubmit}>
                
                <div className="mb-3 text-danger">
                    <label htmlFor="email">
                        <strong>Email or Phone Number</strong>
                    </label>
                    <input type="text" 
                    placeholder='Enter Email or Phone Number' 
                    autoComplete='off' 
                    name='email' 
                    className='form-control rounded-0' 
                    onChange={handleEmailChange}
                   
                    />

                </div>  
                
                <div className="mb-3 text-danger">
                    <label htmlFor="email">
                        <strong >Password</strong>
                    </label>
                    <input type="password" 
                    placeholder='Enter Password' 
                    name='password' 
                    className='form-control rounded-0' 
                    onChange={(e) => setPassword(e.target.value)}

                    />
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-0 bg-danger"  >
                    Login
                </button>
                </form>
                <p className="mb-3 text-danger">Don't have an account?</p>
                <Link to="/Signup" className="btn btn-default border w-100 bg-danger rounded-0 text-decoration-none">
                    Sign Up
                </Link>
            
        </div>
    </div>
  );
}

export default Login;