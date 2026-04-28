import React from 'react'
import Breadcrumbs from '../../common/Breadcrumbs'
import ProductFilter from './ProductFilter'
import ProductList from './ProductList'
import { productsApi } from '../../apiServices/productsApi'

export default async function page() {

  let pageName = "Product Listing"


  //carry product from api's
  let productData = await productsApi()

  // console.log("data", productData.data.products)

  return (
    <div>
      <Breadcrumbs pageName={pageName} />


      <div className='max-w-[1320px] mx-auto grid p-5 lg:grid-cols-[20%_auto] gap-10'>

        <ProductFilter />
        <ProductList productData={productData} />





        {/* <ProductList productData={productData.data.products} /> */}


      </div>





    </div>
  )
}
