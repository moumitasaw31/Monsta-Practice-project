'use client'
import React, { useState } from 'react'

export default function Checkout() {

    let [showShipAddress, setShowShipAddress] = useState(false)

    let handleForm = (e) => {

        if (e.target.checked) {

            setShowShipAddress(true)
        }
        else {
            setShowShipAddress(false)
        }



    }
    return (
        <div>
            <section className='py-12'>
                <div className='max-w-[1320px] mx-auto grid md:grid-cols-2 grid-cols-1 gap-5 w-full'>

                    <div>
                        <h1 className='text-[20px] bg-black p-2 text-white'>Billing Details</h1>
                        <form action="" className='border border-[#ccc] w-full p-5 '>

                            <div className='flex justify-between gap-5'>

                                <div>
                                    <div>
                                        <label htmlFor="">Name*</label>
                                        <input type="text" className='border border-[#ccc] w-full p-2 rounded mb-3' />
                                    </div>
                                    <div>
                                        <label htmlFor="">Billing Name*</label>
                                        <input type="text" className='border border-[#ccc] w-full p-2 rounded mb-3' />
                                    </div>


                                </div>

                                <div>
                                    <div>
                                        <label htmlFor="">Mobile Number*</label>
                                        <input type="tel" className='border border-[#ccc] w-full p-2 rounded mb-3' />
                                    </div>
                                    <div>
                                        <label htmlFor="">Billing Email*</label>
                                        <input type="email" className='border border-[#ccc] w-full p-2 rounded mb-3' />
                                    </div>


                                </div>
                            </div>

                            <div>
                                <label htmlFor="">Billing Mobile Number*</label>
                                <input type="text" className='border border-[#ccc] w-full p-2 rounded mb-3' />
                            </div>

                            <div>
                                <label htmlFor="">Billing Address*</label>
                                <input type="text" className='border border-[#ccc] w-full p-2 rounded mb-4' />
                            </div>

                            <div>
                                <select name="" id="" className='border border-[#ccc] w-full p-2 rounded mt-4 mb-3'>
                                    <option value="select">Select your country</option>
                                    <option value="india">India</option>
                                    <option value="aus">Australia</option>
                                    <option value="china">China</option>
                                </select>
                            </div>



                            <div className='flex justify-between gap-5'>


                                <div>
                                    <label htmlFor="">State*</label>
                                    <input type="text" className='border border-[#ccc] w-full p-2 rounded mb-3' />
                                </div>




                                <div>
                                    <label htmlFor="">City*</label>
                                    <input type="text" className='border border-[#ccc] w-full p-2 rounded mb-3' />
                                </div>



                            </div>



                            <div className='flex items-center gap-2 mb-3'>
                                <input type="checkbox" onChange={handleForm} className='size-5' />
                                <div>
                                    <button className='uppercase border bg-black text-white p-3 rounded text-[14px]'>Ship to a different address?</button>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="orderNotes">Order Notes</label>
                                <textarea placeholder='Notes about your order' name="orderNotes" id="orderNotes" className='w-full border border-[#ccc] h-[200px] text-[14px]'></textarea>
                            </div>

                        </form>
                    </div>

                    {
                        showShipAddress &&
                        <>
                            <div>
                                <h1 className='text-[20px] bg-black p-2 text-white'>Shipping address</h1>
                                <form action="" className='border border-[#ccc] w-full p-5 '>

                                    <div className='flex justify-between gap-5'>


                                        <div>
                                            <label htmlFor="">Shipping Name*</label>
                                            <input type="text" className='border border-[#ccc] w-full p-2 rounded mb-3' />
                                        </div>
                                        <div>
                                            <label htmlFor="">Shipping Email*</label>
                                            <input type="email" className='border border-[#ccc] w-full p-2 rounded mb-3' />
                                        </div>

                                    </div>

                                    <div>
                                        <label htmlFor="">Shipping Mobile Number*</label>
                                        <input type="text" className='border border-[#ccc] w-full p-2 rounded mb-3' />
                                    </div>

                                    <div>
                                        <label htmlFor="">Shipping Address*</label>
                                        <input type="text" className='border border-[#ccc] w-full p-2 rounded mb-4' />
                                    </div>

                                    <div>
                                        <select name="" id="" className='border border-[#ccc] w-full p-2 rounded mt-4 mb-3'>
                                            <option value="select">Select your country</option>
                                            <option value="india">India</option>
                                            <option value="aus">Australia</option>
                                            <option value="china">China</option>
                                        </select>
                                    </div>



                                    <div className='flex justify-between gap-5'>


                                        <div>
                                            <label htmlFor="">State*</label>
                                            <input type="text" className='border border-[#ccc] w-full p-2 rounded mb-3' />
                                        </div>




                                        <div>
                                            <label htmlFor="">City*</label>
                                            <input type="text" className='border border-[#ccc] w-full p-2 rounded mb-3' />
                                        </div>



                                    </div>

                                </form>
                            </div>



                        </>



                    }

                    <div>
                        <h1 className='text-[20px] bg-black p-2 text-white'>Your order</h1>

                        <table className='w-full border border-[#ccc]'>
                            <thead>
                                <tr className='bg-[#ccc]'>
                                    <th className='py-2'>Products</th>
                                    <th className='py-2'>Order</th>
                                </tr>
                            </thead>
                            <tbody className='text-center '>
                                <tr className='border border-[#ccc]'>
                                    <td className='py-3'>Gloria Shoe Racks × 1</td>
                                    <td className='py-3'>Rs. 2,900</td>
                                </tr>
                                <tr className='border border-[#ccc]'>
                                    <td className='py-3'>Hrithvik Stool × 1</td>
                                    <td className='py-3'>Rs. 6,000</td>
                                </tr>
                                <tr className='border border-[#ccc]'>
                                    <td className='py-3'>Caroline Study Tables × 1</td>
                                    <td className='py-3'>Rs. 2,500</td>
                                </tr>
                                <tr className='border border-[#ccc]'>
                                    <td className='py-3'>Cart Subtotal</td>
                                    <td className='py-3'>Rs. 11,400</td>
                                </tr>
                                <tr className='border border-[#ccc]'>
                                    <td className='py-3'>Discount (-)</td>
                                    <td className='py-3'>Rs. 0</td>
                                </tr>
                                <tr className='border border-[#ccc]'>
                                    <td className='py-3'>Order Total</td>
                                    <td className='py-3'>Rs. 11,400</td>
                                </tr>

                            </tbody>
                            <tfoot>
                                <tr className='border border-[#ccc]'>
                                    <td colSpan="2" className='text-right p-3'>
                                        <button className='uppercase border bg-black text-white p-3 rounded text-[14px]'>
                                            Place Order
                                        </button>
                                    </td>
                                </tr>
                            </tfoot>

                        </table>

                    </div>

                </div>


            </section>
        </div>
    )
}
