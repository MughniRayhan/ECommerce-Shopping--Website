import React, { useState } from 'react'
import Navbar from './Layout/Navbar'
import { Outlet } from 'react-router-dom'
import CustomerOrderSection from './Components/CustomerOrderSection/CustomerOrderSection';
function App() {
  
  const [order,setOrder] = useState(false);

  const handleOrder = () =>{
    setOrder(!order)
  }
  return (
    
   
     <div className=' bg-white dark:bg-gray-900 dark:text-white'>
    <Navbar handleOrder={handleOrder} />
    
    <Outlet handleOrder={handleOrder}/>
    <CustomerOrderSection order={order} setOrder={setOrder}/>
  </div>
  )
}

export default App