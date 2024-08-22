import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMood from './DarkMood';
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
        <div className='bg-primary/40 py-3 px-16  sm:py-2 '>
            <div className='container gap-4 flex justify-between items-center'>
                 <div className='w-full'>
                  <h1 className='font-bold text-2xl sm:text-3xl'>Shop</h1>
                 </div>

              {/* search button */}
               <div className='flex justify-between gap-4  items-center'>
                 <div className='group relative hidden sm:block'>
                    <input 
                    type="text" 
                    placeholder='Search'
                    className='w-[200px] rounded-full border border-gray-300 px-2 py-1 dark:border-gray-500 dark:bg-gray-800 ' />
                    <IoIosSearch className='absolute text-gray-500 hover:text-primary top-2 right-3' />
                  </div>

                 {/* order button */}
                  <button
                  className='bg-gradient-to-r from-primary to-secondary text-white text-xl cursor-pointer py-2 px-2 rounded-full'>
                    <FaCartShopping />
                  </button>

                    {/* Dark mood button */}
                    <DarkMood/> 
                 
                   
               </div>
              
              
            </div>

        </div>

        <div className='  hidden sm:flex justify-center '>
        <div className='flex  items-center gap-10 py-2'>
        <a  href ="#" className='hover:text-primary duration-200 '>Home</a>
       
        </div>
        </div>
    </div>
  )
}

export default Navbar