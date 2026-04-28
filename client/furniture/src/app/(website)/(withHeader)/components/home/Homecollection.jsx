import React from 'react'

export default function Homecollection() {
    return (
        <>


            <section className='py-5 border-b border-b-[#dddcdcb0]'>
                <div className='max-w-[1170px] mx-auto grid md:grid-cols-3 grid-cols-1 justify-center lg:gap-5 '>
                    <figure className='group overflow-hidden relative lg:px-0 px-3 lg:mt-0 mt-3'>
                        <img src="\images\monsta furniture.webp" alt="" className=' w-full group-hover:scale-110 duration-200 hover:shadow' />
                        <div className='absolute top-0 p-5 w-full h-full'>
                            <h3 className=' text-[18px]'> Design Creative</h3>
                            <h1 className='text-[25px] font-bold'>Chair Collection</h1>
                        </div>

                    </figure>
                    <figure className='group overflow-hidden relative lg:px-0 px-3 lg:mt-0 mt-3'>
                        <img src="\images\monsta furniture (1).webp" alt="" className='w-full group-hover:scale-110 duration-200 hover:shadow' />
                        <div className='absolute top-0 p-5 w-full h-full'>
                            <h3 className=' text-[18px]'> Design Creative</h3>
                            <h1 className=' text-[25px] font-bold'>Chair Collection</h1>
                        </div>

                    </figure>
                    <figure className='group overflow-hidden relative lg:px-0 px-3 lg:mt-0 mt-3'>
                        <img src="\images\monsta furniture.webp" alt="" className='w-full group-hover:scale-110 duration-200 hover:shadow' />
                        <div className='absolute top-0 p-5 w-full h-full'>
                            <h3 className=' text-[18px]'> Design Creative</h3>
                            <h1 className=' text-[25px] font-bold'>Chair Collection</h1>
                        </div>

                    </figure>

                </div>
            </section>



        </>
    )
}
