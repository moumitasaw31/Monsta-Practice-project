import React from 'react'
import { PiCircleDashedFill } from "react-icons/pi";
import Listinterface from './Listinterface';
import { FaCommentAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { IoColorFilter } from "react-icons/io5";
import { SiMaterialdesignicons } from "react-icons/si";
import { RiMenu4Fill } from "react-icons/ri";
import { HiShoppingBag } from "react-icons/hi";
import { FaClockRotateLeft } from "react-icons/fa6";
import { LuNotebookPen } from "react-icons/lu";
import { FaSliders } from "react-icons/fa6";
import { MdOutlineAirlineStops } from "react-icons/md";
import { FaUserPen } from "react-icons/fa6";
import { FcFaq } from "react-icons/fc";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { Link } from 'react-router';





export function Sidebar() {

  return (
    <div>

      <div className=' px-3 h-screen overflow-y-scroll'>
        <figure className='py-3'>
          <Link to={"/dashboard"}><img src="https://www.wscubetech.com/images/wscube-tech-logo-2.svg" alt="" className='mx-auto' /></Link>
        </figure>
        <hr />

        <Listinterface icon={<PiCircleDashedFill />} title={"Dashboard"} path={"/dashboard"} />
        <div className='h-[15px]'></div>
        <Listinterface icon={<FaUserAlt />} title={"Users"} path={"#"} />
        <Listinterface icon={<FaCommentAlt />} title={"Enquirys"} path={"#"} />
        <Listinterface icon={<IoColorFilter />} title={"Colors"} />
        <Listinterface icon={<SiMaterialdesignicons />} title={"Materials"} />
        <Listinterface icon={<RiMenu4Fill />} title={"Parent Categorys"} />
        <Listinterface icon={<RiMenu4Fill />} title={"Sub Categorys"} />
        <Listinterface icon={<RiMenu4Fill />} title={"Sub Sub Categorys"} />
        <Listinterface icon={<HiShoppingBag />} title={"Products"} />
        <Listinterface icon={<FaClockRotateLeft />} title={"Why Choose Us"} />
        <Listinterface icon={<LuNotebookPen />} title={"Orders"} />
        <Listinterface icon={<FaSliders />} title={"Sliders"} />
        <Listinterface icon={<MdOutlineAirlineStops />} title={"Country"} />
        <Listinterface icon={<FaUserPen />} title={"Testimonials"} />
        <Listinterface icon={<FcFaq />} title={"Faqs"} />
        <Listinterface icon={<MdOutlineLibraryBooks />} title={"Terms & Conditions"} />




      </div>




    </div>








  )
}


