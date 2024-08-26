import React, { useState } from 'react'
import Hero from '../Hero/Hero'
import Products from '../Products/Products'
import TopProducts from '../TopProducts/TopProducts'
import Banner from '../Banner/Banner'
import Subscribe from '../Subscribe/Subscribe'
import Testimonials from '../Testimonials/Testimonials'
import Footer from '../Footer/Footer'
import CustomerOrderSection from '../CustomerOrderSection/CustomerOrderSection'

function Home() {
  const [order,setOrder] = useState(false);

  const handleOrder = () =>{
    setOrder(!order)
  }
  return (
    
     <div >
        <Hero handleOrder={handleOrder}/>
        <Products handleOrder={handleOrder}/>
        <TopProducts handleOrder={handleOrder}/>
        <Banner/>
        <Subscribe/>
        <Testimonials/>
        <Footer/>
        <CustomerOrderSection order={order} setOrder={setOrder}/>
    </div>
   
  )
}

export default Home