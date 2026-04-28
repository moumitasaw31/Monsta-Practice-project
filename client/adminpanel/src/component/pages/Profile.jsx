import React, { useState } from 'react'
import { FaMobileButton } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link, NavLink } from 'react-router';
import { IoCloudUploadOutline } from "react-icons/io5";



export default function Profile() {

    let [changepass, setChangepass] = useState(0);
    console.log(changepass)
    return (
        <div>

            <section className='bg-[#F1F4F5]   border-y-2 border-[#E5E7EB] '>

                <div className='flex gap-2 border-b-2 border-[#E5E7EB] p-4 text-[#4B5563] font-[600]'>
                    <h2 className='  hover:text-[blue]'><Link to={"/dashboard"}>Home</Link> <span>/</span></h2>
                    <h2 className=' hover:text-[blue]'> <Link to={"/profile"}>Profile</Link> </h2>
                </div>


                <div className=' grid grid-cols-[30%_auto]  gap-2  px-4 py-5'>

                    <div className=' rounded-[8px] shadow-lg bg-white h-[340px]'>

                        <figure className=' py-7'>
                            <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/users/59c32aee-61e4-4868-b27c-e9339ab54e9a-1670132624.jpg"
                                alt="" className='mx-auto w-[100px] h-[100px] rounded-[50%]' />
                            <h2 className='text-center pt-2'>Admin</h2>
                        </figure>
                        <div className='bg-[#F6F9FD] p-[20px] rounded-[8px] leading-[40px]'>
                            <h2 className=' font-[700]'>Contact Information</h2>
                            <p className='flex items-center gap-2'> <FaMobileButton /> 1234567890</p>
                            <p className='flex items-center gap-2'> <MdEmail /> xyz@gmail.com</p>

                        </div>

                    </div>





                    <div className='rounded-[8px] shadow-lg bg-white p-5  h-[460px] '>

                        <div className='flex gap-5 text-[20px] text-[#4B5563] font-[500] border-b-[1px] border-[#ccc] mb-10'>
                            <h1 onClick={() => setChangepass(0)}
                                className={`${changepass == 0 ? "border-b-4 border-[#6B21A8]  " : " "}
                             px-4 py-2 text-[#6B21A8]`} > <NavLink to={""}> Edit Profile</NavLink></h1>




                            <h1 onClick={() => setChangepass(1)} className={` ${changepass == 1 ? "border-b-4 border-[#6B21A8] " : " "} px-4 py-2 cursor-pointer `} >Change Password</h1>
                        </div>


                        {changepass == 0 ?

                            <form action="" className=' grid grid-cols-[35%_auto] '>
                                <div className=' px-5'>
                                    <h2 className='font-[500]'>Choose Image</h2>

                                    <div className=" " >
                                        <input type="file" className='border-2 bg-[url(https://flowbite.com/images/logo.svg)] text-hidden bg-center bg-no-repeat border-[#E5E7EB] h-[250px] w-[250px] mb-4' />
                                        <input type="submit" value="Update Profile"
                                            className='bg-[#7E22CE] text-white p-[10px_20px] font-[500] rounded-[8px] mb-5 ' />
                                    </div>

                                </div>

                                <div className=''>
                                    <label htmlFor="name" className='font-[500]'>Name</label>
                                    <div className='mb-4'>
                                        <input type="text" className='border-[2px] border-[#E5E7EB] w-[100%] p-[8px] rounded-[7px] '
                                            name='name' placeholder='Name' />
                                    </div>

                                    <label htmlFor="email" className='font-[500]'>Email</label>
                                    <div className='mb-4'>
                                        <input type="email" className='border-[2px] border-[#E5E7EB] w-[100%] p-[8px] rounded-[7px] '
                                            name='email' placeholder='Email' />
                                    </div>

                                    <label htmlFor="mobile" className='font-[500]'>Mobile Number</label>
                                    <div className='mb-4'>
                                        <input type="tel" maxLength={10} className='border-[2px] border-[#E5E7EB] w-[100%] p-[8px] rounded-[7px] '
                                            name='email' placeholder='Number' />
                                    </div>

                                </div>

                            </form>


                            :

                            <form action="">

                                <div className='px-5'>
                                    <label htmlFor="CurrentPassword" className='font-[500]'>Current Password</label>
                                    <div className='mb-4'>
                                        <input type="password" className='border-[2px] border-[#E5E7EB] w-[100%] p-[8px] rounded-[7px] '
                                            name='Current Password' placeholder='Current Password' />
                                    </div>

                                    <label htmlFor="NewPassword" className='font-[500]'>New Password</label>
                                    <div className='mb-4'>
                                        <input type="password" className='border-[2px] border-[#E5E7EB] w-[100%] p-[8px] rounded-[7px] '
                                            name='email' placeholder='EmailNew Password' />
                                    </div>

                                    <label htmlFor="ConfirmPassword" className='font-[500]'>Confirm Password</label>
                                    <div className='mb-4'>
                                        <input type="password" className='border-[2px] border-[#E5E7EB] w-[100%] p-[8px] rounded-[7px] '
                                            name='ConfirmPassword' placeholder='Confirm Password' />
                                    </div>

                                    <div>
                                        <input type="submit" value="Change Password"
                                            className='bg-[#7E22CE] text-white p-[10px_20px] font-[500] rounded-[8px]  cursor-pointer mt-5' />
                                    </div>

                                </div>

                            </form>}

                    </div>


                </div>
            </section>

        </div>
    )
}

