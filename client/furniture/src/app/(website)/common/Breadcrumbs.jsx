import React from 'react'
import Link from 'next/link'

export default function Breadcrumbs({pageName}) {
    return (
        <div>

            <div className='max-w-7xl mx-auto border-b border-[#ccc] mb-5 py-[30px] '>

                <h1 className='text-center text-[35px] mb-2'>{pageName}</h1>

                <h2 className='text-center '> <Link href="/">home</Link> <span className='text-[#C09578]'>{'>'} {pageName}</span> </h2>
            </div>
        </div>
    )
}
