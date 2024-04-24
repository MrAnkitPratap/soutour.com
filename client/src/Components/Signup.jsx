import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Signup() {    

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [phoneNumber , setPhoneNumber] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/Signup", { name, email, password, phoneNumber })
        .then(result => {console.log(result)
        navigate("/Login")
        })
        .catch(err => console.log(err))
    }



  return (
    <div className="d-flex justify-content-center align-items-center bg-danger vh-100 bg-login ">
        <div className="bg-black p-3 rounded w-25">
        <h2 className="text-danger"><center>Sign Up</center></h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-3 text-danger">
                    <label htmlFor="email">
                        <strong>Name</strong>
                    </label>
                    <input type="text" 
                    placeholder='Enter Name' 
                    autoComplete='off' 
                    name='email' 
                    className='form-control rounded-0'
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3 text-danger">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input type="text" 
                    placeholder='Enter Email' 
                    autoComplete='off' 
                    name='email' 
                    className='form-control rounded-0' 
                    onChange={(e) => setEmail(e.target.value)}

                    />
                </div>
                <div className="mb-3 text-danger" >
                    <label htmlFor="email">
                        <strong>Password</strong>
                    </label>
                    <input type="password" 
                    placeholder='Enter Password' 
                    name='password' 
                    className='form-control rounded-0' 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="mb-3 text-danger" >
                        <label htmlFor="email">
                            <strong>Phone Number</strong>
                        </label>
                        <input type="number" 
                        placeholder='Enter Phone Number' 
                        autoComplete='off' 
                        name='phoneNumber' 
                        className='form-control rounded-0' 
                        onChange={(e) => setPhoneNumber(e.target.value)}

                        />
                    </div>

                <button type="submit" className="btn  w-100 rounded-0 bg-danger" >
                    Sign Up
                </button>
                </form>
                <p className="text-danger">Already have an account?</p>
                <Link to="/login" className="btn btn-default border w-100 bg-danger rounded-0 text-decoration-none">
                    Login
                </Link>
            
        </div>
    </div>
  );
}

export default Signup;