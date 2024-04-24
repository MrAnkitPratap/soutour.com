import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './Components/Home';
import { SliderData } from './utils/constants';
import React from 'react'
import  Navbar  from './Components/Navbar'
import { Box } from "@mui/material";
import BookNow from './Components/BookNow';
import Tours from './Components/Tours';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Logo from './Components/Logo';
import Signup from './Components/Signup';
import PaymentSuccess from './Components/PaymentSuccess';


const App = () => (
  
<BrowserRouter>
<Box sx={{backgroundImage: 'radial-gradient( circle 325px at 19.2% 64.8%,  rgba(254,62,101,1) 9.7%, rgba(166,24,146,1) 91.3% )'}}>
<Navbar/>


<Routes>
<Route path="/"  element={<Logo/>}/>
<Route path="/Home" element={<Home slides={SliderData}/>}/>
<Route path="/BookNow" element={<BookNow/>}/>
<Route path="/Tours"  element={<Tours/>}/>
<Route path="/Contact"  element={<Contact/>}/>
<Route path="/Login"  element={<Login/>}/>
<Route path="/Signup"  element={<Signup/>}/>
<Route path="/paymentsuccess" element={<PaymentSuccess />} />
</Routes>

</Box>
</BrowserRouter>
  )
export default App


