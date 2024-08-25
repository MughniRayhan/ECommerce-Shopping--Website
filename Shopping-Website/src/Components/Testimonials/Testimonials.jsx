import React from 'react'
import Slider from 'react-slick'

const TestimonialData = [
    {
        id:1,
        name: "Victor",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facilis, at ipsa quis repellat doloribus totam illum soluta! Quae, atque. Mollitia, minus. Assumenda debitis voluptatum ipsum unde exercitationem. Eveniet, veniam?",
        img: "/images/test1.png",
    },
    {
        id:2,
        name: "Saytya Nadella",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facilis, at ipsa quis repellat doloribus totam illum soluta! Quae, atque. Mollitia, minus. Assumenda debitis voluptatum ipsum unde exercitationem. Eveniet, veniam?",
        img: "/images/text2.png",
    },
    {
        id:3,
        name: "Virat",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facilis, at ipsa quis repellat doloribus totam illum soluta! Quae, atque. Mollitia, minus. Assumenda debitis voluptatum ipsum unde exercitationem. Eveniet, veniam?",
        img: "/images/test3.png",
    },
    {
        id:4,
        name: "Sachin",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facilis, at ipsa quis repellat doloribus totam illum soluta! Quae, atque. Mollitia, minus. Assumenda debitis voluptatum ipsum unde exercitationem. Eveniet, veniam?",
        img: "/images/test4.png",
    },
] 

function Testimonials() {



    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        cssEase: "linear",
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
              breakpoint: 10000,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }

  return (
    <div className='py-10 mb-10'>
        <div className='container mx-auto'>

        <div className='text-center mx-auto mb-10 max-w-[600px]'>
        <p className='text-sm text-primary'>What Our Customers are saying</p>
        <h1 className='text-3xl font-bold'>Testimonial</h1>
        <p className='text-xs text-gray-400'>Lorem ipsum dolor sit amet, consectetur
           adipisicing elit.
           exercitationem quod perferendis provident.
        </p>
        </div>

        {/* cards */}
        <div>
 <Slider {...settings}> 
{TestimonialData.map((data)=>(
<div key={data.id} className='my-6'>
<div 
 className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl
 dark:bg-gray-800 bg-primary/10 relative'>
   <div className='mb-4'>
    <img src={data.img} alt={data.name}
    className='rounded-full w-20 h-20' />
   </div>
   <div className='flex flex-col items-center gap-4'>
    <div className='space-y-3'>
    <p className='text-xs text-gray-500 '>{data.text}</p>
    <h1 className='text-xl font-bold text-black/80 dark:text-white'>{data.name}</h1>
    </div>
   </div>
   <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
 </div>
</div>

))}
 </Slider>
        </div>
        </div>
    </div>
  )
}

export default Testimonials