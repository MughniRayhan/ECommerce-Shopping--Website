import React from 'react'
import Hero from '../Hero/Hero'
import Products from '../Products/Products'
import TopProducts from '../TopProducts/TopProducts'
import Banner from '../Banner/Banner'
import Subscribe from '../Subscribe/Subscribe'
function Home() {
  return (
    <div className=' bg-white dark:bg-gray-900 dark:text-white'>
        <Hero />
        <Products/>
        <TopProducts/>
        <Banner/>
        <Subscribe/>
    </div>
  )
}

export default Home