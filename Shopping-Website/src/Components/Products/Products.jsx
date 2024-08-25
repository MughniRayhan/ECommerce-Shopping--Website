import React, { useEffect, useState } from 'react'
import ProductCards from './ProductCards';

function Products() {
 const [products,setProducts] = useState([]);
 const [filteredProducts,setFilteredProducts] = useState([]);
 const [selectedCategory,setSelectedCategory] = useState("all");



 //fetch data
 const fetchData = async()=>{
  try{

    const response = await fetch("/productsData.json");
    const data = await response.json();
    setProducts(data)
    setFilteredProducts(data)

  }catch(error){
     console.log("error:",error)
  }
 }
 
 useEffect(()=>{
     fetchData();
 },[])

//filtering dada
 const filteredData = (category) =>{
  const filtered = (category === "all" ? {products} : products.filter((item)=> item.category === category));
  setFilteredProducts(filtered);
  setSelectedCategory(category)
 }


 //show all products
 const showAll = () =>{
  setFilteredProducts(products);
  setSelectedCategory("all");
 }
  return (
   <div className='  bg-white dark:bg-gray-900 dark:text-white' >
     <div className='max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12 pt-16'>
      
      <div className='text-center mx-auto mb-10 max-w-[600px]'>
        <p className='text-sm text-primary'>Top Selling Products For You</p>
        <h1 className='text-3xl font-bold'>Products</h1>
        <p className='text-xs text-gray-400'>Lorem ipsum dolor sit amet, consectetur
           adipisicing elit.
           exercitationem quod perferendis provident.
        </p>
        </div>

        {/* product cards */}
     <div>
      {/* all buttons */}
     <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 px-8 flex-wrap'>
        <button className='hover:text-primary ' onClick={showAll}>All Products</button>
        <button className='hover:text-primary' onClick={()=>filteredData("Dress")}>Clothing</button>
        <button className='hover:text-primary' onClick={()=>filteredData("Hoodies")}>Hoodies</button>
        <button className='hover:text-primary' onClick={()=>filteredData("Shoe")}>Shoe</button>
        <button className='hover:text-primary' onClick={()=>filteredData("Bag")}>Bag</button>
      </div>

      {/* cards */}

      <ProductCards products={filteredProducts}/>
     </div>
      <div className="container pt-16">


</div>


</div>
   </div>
  )
}

export default Products