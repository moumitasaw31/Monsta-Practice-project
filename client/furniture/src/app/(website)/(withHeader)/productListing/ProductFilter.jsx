import React from 'react'

export default function () {
    return (
        <div>

            <div className='hidden lg:block'>
                <h1 className='text-[25px] mb-4'>Categories</h1>




                <div className='overflow-y-scroll h-[300px] border-b border-[#ccc] '>

                    <div className='mb-3'>

                        <h2 className='text-[18px] mb-3'>Tables</h2>

                        <div className='flex gap-2 text-[#5A5A5A]'>
                            <input type="checkbox" className='size-5' />
                            <h2>Side and End Tables</h2>
                        </div>

                        <div className='flex gap-2 text-[#5A5A5A]'>
                            <input type="checkbox" className='size-5' />
                            <h2>Side and End Tables</h2>
                        </div>

                        <div className='flex gap-2 text-[#5A5A5A]'>
                            <input type="checkbox" className='size-5' />
                            <h2>Side and End Tables</h2>
                        </div>

                        <div className='flex gap-2 text-[#5A5A5A]'>
                            <input type="checkbox" className='size-5' />
                            <h2>Side and End Tables</h2>
                        </div>

                        <div className='flex gap-2 text-[#5A5A5A]'>
                            <input type="checkbox" className='size-5' />
                            <h2>Side and End Tables</h2>
                        </div>
                    </div>

                    <div className='mb-3'>

                        <h2 className='text-[18px] mb-3'>Mirror</h2>

                        <div className='flex gap-2  text-[#5A5A5A]'>
                            <input type="checkbox" className='size-5' />
                            <h2>Wooden Mirrors</h2>
                        </div>
                    </div>

                    <div className='mb-3'>

                        <h2 className='text-[18px] mb-3'>Living Storage/collections</h2>

                        <div className='flex gap-2 text-[#5A5A5A]'>
                            <input type="checkbox" className='size-5' />
                            <h2>Prayer Units</h2>
                        </div>
                    </div>

                    <div className='mb-3'>

                        <h2 className='text-[18px] mb-3'>Sofa Cum Bed</h2>

                        <div className='flex gap-2 text-[#5A5A5A]'>
                            <input type="checkbox" className='size-5' />
                            <h2>Wooden Sofa Cum Bed</h2>
                        </div>
                    </div>

                    <div className='mb-3'>

                        <h2 className='text-[18px] mb-3'>Sofa Sets</h2>

                        <div className='flex gap-2 text-[#5A5A5A]'>
                            <input type="checkbox" className='size-5' />
                            <h2>Sofa Cover</h2>
                        </div>


                    </div>

                    <div className='mb-3'>

                        <h2 className='text-[18px] mb-3'>Swing Jhula</h2>

                        <div className='flex gap-2 text-[#5A5A5A]'>
                            <input type="checkbox" className='size-5' />
                            <h2>Wooden Jhula</h2>
                        </div>


                    </div>


                </div>

                <div className='border-b border-[#ccc]'>
                    <h2 className='text-[25px] mb-4 mt-4'>Material</h2>
                    <div className='mb-3'>

                        <div className='flex gap-2 text-[#5A5A5A]'>
                            <input type="checkbox" className='size-5' />
                            <h2>Rose Wood</h2>
                        </div>
                    </div>

                </div>


                <div>
                    <h2 className='text-[25px] mb-4 mt-4'>Color</h2>
                    <div className='mb-3'>

                        <div className='flex gap-2 text-[#5A5A5A]'>
                            <input type="checkbox" className='size-5' />
                            <h2>Burnt Amber</h2>
                        </div>
                    </div>

                    <div className='mb-3'>

                        <div className='flex gap-2 text-[#5A5A5A]'>
                            <input type="checkbox" className='size-5' />
                            <h2>Mango Green</h2>
                        </div>
                    </div>

                </div>


                <div>
                    <h2 className='text-[25px] mb-4 mt-4'>Filter by price</h2>
                    <div className='mb-3'>

                        <div >
                            <input type="range" className='w-full' />

                        </div>
                        <p>Rs. 0 - Rs. 200000</p>

                        <div>
                            <button className='bg-black text-white p-[5px_10px] rounded'>filter</button>
                        </div>

                    </div>



                </div>







            </div>


        </div>
    )
}
