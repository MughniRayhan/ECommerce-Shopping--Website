import React from 'react'
import { FaInstagram,FaFacebook,FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa";


 const footerLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    { 
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },

]

function Footer() {
  return (
    <div className=' text-white  bg-stone-800' >
      
        <div className='container mx-auto '>
            <div className='grid md:grid-cols-3  pt-5 pb-44  '>
           <div className='py-8 px-4 '>
           <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>
           <img src="/images/logo.png" alt=""  className='max-w-[50px]'/>
           Shop</h1>
             <p className='text-gray-400'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae quos nihil similique perspiciatis voluptas ea modi nam tenetur soluta eaque.
             </p>
           </div>

           {/* footer links */}
           <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
            <div>
                <div className='p-8 px-4'>
                    <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>
                        Important Links
                    </h1>
                    <ul className='flex flex-col gap-3'>
                        {footerLinks.map((link)=>(
                            <li key={link.title}
                            className='cursor-pointer hover:text-primary'>
                             <span>{link.title }</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* links */}
            <div>
                <div className='p-8 px-4'>
                    <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>
                        Links
                    </h1>
                    <ul className='flex flex-col gap-3'>
                        {footerLinks.map((link)=>(
                            <li key={link.title}
                            className='cursor-pointer hover:text-primary'>
                             <span>{link.title }</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* sociallinks */}
            <div className='px-4 '>
                <div className='flex items-center mt-10 gap-3 '>
                    <a href="#">
                    <FaInstagram className='text-3xl' />
                    </a>
                    <a href="#">
                    <FaFacebook  className='text-3xl' />
                    </a>
                    <a href="#">
                    <FaLinkedin  className='text-3xl' />
                    </a>
                </div>
                <div className='mt-6 '>
                    <div className='flex items-center  gap-3 mt-3'>
                        <FaLocationArrow className='text-primary'/>
                        <p>Noida, Uttar Prades</p>
                    </div>
                    <div className='flex items-center gap-3 mt-3'>
                        <FaMobileAlt className='text-primary'/>
                        <p>+91 123456789</p>
                    </div>
                </div>
            </div>

           </div>
            </div>
        </div>
        
       </div>
  )
}

export default Footer