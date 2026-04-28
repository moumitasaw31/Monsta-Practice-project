import React from 'react'
import ProductCard from '../../common/ProductCard'

export default function ProductList({ productData }) {

    // console.log(productData);

    

    return (
        <div>
            <section>


                <div>
                    <div className='border border-[#ccc] p-5'>


                        <div className='flex gap-3 items-center justify-end'>
                            <p>Sort By :</p>
                            <select name="" id="" className='border p-2'>
                                <option value="">sort By</option>
                                <option value="">Featured product</option>
                                <option value="">Best Selling</option>
                                <option value="">New Arrivals</option>
                                <option value="">On Sale</option>
                            </select>
                            <h2 className='hidden md:block'>Showing 1–1 of 1 results</h2>
                        </div>
                    </div>

                    <div className='grid grid-cols-3 gap-5 py-5'>


                        {productData?.map((data, index) => <ProductCard key={index} data={data} />)}



                    </div>
                </div>









            </section>
        </div>
    )
}
