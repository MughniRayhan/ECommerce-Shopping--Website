import React, { useEffect, useState } from 'react'

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
    },[theme])
  return (
    <div className='relative'>
        <button 
        className={` absolute -top-2 w-[40px] sm:w-[50px] h-[20px] rounded-full p-2
         bg-gradient-to-r from-sky-600 to-white drop-shadow-[1px_1px_1px_rgba(0,0,0,0,1)] 
         z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
         onClick={()=>setTheme(theme=== "light"  ? "dark" : "light")}
         ></button>

<button 
        className=' absolute -top-2  w-[40px] sm:w-[50px] h-[20px] rounded-full p-2
         bg-gradient-to-r from-white to-gray-900 drop-shadow-[1px_1px_1px_rgba(0,0,0,0,1)]' 
         onClick={()=>setTheme(theme=== "light"  ? "dark" : "light")}
         >

         </button>
    </div>
  )
}

export default DarkMood