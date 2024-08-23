import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaStar} from "react-icons/fa";
function SingleProducts() {
    const {id} =useParams()
      
    const [products,setProducts] = useState([]);
    
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
    <div className='pt-24 max-w-screen-2xl container h-screen mx-auto xl:px-28 px-4  bg-white dark:bg-gray-900 dark:text-white'>
      <div className='p-3 max-w-7xl m-auto'>
        <div className='mt-6 sm:mt-10'>
            <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max'>
              <div>
                <img src={image} alt={title} className='w-full' />
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

                <p className='text-xl text-primary font-semibold sm:text-2xl'>${price}</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProducts