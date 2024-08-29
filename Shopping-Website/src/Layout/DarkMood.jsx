import React, { useEffect, useState } from 'react'
import { MdLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

function DarkMood() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem
        ("theme") : "light"
    );

    const element = document.documentElement;

    useEffect(()=>{
        if(theme === "dark"){
            element.classList.add("dark");
            localStorage.setItem("theme","dark");
        }else{
            element.classList.remove("dark");
            localStorage.setItem("theme", "light")
        }
    },[theme]);
    
  return (
    <div className='relative'>
        {
           theme==="light" ? 
           <MdOutlineDarkMode
           className={` cursor-pointer absolute -top-4 text-3xl text-gray-500 
            drop-shadow-[1px_1px_1px_rgba(0,0,0,0,1)] 
            z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
            onClick={()=>setTheme(theme=== "light"  ? "dark" : "light")}
            />
             : 
             < MdLightMode 
            className='cursor-pointer absolute -top-4  
            text-3xl text-yellow-500 drop-shadow-[1px_1px_1px_rgba(0,0,0,0,1)]' 
             onClick={()=>setTheme(theme=== "light"  ? "dark" : "light")}
             />
         }
        
    </div>
  )
}

export default DarkMood