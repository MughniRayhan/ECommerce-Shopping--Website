import React from 'react'
import { Link } from 'react-router-dom'
function ProductCards({products}) {
  
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center 
    justify-center mt-4 shadow-sm'>
        {
            products.slice(0,8).map((product)=>(

               <div className=' pb-2 rounded-lg hover:scale-105 transition-all duration-300'
                key={product.id}>
                 <Link to={`products/${product.id}`}>
                 <img src={product.image} alt={product.title}
                 className='mx-auto w-full h-[300px] object-cover rounded-lg' />
                 </Link>
                 <div className='mt-3 px-4'>
                    <h4 className='text-base font-semibold mb-1'>{product.title}</h4>
                    <div>
                        <p className='text-gray-500'>{product.category}</p>
                        <p className='font-semibold text-primary'>${product.price}</p>
                    </div>
                 </div>
               </div>
            )
            
            )
        }
    </div>
  )
}

export default ProductCards