import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './app/pages/Layout/layout'
import Home from './app/pages/Home/home'
import New_order from './app/pages/New order/new_order'
import Order from './app/pages/Order/order'
import Patients from './app/pages/Patients/patients'
import Customer_card from './app/pages/Customer card/customer_card'
import Implementation from './app/pages/Implementation/implementation'
import Finance from './app/pages/Finance/finance'
import Basic from './app/pages/Basic Finance/basic'
import Analytics from './app/pages/Analytics/analytics'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/New_order' element={<New_order/>}/>
        <Route path='/Order' element={<Order/>}/>
        <Route path='/Patients' element={<Patients/>}/>
        <Route path='/Customer_card' element={<Customer_card/>}/>
        <Route path='/Implementation' element={<Implementation/>}/>
        <Route path='/Finance' element={<Finance/>}/>
        <Route path='/Basic' element={<Basic/>}/>
        <Route path='/Analytics' element={<Analytics/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App