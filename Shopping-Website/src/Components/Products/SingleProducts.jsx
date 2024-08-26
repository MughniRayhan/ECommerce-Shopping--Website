import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaStar} from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
function SingleProducts() {
 
    const {id} =useParams()
      
    const [products,setProducts] = useState([]);
    const [count,setCount] =useState(0)
    
    useEffect(()=>{
        const fetchData = async() =>{
            try{
                const response = await fetch("/productsData.json");
                const data = await response.json();
                const product = data.filter((p)=> p.id == id);
                setProducts(product[0]);
            }catch(error){
                console.log(error)
            }
        }
        fetchData();
    },[id])

    const {title,category,price,image} = products;
  return (
    <div className='pt-12  max-w-screen-2xl container sm:h-screen mx-auto xl:px-28 px-4  bg-white dark:bg-gray-900 dark:text-white'>
        <Link to='/' className=' sm:hidden  
                      hover:text-primary  px-2 rounded-full'>
                     Go to Home Page
                        </Link>
      <div className='p-3 max-w-7xl m-auto '>
        <div className='mt-6 sm:mt-10'>
            <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max '>
                
              <div>
                <img src={image} alt={title} className='w-full h-[400px] rounded-lg' />
              </div>

              {/* product details */}
              <div>
                <h1 className='text-left font-bold'>{title}</h1>
                <p className='mt-3 text-gray-600 text-base leading-6 text-justify sm:text-left'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ex quaerat. Culpa, labore vel at, explicabo in nesciunt aliquam facere modi doloribus quasi cumque. Qui laudantium repellat deleniti magni. Quaerat a labore amet saepe magni atque esse molestiae, neque aperiam ipsam ad fugit velit, assumenda perferendis odio molestias minima dignissimos?
                </p>

                <span className='my-2 text-xl text-yellow-400 flex items-center gap-1 sm:my-4'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                </span>

                <p className='text-xl text-red-500 font-semibold sm:text-2xl mb-1'>${price}</p>

                {/* quantity */}
                <div className='text-left flex flex-row gap-4 w-full '>
                  <label className='font-semibold'>Quantity</label>
                    <div className='flex flex-row gap-1 text-primary
                     font-semibold'>
                      <button 
                      onClick={()=>setCount((count)=>count-1)} 
                      disabled={count===0 ? true : false}
                      className='px-2  border border-gray-400  hover:border-primary'
                      >-</button>
                      <h3 className='px-6  border border-gray-400 hover:border-primary'>{count}</h3>
                      <button  onClick={()=>setCount((count)=>count+1)}
                      className='px-2  border border-gray-400 hover:border-primary' >+</button>
                    </div>
                </div>

                {/* order button */}
                <div className='w-full text-left my-4'>
                  <button className='flex justify-center items-center gap-2 w-full py-3 px-4
                  bg-primary text-white font-bold rounded-lg 
                   shadow-slate-600 hover:bg-white hover:text-primary border border-primary lg:m-0 md:px-6'
                   onClick={()=>handleOrder()}
                   >
                    <span>Order Now</span>
                    <FaArrowAltCircleRight />
                  </button>
                </div>
              </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProducts