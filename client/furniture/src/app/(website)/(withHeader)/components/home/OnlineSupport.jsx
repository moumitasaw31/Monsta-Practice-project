import React from 'react'
import { LiaGlobeSolid } from "react-icons/lia";
import { TiTickOutline } from "react-icons/ti";
import { TfiTimer } from "react-icons/tfi";




export default function OnlineSupport() {
    return (
        <div>
            <section className='bg-[#F8F9F9] py-12'>
                <div className='max-w-[1320px] mx-auto border flex items-center justify-around text-[25px]'>
                    <div>
                        <div className=' rounded-full border p-6' ><LiaGlobeSolid /></div>
                    </div>
                    <div className=' rounded-full border p-6'><TiTickOutline /></div>
                    <div className=' rounded-full border p-6'><TfiTimer /></div>
                </div>
            </section>
        </div>
    )
}
