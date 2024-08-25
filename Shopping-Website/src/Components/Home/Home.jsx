import React from 'react'
import Hero from '../Hero/Hero'
import Products from '../Products/Products'
import TopProducts from '../TopProducts/TopProducts'
import Banner from '../Banner/Banner'
import Subscribe from '../Subscribe/Subscribe'
import Testimonials from '../Testimonials/Testimonials'
import Footer from '../Footer/Footer'
function Home() {
  return (
    <div >
        <Hero />
        <Products/>
        <TopProducts/>
        <Banner/>
        <Subscribe/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default Home