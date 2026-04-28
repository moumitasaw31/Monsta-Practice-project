"use client"
import React, { useEffect } from 'react'
import { IoSearch } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/app/redux/slice/userSlice';
import { useRouter } from 'next/navigation';
import { fetchCartData } from '@/app/redux/slice/cartSlice';



export default function Header() {

    let dispatch = useDispatch()

    let router = useRouter()
    let user = useSelector((store) => store.myUser.user)

    let cart = useSelector((store) => store.myCart.cart)

    console.log(cart);


    useEffect(() => {
        dispatch(fetchCartData())
    }, [dispatch])





    let logoutUser = () => {

        dispatch(logout())          //  logout function call //  set kiya kam ho jaye
        router.replace('/login')

    }

    // console.log(user)
    return (
        <>
            <section className='border-b border-b-[#dddcdcb0] lg:block hidden'>

                <div className='max-w-[1320px] mx-auto lg:flex justify-between my-3 text-[14px] lg:ps-0 ps-5 px-4'>
                    <div className='mb-2 lg:mb-0'>
                        <h1>Contact us 24/7 : +91-98745612330 / furnitureinfo@gmail.com</h1>
                    </div>
                    <div>

                        {user ?    // agar data hai

                            <div className='flex gap-3 items-center'>

                                <div>{user.userName}</div>

                                <button className='bg-[#FF9980] p-2' onClick={logoutUser}>  Logout </button>
                            </div>

                            :
                            <button> <Link href='/login'>Login</Link>  / <Link href="/registration"> Register </Link></button>

                        }
                    </div>
                </div>
            </section>

            <section className='border-b border-b-[#dddcdcb0] lg:py-7'>


                <div className='max-w-[1320px] mx-auto flex justify-between lg:py-0 py-8 lg:px-0 px-4'>


                    <div>
                        <Link href={'/'}><img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/company-profile/logo/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png" alt="" className='lg:w-[150px] w-20 h-full' /></Link>
                    </div>


                    <div className=' flex items-center lg:gap-4 gap-2'>

                        <div className='relative hidden lg:block'>

                            <input type="search" placeholder='Search Products....' className='border border-[#dddcdcb0] text-[12px] w-[250px] p-3' />

                            <button className='absolute top-0 right-2 h-full cursor-pointer'><IoSearch /></button>

                        </div>


                        <div className='border border-[#dddcdcb0] w-full h-full flex items-center lg:px-3 px-2 rounded'>
                            <FaHeart className='lg:text-[20px] text-[16px]' />

                        </div>


                        <div className='flex items-center lg:gap-3 gap-1 justify-between border border-[#dddcdcb0] w-full h-full px-3 rounded'>

                            <Link href='/cart'>
                                <h2 className='rounded lg:px-2 px-1 bg-[#C09578] text-white' > {cart.length} </h2>
                            </Link>
                            <FaCartShopping className='lg:text-[20px] text-[16px]' />
                            <h2 className='flex items-center lg:gap-2 gap-1'>Rs.0.00 <RiArrowDropDownLine className='lg:text-[30px] text-[18px]' /></h2>

                        </div>

                        <div className='md:hidden w-full h-full rounded border flex items-center px-1'>
                            <IoMdMenu />

                        </div>

                    </div>

                </div>








            </section>

            <section className='border-b border-b-[#dddcdcb0] lg:block hidden'>
                <div className='max-w-[1320px] mx-auto  flex justify-center items-center lg:gap-10 gap-3 font-bold  text-[12px]'>
                    <div className='text-[#C09578] cursor-pointer'> <Link href="/">HOME</Link></div>
                    <div className=' lg:p-3 relative group cursor-pointer '>
                        <span className='hover:text-[#C09578] flex items-center duration-500'>LIVING <RiArrowDropDownLine className='lg:text-[30px] ' /></span>

                        <div className='invisible group-hover:visible duration-200'>


                            <div className='border w-[600px]   py-5 flex gap-[70px] absolute top-full left-[-10%] bg-white px-5 '>


                                <div className='w-[30%]'>
                                    <div className='text-[14px] tracking-[1px] uppercase'> Tables </div>
                                    <ul className='leading-8 pt-3 text-[#8d8c8a]'>
                                        <li>Side and End Tables</li>
                                        <li>Nest Of Tables</li>
                                        <li>Coffee Table Sets</li>
                                        <li>Coffee Tables</li>
                                    </ul>
                                </div>



                                <div className=' w-[35%]'>
                                    <div className='text-[14px] tracking-[1px] uppercase'>Mirror </div>
                                    <ul className=' pt-3 text-[#8d8c8a]'>
                                        <li>Wooden Mirror</li>

                                    </ul>

                                </div>

                                <div>
                                    <div className='text-[14px] tracking-[1px] uppercase'>Living Storage/collections </div>
                                    <ul className='leading-8 pt-3 text-[#8d8c8a]'>
                                        <li>Prayer Units</li>
                                        <li>Display Unit</li>
                                        <li>Shoe Racks</li>
                                        <li>Chest Of Drawers</li>
                                        <li>Cabinets and Sideboard</li>
                                        <li>Bookshelves</li>
                                        <li>Tv Units</li>
                                    </ul>
                                </div>

                            </div>



                        </div>


                    </div>

                    <div className=' lg:p-3 relative group cursor-pointer '><span className='hover:text-[#C09578] flex items-center duration-500 '>SOFA <RiArrowDropDownLine className='lg:text-[30px]' /></span>

                        <div className='invisible group-hover:visible duration-200'>


                            <div className='border w-[600px]   py-5 flex gap-[70px] absolute top-full left-[-10%] bg-white px-5 '>


                                <div className='w-[30%]'>
                                    <div className='text-[14px] tracking-[1px] uppercase'> Tables </div>
                                    <ul className='leading-8 pt-3 text-[#8d8c8a]'>
                                        <li>Side and End Tables</li>
                                        <li>Nest Of Tables</li>
                                        <li>Coffee Table Sets</li>
                                        <li>Coffee Tables</li>
                                    </ul>
                                </div>



                                <div className=' w-[35%]'>
                                    <div className='text-[14px] tracking-[1px] uppercase'>Mirror </div>
                                    <ul className=' pt-3 text-[#8d8c8a]'>
                                        <li>Wooden Mirror</li>

                                    </ul>

                                </div>

                                <div>
                                    <div className='text-[14px] tracking-[1px] uppercase'>Living Storage/collections </div>
                                    <ul className='leading-8 pt-3 text-[#8d8c8a]'>
                                        <li>Prayer Units</li>
                                        <li>Display Unit</li>
                                        <li>Shoe Racks</li>
                                        <li>Chest Of Drawers</li>
                                        <li>Cabinets and Sideboard</li>
                                        <li>Bookshelves</li>
                                        <li>Tv Units</li>
                                    </ul>
                                </div>

                            </div>



                        </div>
                    </div>
                    <div className=' lg:p-3 relative group cursor-pointer '> <span className='hover:text-[#C09578] flex items-center duration-500'>PAGES    <RiArrowDropDownLine className='lg:text-[30px]' /></span>

                        <div className='invisible group-hover:visible duration-200'>


                            <div className='border w-[600px]   py-5 flex gap-[70px] absolute top-full left-[-10%] bg-white px-5 '>


                                <div className='w-[30%]'>
                                    <div className='text-[14px] tracking-[1px] uppercase'> Tables </div>
                                    <ul className='leading-8 pt-3 text-[#8d8c8a]'>
                                        <li>Side and End Tables</li>
                                        <li>Nest Of Tables</li>
                                        <li>Coffee Table Sets</li>
                                        <li>Coffee Tables</li>
                                    </ul>
                                </div>



                                <div className=' w-[35%]'>
                                    <div className='text-[14px] tracking-[1px] uppercase'>Mirror </div>
                                    <ul className=' pt-3 text-[#8d8c8a]'>
                                        <li>Wooden Mirror</li>

                                    </ul>

                                </div>

                                <div>
                                    <div className='text-[14px] tracking-[1px] uppercase'>Living Storage/collections </div>
                                    <ul className='leading-8 pt-3 text-[#8d8c8a]'>
                                        <li>Prayer Units</li>
                                        <li>Display Unit</li>
                                        <li>Shoe Racks</li>
                                        <li>Chest Of Drawers</li>
                                        <li>Cabinets and Sideboard</li>
                                        <li>Bookshelves</li>
                                        <li>Tv Units</li>
                                    </ul>
                                </div>

                            </div>



                        </div>

                    </div>
                    <div className='cursor-pointer'> <Link href="/contact-us">CONTACT US</Link>  </div>

                </div>
            </section>



        </>
    )
}
