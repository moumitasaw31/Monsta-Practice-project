import React, { useState } from 'react'

import { Link } from 'react-router';
import { Sidebar } from './Sidebar';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { PiUserCircleFill } from "react-icons/pi";





export default function Listinterface({ icon, title, path }) {


    let [list, setList] = useState(0)

    // console.log(list)

    return (
        <>
      
          

        <div>

          
            <div className='py-1'>

                <ul className=''>
                    <li onClick={() => setList(!list ? 1 : 0)} className=' hover:bg-[#F3F4F6] p-2 group rounded-[7px] '>
                        <Link to={path} className='flex items-center gap-2.5 font-[500]  justify-between '>

                            <div className='flex items-center gap-2.5 font-[500]  justify-between '>
                                <i className={` text-[25px] ${title == "Users" ? "text-[black]" : "text-[#6B7280]"} text-[#6B7280] group-hover:text-[black]`}>
                                    {icon}</i>
                                {title}


                            </div>

                            <div>


                                {title == "Dashboard" ? " " : list == 1 ? <IoIosArrowUp className='text-[13px]' /> : <IoIosArrowDown className='text-[13px]' />}
                                



                            </div>


                        </Link>


                    </li>

                </ul>


                {list == 1

                    ?

                    // <ul>
                    //     <li >
                    //         <Link to={"#"} className={`flex items-center gap-2.5 text-[14px] font-[500] px-2.5 py-2 rounded-[7px] hover:bg-[#F3F4F6]`}>
                    //             <PiUserCircleFill className='text-[18px]' /> {title == "Users" ? <Link to={"/viewUser"}>ViewUser</Link> : " "}
                    //         </Link>
                    //     </li>

                    //     <li >
                    //         <Link to={"#"} className={`flex items-center gap-2.5 text-[14px] font-[500] px-2.5 py-2 rounded-[7px] hover:bg-[#F3F4F6]`}>
                    //             <PiUserCircleFill className='text-[18px]' /> {title == "Enquirys" ? <Link to={"/viewUser"}>Contact Enquirys</Link> : " "}
                    //         </Link>
                    //     </li>


                    // </ul>

                    <ul className='text-[14px] font-[500] px-2'>
                        <li className='px-2' >
                            <Link to={"#"} className={`flex items-center gap-2 `}>

                                {title == "Users" ? <li> <Link to={"/viewUser"} className='flex items-center gap-3'>
                                    <PiUserCircleFill />ViewUser</Link> </li> : " "}

                                {title == "Enquirys"

                                    ?
                                    < div className='flex flex-col gap-2'>
                                        <li> <Link to={"/contact-enquiry"} className='flex items-center gap-3'>
                                            <PiUserCircleFill />Contact Enquirys</Link> </li>

                                        <li> <Link to={"/newsletters"} className='flex items-center gap-3'>
                                            <PiUserCircleFill />Newsletters</Link> </li>

                                    </div>

                                    :

                                    " "}

                                {title == "Colors"

                                    ?
                                    < div className='flex flex-col gap-2'>
                                        <li> <Link to={"/add-color"} className='flex items-center gap-3'>
                                            <PiUserCircleFill />Add Color</Link> </li>

                                        <li> <Link to={"/view-color"} className='flex items-center gap-3'>
                                            <PiUserCircleFill />View Color</Link> </li>

                                    </div>

                                    :

                                    " "}

                                {title == "Materials"

                                    ?
                                    < div className='flex flex-col gap-2'>
                                        <li> <Link to={"/add-material"} className='flex items-center gap-3'>
                                            <PiUserCircleFill />Add Material</Link> </li>

                                        <li> <Link to={"/view-material"} className='flex items-center gap-3'>
                                            <PiUserCircleFill />View Material</Link> </li>

                                    </div>

                                    :

                                    " "}

                                {title == "Parent Categorys"

                                    ?
                                    < div className='flex flex-col gap-2'>
                                        <li> <Link to={"/add-category"} className='flex items-center gap-3'>
                                            <PiUserCircleFill />Add Category</Link> </li>

                                        <li> <Link to={"/view-category"} className='flex items-center gap-3'>
                                            <PiUserCircleFill />View Category</Link> </li>

                                    </div>

                                    :

                                    " "}

                                {title == "Sub Categorys"

                                    ?
                                    < div className='flex flex-col gap-2'>
                                        <li> <Link to={"/Add-Sub-Category"} className='flex items-center gap-3'>
                                            <PiUserCircleFill />Add Sub Category</Link> </li>

                                        <li> <Link to={"/View-Sub-Category"} className='flex items-center gap-3'>
                                            <PiUserCircleFill />View Sub Category</Link> </li>

                                    </div>

                                    :

                                    " "}

                                {title == "Sub Sub Categorys"

                                    ?
                                    < div className='flex flex-col gap-2'>
                                        <li> <Link to={"/Add-Sub-Sub-Category"} className='flex items-center gap-3'>
                                            <PiUserCircleFill />Add Sub Sub Category</Link> </li>

                                        <li> <Link to={"/View-Sub-Sub-Category"} className='flex items-center gap-3'>
                                            <PiUserCircleFill />View Sub Sub Category</Link> </li>

                                    </div>

                                    :

                                    " "}

                                {title == "Products"

                                    ?
                                    < div className='flex flex-col gap-2'>
                                        <li> <Link to={"/Add-Product"} className='flex items-center gap-3'>
                                            <PiUserCircleFill />Add Product</Link> </li>

                                        <li> <Link to={"/view-Product"} className='flex items-center gap-3'>
                                            <PiUserCircleFill />view Product</Link> </li>

                                    </div>

                                    :

                                    " "}

                                {title == "Why Choose Us"

                                    ?
                                    < div className='flex flex-col gap-2'>
                                        <li> <Link to={"/Add-Why-Choose-Us"} className='flex items-center gap-3'>
                                            <PiUserCircleFill />Add Why Choose Us</Link> </li>

                                        <li> <Link to={"/View-Why-Choose-Us"} className='flex items-center gap-3'>
                                            <PiUserCircleFill />View Why Choose Us</Link> </li>

                                    </div>

                                    :

                                    " "}

                                {title == "Orders"

                                    ?
                                    < div className='flex flex-col gap-2'>
                                        <li> <Link to={"/Orders"} className='flex items-center gap-3'>
                                            <PiUserCircleFill />Orders</Link> </li>

                                    </div>

                                    :

                                    " "}

                                {title == "Sliders"

                                    ?
                                    < div className='flex flex-col gap-2'>
                                        <li> <Link to={"/Add-Slider"} className='flex items-center gap-3'>
                                            <PiUserCircleFill />Add Slider</Link> </li>

                                        <li> <Link to={"/View-Slider"} className='flex items-center gap-3'>
                                            <PiUserCircleFill />View Slider</Link> </li>

                                    </div>

                                    :

                                    " "}

                                {title == "Country"

                                    ?
                                    < div className='flex flex-col gap-2'>
                                        <li> <Link to={"/Add-Country"} className='flex items-center gap-3'>
                                            <PiUserCircleFill />Add Country</Link> </li>

                                        <li> <Link to={"/View-Country"} className='flex items-center gap-3'>
                                            <PiUserCircleFill />View Country</Link> </li>

                                    </div>

                                    :

                                    " "}

                                {title == "Testimonials"

                                    ?
                                    < div className='flex flex-col gap-2'>
                                        <li> <Link to={"/Add-Testimonial"} className='flex items-center gap-3'>
                                            <PiUserCircleFill />Add Testimonial</Link> </li>

                                        <li> <Link to={"/View-Testimonial"} className='flex items-center gap-3'>
                                            <PiUserCircleFill />View Testimonial</Link> </li>

                                    </div>

                                    :

                                    " "}

                                {title == "Faqs"

                                    ?
                                    < div className='flex flex-col gap-2'>
                                        <li> <Link to={"/Add-Faq"} className='flex items-center gap-3'>
                                            <PiUserCircleFill />Add Faq</Link> </li>

                                        <li> <Link to={"/View-Faq"} className='flex items-center gap-3'>
                                            <PiUserCircleFill />View Faq</Link> </li>

                                    </div>

                                    :

                                    " "}
                            </Link>
                        </li>
                    </ul>



                    :

                    ""}


            </div>

        </div>
        </>
    )
}
