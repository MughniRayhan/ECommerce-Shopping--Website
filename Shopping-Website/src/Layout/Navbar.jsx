import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping, FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import DarkMood from './DarkMood';
import { FaBars } from 'react-icons/fa';

const Menu = [
  
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Top Rated",
  },
  {
    id: 3,
    name: "Kid's Wear",
  },
  {
    id: 4,
    name: "Men's Wear",
  },
 
];

const DropdownLinks = [
  {
    id: 1,
    name:"Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name:"Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name:"Top Rated",
    link: "/#",
  },
  
]
function Navbar({handleOrder}) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  
  return (
    <div className='shadow-lg bg-white dark:bg-gray-900 dark:text-white   z-40 sticky top-0 '>
        <div className='bg-primary/40 py-3 px-8  sm:py-2 relative'>
            <div className='container gap-4 flex justify-between items-center'>
             
           
                 <div className=' flex gap-2'>
                  {/* toggleBar */}
                 <div>
                   <button className='mt-3 text-xl sm:hidden block'  onClick={()=>setIsMenuOpen(!isMenuOpen)}
                      >
                        { isMenuOpen ?<FaXmark />:<FaBars  />}
                      </button>
                   
                  </div>

                  

                  <img src="/images/logo.png" alt="" className='w-10 '/>
                  <h1 className='font-bold text-2xl sm:text-3xl'>Sh<span className=' text-[#ed8900]'>op</span></h1>
                 </div>

              {/* search button */}
               <div className='flex justify-between gap-4  items-center'>
                 <div className='group relative hidden sm:block'>
                    <input 
                    type="text" 
                    placeholder='Search'
                    className='w-[200px] rounded-full focus:outline-none border border-gray-300 px-2 py-1 dark:border-gray-500 dark:bg-gray-800 ' />
                    <IoIosSearch className='absolute text-gray-500 hover:text-primary top-2 right-3' />
                  </div>

                  

                 {/* order button */}
                  <button onClick={handleOrder}
                  className='bg-gradient-to-r from-primary to-secondary text-white text-xl cursor-pointer py-2 px-2 rounded-full'>
                    <FaCartShopping />
                  </button>

                    {/* Dark mood button */}
                    <DarkMood/> 
                 
                   
               </div>
              
              
            </div>

        </div>

        {/* lowaer navbar */}
        <div className='sm:flex hidden  justify-center items-center gap-4 py-2 flex-row'>
       <ul className='flex items-center gap-10'>
        {Menu.map((data)=>(
          <Link to='/' key={data.id} className='hover:text-primary duration-200 ' >{data.name}</Link> 
        ))}
        {/* dropdown */}
        <li className='group relative cursor-pointer'>
          <a href="#"
          className='flex items-center gap-[2px] py-2'>
            Trending Products
            <span>
              <FaCaretDown 
              className='transition-all duration-200 group-hover:rotate-180'/>
            </span>
          </a>
          <div className='absolute z-[9999] hidden group-hover:block
          bg-white dark:bg-gray-900 w-[200px] rounded-md p-2 shadow-md'>
            <ul>
               {DropdownLinks.map((data)=>(
                <li key={data.id}>
                 <a href={data.link}
                 className='inline-block w-full rounded-md p-2 hover:bg-primary/20'
                 >
                  {data.name}
                 </a>
                </li>
               ))}
            </ul>
          </div>
        </li>
       </ul>
        </div>
 {/* mobile menu items */}
 { isMenuOpen &&
          
          <div className=' fixed z-40 bg-white dark:bg-gray-900 
          rounded w-[300px] shadow-lg'>
           <ul className="flex gap-4 flex-col sm:hidden px-8 py-8 ">
           {Menu.map((data)=>(
             <Link to='/'
              key={data.id}
             className='hover:bg-primary/40 rounded-full p-2 duration-200 '
              >
               {data.name}
             </Link> 
           ))}
           
          </ul>
          </div>
         
 }
       
        </div>
    
  )
}  

export default Navbar