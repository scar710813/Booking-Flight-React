import React from 'react'



import Car from '../Pages/Car/Car';



import Flight from '../Flight/Flight';
import { FlightCheckout } from '../Flight/FlightCheckout';

import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import {Signup}  from './Signup'





import Homepage from './Homepage';
import { FlightPayment } from '../Flight/FlightPayment';



const AllRoutes = () => {
  return (
    <Routes>

    <Route path='/login' element={<Login/>} />
    <Route path='/signup' element={<Signup/>}/>
    
    


        <Route path="/" element={<Homepage/>}/>

        <Route path="/car" element={<Car/>}/>


        <Route path='/flight' element={<Flight/>}/>
        <Route path="/flightcheckout" element={<FlightCheckout/>} />
        <Route path='/flightpayment' element={<FlightPayment/>}/>



    </Routes>
  )
}

export default AllRoutes