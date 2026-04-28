'use client'
import React, { useState } from 'react'

export default function Wishlist() {

    let [wishList, setWishList] = useState(true)
    return (
        <div>


            <div className='max-w-[1320px] mx-auto '>

                {
                    wishList ?

                        <div className='mb-3'>
                            <figure>
                                <img src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/wishlist-Empty.jpg" alt="" className='mx-auto' />
                            </figure>
                            <p className='text-center'>Your wishlist is empty!</p>
                        </div>
                        :

                        <div>
                            <table className=' w-full'>
                                <tr className='py-2 bg-[#ccc] w-full text-center'>
                                    <th className='py-2'>Delete</th>
                                    <th className='py-2'>Image</th>
                                    <th className='py-2'>Product</th>
                                    <th className='py-2'>Price</th>
                                    <th className='py-2'>Stock Status</th>
                                    <th className='py-2'>Add To Cart</th>
                                </tr>

                                <tr className='border w-full'>
                                    <td className='border text-[50px]  text-center'>&times;</td>
                                    <td className='border'>
                                        <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617981904164Hrithvik%20Stool__.jpg" alt="" className='w-[100px] h-full mx-auto' />
                                    </td>
                                    <td className='border text-center'>Hrithvik Stool</td>
                                    <td className='border text-center'>Rs. 6,000</td>
                                    <td className='border text-center'>Out of Stock</td>
                                    <td className='text-center'>
                                        <button className='border  border-[#c09578] p-[5px_15px] cursor-pointer bg-[#c09578] text-white'>Add to cart</button>

                                    </td>
                                </tr>
                            </table>
                        </div>

                }






            </div>
        </div>
    )
}
