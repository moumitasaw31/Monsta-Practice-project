import React from 'react'

export default function TrendingCollection() {
    return (
        <div>

            <section >
                <div className='relative group' >
                    <img src="\images\monsta furniture (3).jpg" width="100%" className='h-[500px]' alt="" />

                    <div className='max-w-[1320px] mx-auto absolute top-0 left-30 py-[120px] group-hover:scale-105 overflow-hidden duration-150'>
                        <h1 className='text-[50px] font-bold'>New Trending Collection</h1>
                        <h2 className='text-[#00000080]'>We Believe That Good Design is Always in Season</h2>
                        <div className=' mt-[50px]'>
                            <button className='hover:bg-[#C09578] hover:text-[#FFFFFF] duration-500 border-2 border-[#C1987C] text-[#C1987C] font-bold text-[14px] p-4'>SHOPPING NOW</button>
                        </div>

                    </div>

                </div>
            </section>

        </div>
    )
}
