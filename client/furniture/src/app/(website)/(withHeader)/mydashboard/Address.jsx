import React from 'react'

export default function Address() {
    return (
        <div>
            <div>
                <p className='text-[14px] pb-3'>The following addresses will be used on the checkout page by default.</p>

                <div className='grid md:grid-cols-2 grid-cols-1 gap-5 w-full'>

                    <div>
                        <h1 className='text-[20px]'>Billing address</h1>
                        <form action="" className='border border-[#ccc] w-full p-5 rounded'>

                            <div><label htmlFor="">Billing Name*</label></div>
                            <div><input type="text" className='border border-[#ccc] w-full p-2 rounded mb-3' /></div>

                            <div><label htmlFor="">Billing Email*</label></div>
                            <div><input type="email" className='border border-[#ccc] w-full p-2 rounded mb-3' /></div>

                            <div><label htmlFor="">Billing Mobile Number*</label></div>
                            <div><input type="tel" className='border border-[#ccc] w-full p-2 rounded mb-3' /></div>

                            <div><label htmlFor="">Billing Address*</label></div>
                            <div><input type="text" className='border border-[#ccc] w-full p-2 rounded mb-3' /></div>

                            <div><label htmlFor="">Country*</label></div>

                            <div>
                                <select name="" id="" className='border border-[#ccc] w-full p-2 rounded mb-3'>
                                    <option value="india">India</option>
                                    <option value="aus">Australia</option>
                                    <option value="china">China</option>
                                </select>
                            </div>


                            <div><label htmlFor="">State*</label></div>
                            <div><input type="text" className='border border-[#ccc] w-full p-2 rounded mb-3' /></div>

                            <div><label htmlFor="">City*</label></div>
                            <div><input type="text" className='border border-[#ccc] w-full p-2 rounded mb-4' /></div>

                            <div className='flex justify-end'>
                                <button className='uppercase border bg-[#C09578] text-white p-3 rounded-4xl text-[14px]'>update</button>
                            </div>

                        </form>
                    </div>

                    <div>
                        <h1 className='text-[20px]'>Shipping address</h1>
                        <form action="" className='border border-[#ccc] w-full p-5 rounded'>

                            <div><label htmlFor="">Shipping Name*</label></div>
                            <div><input type="text" className='border border-[#ccc] w-full p-2 rounded mb-3' /></div>


                            <div><label htmlFor="">Shipping Email*</label></div>
                            <div><input type="email" className='border border-[#ccc] w-full p-2 rounded mb-3' /></div>

                            <div><label htmlFor="">Shipping Mobile Number*</label></div>
                            <div><input type="tel" className='border border-[#ccc] w-full p-2 rounded mb-3' /></div>

                            <div><label htmlFor="">Shipping Address*</label></div>
                            <div><input type="text" className='border border-[#ccc] w-full p-2 rounded mb-3' /></div>

                            <div><label htmlFor="">Country*</label></div>

                            <div>
                                <select name="" id="" className='border border-[#ccc] w-full p-2 rounded mb-3'>
                                    <option value="india">India</option>
                                    <option value="aus">Australia</option>
                                    <option value="china">China</option>
                                </select>
                            </div>


                            <div><label htmlFor="">State*</label></div>
                            <div><input type="text" className='border border-[#ccc] w-full p-2 rounded mb-3' /></div>

                            <div><label htmlFor="">City*</label></div>
                            <div><input type="text" className='border border-[#ccc] w-full p-2 rounded mb-4' /></div>

                            <div className='flex justify-end'>
                                <button className='uppercase border bg-[#C09578] text-white p-3 rounded-4xl text-[14px]'>update</button>
                            </div>

                        </form>
                    </div>


                </div>

            </div>
        </div>
    )
}
