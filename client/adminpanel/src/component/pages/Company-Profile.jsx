import React from 'react'
import Button from '../common folder/Button'
import { Link } from 'react-router'


export default function CompanyProfile() {
    return (
        <div>
            <section className='border-y-2 px-5  border-[#E5E7EB] bg-[#F1F4F5]'>
                <div className='py-5'>
                    <h1 className='text-[18px]'>Company Profile</h1>
                    <p className='text-[14px] text-[#a9a9a9]'> <span className='text-[#0000FF] '> <Link to={"/dashboard"}>Dashboard</Link> </span> / Company Profile</p>
                </div>

                <div className='bg-white shadow-lg rounded-lg p-5'>


                    <form action="">
                        <div className='grid grid-cols-[30%_auto] gap-5'>
                            <div className=''>
                                <label htmlFor="" className='font-[500]'>Category Image</label>
                                <input type="file" className='border-2 bg-[url(https://flowbite.com/images/logo.svg)] h-[200px] w-[100%] text-hidden bg-center bg-no-repeat border-[#E5E7EB] mb-4' />

                            </div>
                            <div>
                                <div className='mb-3'>
                                    <label htmlFor="" className='font-[500]'>Name</label>
                                    <input type="text" placeholder='Name' name='profileName' className='border-2 w-[100%] border-[#E5E7EB] p-2 rounded-[8px]' />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="" className='font-[500]'>Email</label>
                                    <input type="email" placeholder='Email' name='profileEmail' className='border-2 border-[#E5E7EB] w-[100%]  p-2 rounded-[8px]' />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="" className='font-[500]'>Mobile Number</label>
                                    <input type="tel" maxLength={"10"} placeholder='Mobile Number' name='profileNumber' className='border-2 border-[#E5E7EB] w-[100%] p-2 rounded-[8px]' />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="" className='font-[500] text-[14px]'>Address</label>
                            <textarea name="profileAddress" id="" placeholder='Address' className='w-[100%] h-[100px] border-2 border-[#E5E7EB] resize-none p-2 rounded-lg '></textarea>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="" className='font-[500] text-[14px]'>Google Map URL</label>
                            <textarea name="profileAddress" id="" placeholder='Google Map URL' className='w-[100%] h-[100px] border-2 border-[#E5E7EB] resize-none p-2 rounded-lg '></textarea>
                        </div>

                        <div className='w-full border-2 border-[#E5E7EB] p-2 rounded-lg '>
                            <iframe className='w-[100%]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.4191233050346!2d88.4126057!3d22.5259672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275f9dd460479%3A0x2f9aa8ad8f6b9585!2sHousymart!5e0!3m2!1sen!2sin!4v1754248423888!5m2!1sen!2sin"></iframe>
                        </div>

                        <Button label={"Update Company Profile"} className="bg-[#7E22CE] text-[14px] my-7"/>
                    </form>




                </div>

            </section >
        </div >
    )
}
