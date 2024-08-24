import React from 'react'
import Hero from '../Hero/Hero'
import Products from '../Products/Products'
import TopProducts from '../TopProducts/TopProducts'
function Home() {
  return (
    <div className=' bg-white dark:bg-gray-900 dark:text-white'>
        <Hero />
        <Products/>
        <TopProducts/>
    </div>
  )
}

export default Home