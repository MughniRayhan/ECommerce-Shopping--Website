import React from 'react'
import { FaStar} from "react-icons/fa";

function TopProducts({handleOrder}) {
    const topProductsData=[
        {
            id: 1,
            img: "/images/top1.png",
            title: "Casual Wear",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, sequi! Quod adipisci quia asperiores placeat minus natus, voluptatibus error qui?"
        },
        {
            id: 2,
            img: "/images/top2.png",
            title: "Printed Shirt",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, sequi! Quod adipisci quia asperiores placeat minus natus, voluptatibus error qui?"
        },
        {
            id: 3,
            img: "/images/top3.png",
            title: "Women's Wear",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, sequi! Quod adipisci quia asperiores placeat minus natus, voluptatibus error qui?"
        }
    ]
  return (
    <div>
        <div className='container mx-auto '>
        <div className='text-left mb-28  mx-auto'>
        <p className='text-sm text-primary'>Top Rated Products For You</p>
        <h1 className='text-3xl font-bold'>Best Products</h1>
        <p className='text-xs text-gray-400'>Lorem ipsum dolor sit amet, consectetur
           adipisicing elit.
           exercitationem quod perferendis provident.
        </p>
        </div>

<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center '>
{topProductsData.map((data)=>(
   <div key={data.id}
   className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white 
   relative shadow-xl duration-high group max-w-[300px]'>

    {/* image  */}
    <div className='h-[70px]'>
        <img src={data.img} alt={data.title}
        className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md' />
    </div>
    {/* details */}
     <div className='p-4 text-center'>
        <div className='text-yellow-500 w-full flex items-center justify-center gap-1'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
        </div>

        <h1 className='text-xl font-bold'>{data.title}</h1>
        <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>
            {data.description}
        </p>

        <button className='bg-primary hover:scale-105 duration-300 text-white 
        py-1 px-4 rounded-full mt-4 group-hover:bg-white 
        group-hover:text-primary'
        onClick={()=>handleOrder()}
        >
            Order Now
        </button>
     </div>

   </div>
))}
</div>


        </div>
        
    </div>
  )
}

export default TopProducts