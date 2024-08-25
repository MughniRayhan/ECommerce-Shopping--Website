import React from 'react'
import Navbar from './Layout/Navbar'
import { Outlet } from 'react-router-dom'
function App() {
  
  return (
    
    <div className=' bg-white dark:bg-gray-900 dark:text-white'>
    <Navbar />
    
    <Outlet />
   
  </div>
  )
}

export default App