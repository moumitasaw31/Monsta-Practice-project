'use client'
import React, { useState } from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { useSelector } from 'react-redux';


export default function () {

  // let [cart, setCart] = useState(true)  //  when redux nhi tha aise UI manage hua tha

  let { cart, loading } = useSelector((store) => store.myCart)    //  this is an array data

  // console.log(cart);

  {
    if (loading) {

      return <p className="text-center">Loading...</p>
    }

  }




  return (
    <div>


      <div className='max-w-[1320px] mx-auto py-12 '>



        {


          cart.length !== 0 ?

            <div>


              <table className=' w-full'>
                <thead>
                  <tr className=' bg-[#ccc] w-full'>
                    <th className='py-2'>Delete</th>
                    <th className='py-2'>Image</th>
                    <th className='py-2'>Product</th>
                    <th className='py-2'>Price</th>
                    <th className='py-2'>Quantity</th>
                    <th className='py-2'>Total</th>
                  </tr>

                </thead>



                <tbody>


                  {



                    cart.map((data, index) => {
                      return (
                        <tr className='border w-full' key={index}>
                          <td className='border text-[30px]'>

                            <span className='flex items-center justify-center font-bold '><RiDeleteBin5Line /></span>

                          </td>



                          <td className='border'>
                            <img src={data.productImg} alt="" className='w-[100px] h-full mx-auto' />
                          </td>
                          <td className='border text-center'>{data.productName}</td>
                          <td className='border text-center'>Rs. {data.productPrice}</td>
                          <td className='border text-center'>

                            {/* <input type="number" className='border w-[5px] text-center' /> */}
                            -{data.productQty}+

                          </td>
                          <td className='text-center'>
                            <h2 className='p-[5px_15px] cursor-pointer'>Rs. Rs. {data.productPrice * data.productQty} </h2>

                          </td>
                        </tr>

                      )
                    })
                  }





                  <tr className='border'>
                    <td colSpan="6" className='py-3 text-right px-4'>
                      <button className='bg-black text-white rounded px-4 py-2'>Update Cart</button>
                    </td>
                  </tr>

                </tbody>



              </table>




              <div className='grid md:grid-cols-2 grid-cols-1 gap-5 w-full mt-[50px]'>
                <div className='border border-[#ccc] h-[200px]'>
                  <form action=""  >
                    <h1 className='py-2 bg-black text-white text-[20px] font-bold p-2'>Coupon</h1>
                    <p className='p-3 text-[14px]'>Enter your coupon code if you have one.</p>
                    <div className='p-3 flex gap-3'>
                      <input type="text" placeholder='coupon code' className='border border-[#ccc] p-2' />
                      <button className='bg-black text-white rounded px-4 py-2 font-bold text-[14px]'>Apply Coupon</button>
                    </div>
                  </form>
                </div>

                <div className='border border-[#ccc]'>

                  <h1 className='py-2 bg-black text-white text-[20px] font-bold p-2'>Cart Totals</h1>

                  <div className='flex justify-between p-3 '>

                    <div className='leading-[50px]'>
                      <h2>Subtotal</h2>
                      <h2>Discount (-)</h2>
                      <h2>Total</h2>
                    </div>
                    <div className='leading-[50px]'>
                      <h3>Rs. 11,400</h3>
                      <h3>Rs. 0</h3>
                      <h3>Rs. 11,400</h3>

                    </div>





                  </div>

                  <div className='p-3 flex gap-3 justify-end'>

                    <button className='bg-[#C09578] hover:bg-sky-700 text-white rounded px-4 py-2 font-bold text-[14px]'>Proceed to Checkout</button>
                  </div>

                </div>

              </div>


            </div>


            :

            <div className='mb-3'>
              <figure>
                <img src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/wishlist-Empty.jpg" alt="" className='mx-auto' />
              </figure>
              <p className='text-center'>Your cart is empty!</p>
            </div>




        }







      </div>


    </div>
  )
}
