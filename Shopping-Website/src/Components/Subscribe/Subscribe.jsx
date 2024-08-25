import React from 'react'


function Subscribe() {
  return (
    <div className='mb-20 bg-gray-100 dark:bg-gray-800 bg-gradient-to-r from-primary to-secondary' >
        <div className='container mx-auto py-10 '>
         <div className='space-y-6 sm:max-w-xl max-w-sm mx-auto flex flex-col justify-center items-center'>
            <h1 className='text-2xl text-white text-center sm:text-left sm:text-4xl font-semibold'>Get Notified About New Product</h1>
         <input type="text"
         placeholder='Enter Your Email' 
         className=' w-full p-3  dark:bg-gray-800 dark:text-white '
         />
         </div>
        </div>
    </div>
  )
}

export default Subscribe