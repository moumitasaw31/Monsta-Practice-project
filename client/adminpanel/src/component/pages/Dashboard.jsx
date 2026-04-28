import React from 'react'
import { Link } from 'react-router'
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import Button from '../common folder/Button';
import { useLocation } from "react-router";
import { ToastContainer, toast } from 'react-toastify';




export default function Dashboard() {

    return (
        <div>
            <section className='bg-[#F1F4F5]   border-y-2 border-[#E5E7EB] '>

                <ToastContainer />

                <div className='flex gap-2 p-4 text-[#4B5563] font-[600]'>
                    <h2 className='  hover:text-[blue]'><Link to={"/dashboard"}>Home</Link> <span>/</span></h2>
                    <h2 className=' hover:text-[blue]'> <Link to={"/dashboard"}>Dashboard</Link> </h2>
                </div>
                <hr className='border-b-2 border-[#E5E7EB] ' />

                <div className='min-h-[600px]'>

                    <div className='max-w-[1320px] mx-auto grid grid-cols-3 gap-4 p-4 text-white h-[450px] '>


                        <div className='grow border bg-[#5956D3] shadow rounded-[10px] px-5 py-5 text-[20px] font-bold'>
                            <div className='flex justify-between items-center'>
                                <h1> <span className=' text-[30px]'>26K</span> (-12.4% ↓)</h1>
                                <i><PiDotsThreeOutlineVerticalFill /></i>
                            </div>
                            <h2 className='font-[500] text-[25px]'>Users</h2>
                        </div>

                        <div className='grow border bg-[#2998FE] shadow rounded-[10px] px-5 py-5 text-[20px] font-bold'>
                            <div className='flex justify-between items-center'>
                                <h1> <span className=' text-[30px]'>$6,200</span> (40.9% ↑)</h1>
                                <i><PiDotsThreeOutlineVerticalFill /></i>
                            </div>
                            <h2 className='font-[500] text-[25px]'>Product</h2>
                        </div>

                        <div className='grow border bg-[#FCB01E] shadow rounded-[10px] px-5 py-5 text-[20px] font-bold'>
                            <div className='flex justify-between items-center'>
                                <h1> <span className=' text-[30px]'>2.49%</span> (84.7% ↑)</h1>
                                <i><PiDotsThreeOutlineVerticalFill /></i>
                            </div>
                            <h2 className='font-[500] text-[25px]'>Category</h2>
                        </div>

                        <div className='grow border bg-[#E95353] shadow rounded-[10px] px-5 py-5 text-[20px] font-bold'>
                            <div className='flex justify-between items-center'>
                                <h1> <span className=' text-[30px]'>44K</span> (-23.6% ↓)</h1>
                                <i><PiDotsThreeOutlineVerticalFill /></i>
                            </div>
                            <h2 className='font-[500] text-[25px]'>Orders</h2>
                        </div>


                    </div>

                </div>




            </section>





        </div>
    )
}
