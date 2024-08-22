import React from 'react'
import Slider from "react-slick";

function Hero() {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        cssEase: "ease-in-out",
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: true,
    }
    const  imageList = [
        {
            id: 1,
            img: "/images/img1.png",
            title:"Upto 50% off on all Men's Wear",
            description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae omnis aspernatur itaque officia quasi, iste placeat asperiores, laboriosam esse inventore aliquam eligendi corporis iure labore. Quas expedita esse architecto asperiores?"
        },
        {
            id: 2,
            img: "/images/img2.png",
            title:"Upto 30% off on all Women's Wear",
            description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae omnis aspernatur itaque officia quasi, iste placeat asperiores, laboriosam esse inventore aliquam eligendi corporis iure labore. Quas expedita esse architecto asperiores?"
        },
        {
            id: 3,
            img: "/images/img3.png",
            title:"Upto 70% off on all Products Sale",
            description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae omnis aspernatur itaque officia quasi, iste placeat asperiores, laboriosam esse inventore aliquam eligendi corporis iure labore. Quas expedita esse architecto asperiores?"
        },
    ];
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] 
  bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white'>
        <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2  right-0 rounded-3xl rotate-45 -z[8]'>
        </div>
        <div className='container pb-8 sm:pb-0'>
         <Slider {...settings}>
    {imageList.map((data)=>(
             <div>
             <div className='grid grid-cols-1 sm:grid-cols-2 '>
               <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 '>
                 <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                 <p className='text-sm'>{data.description}</p>
                <div>
                <button className='bg-gradient-to-r from-primary to-secondary
                      hover:scale-105 duration-200 text-white mt-2 py-2 px-4 rounded-full'>
                       Order Now
                 </button>
                </div>
               </div>
 
               <div className='order-1 sm:order-2 '>
                 <div>
                    <img
                    src={data.img} alt=""
                    className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto' />
                 </div>
               </div>
 
 
             </div>
           </div>
    ))}
         </Slider>
        </div>
    </div>    
  )
}

export default Hero