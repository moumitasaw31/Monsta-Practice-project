
import React, { useState } from 'react'
import { NavLink } from 'react-router'
import { Link } from 'react-router'
import { SiElasticsearch } from "react-icons/si";
import { HiPencil } from "react-icons/hi2";
import Button from '../common folder/Button';



export default function ContactE() {

  let [deactive, setDeactive] = useState(0)
  return (
    <div>

      <section className='   border-y-2 border-[#E5E7EB] '>
        <div className='flex gap-2 p-4 text-[#4B5563] font-[600]'>
          <h2 className='  hover:text-[blue]'><Link to={"/dashboard"}>Home</Link> <span>/</span></h2>
          <h2 className=' hover:text-[blue]'> <Link to={" "}>Enquiry</Link> </h2>
          <h2 className=' hover:text-[blue]'> <NavLink to={""}
            className={({ isActive }) => isActive ? " text-[#999797]" : " "}> / View</NavLink> </h2>
        </div>
        <hr className='border-b-2 border-[#E5E7EB] ' />

        <div className='min-h-[550px]  '>

          <div className='rounded-[8px] m-5 border '>

            <div className='  '>
              <div className='flex justify-between items-center rounded-[8px_8px_0px_0px] bg-[#F1F5F9]' >
                <h1 className='text-[25px] font-[500] p-4'>Contact Enquiry Management
</h1>
                <div className='p-4 flex gap-3'>

                  <Button label={<SiElasticsearch />} onClick="" className="bg-blue-700 text-white py-3 rounded-[8px] hover:bg-[#1E40AF] " />
                  <Button label={"Change Status"} onClick="" className="bg-[#15803D] text-white  rounded-[8px] font-[500] hover:bg-[#166534] " />
                  <Button label={"Delete"} onClick="" className="bg-[#B91C1C] text-white  rounded-[8px] font-[500] hover:bg-[#991B1B] " />

                </div>
              </div>
              <hr />
            </div>


            <form action="">

              <div className='flex   px-4 bg-[#F9FAFB] py-3 uppercase font-[700] text-[12px] mb-4'>
              <div className=' flex grow items-center gap-8  text-[#374151]'>
                <input type="checkbox" name='checkbox_1' />
                <h2>User Info</h2>
              </div>
              <div className='flex grow justify-end gap-[90px]  text-[#374151]'>
                <h2>Subject	</h2>
                <h2>Message	</h2>
                <h2>Status</h2>
                <h2>Action</h2>
              </div>

            </div>


<div className='flex justify-between   px-4  py-6 uppercase  text-[12px]   hover:bg-[#F9FAFB] '>
              <div className=' flex grow  items-center gap-8  text-[#374151] font-[700]'>
                <input type="checkbox" name='checkbox_1' />
                <h2>Neil Sims</h2>
              </div>
              <div className='flex grow items-center justify-end gap-[76px]  text-[#374151] font-[500]'>
                <h2>xyz@gmail.com</h2>
                <h2>9876543210</h2>
<button type="button" class="text-white bg-[#1DB957] focus:ring-4 focus:outline-none focus:ring-[#86EFAC]  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Active</button>                <button className='bg-[#1D4ED8] text-white p-[10px] rounded-[50%] cursor-pointer  hover:bg-[#1E40AF]'><HiPencil className='text-[18px]' /></button>
              </div>

            </div>

            <div className='flex justify-between   px-4  py-6 uppercase  text-[12px]   hover:bg-[#F9FAFB] rounded-[0px_0px_8px_8px]'>
              <div className=' flex grow  items-center gap-8  text-[#374151] font-[700]'>
                <input type="checkbox" name='checkbox_1' />
                <h2>Neil Sims</h2>
              </div>
              <div className='flex grow items-center justify-end gap-[76px]  text-[#374151] font-[500]'>
                <h2>xyz@gmail.com</h2>
                <h2>9876543210</h2>
                <button type="button" class="text-white bg-[#E53434] focus:ring-4 focus:outline-none focus:ring-[#f89d9d]  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Deactive</button>

                <button className='bg-[#1D4ED8] text-white p-[10px] rounded-[50%] cursor-pointer hover:bg-[#1E40AF]'><HiPencil className='text-[18px]' /></button>
              </div>

            </div>



            </form>

          
          </div>

        </div>


      </section>
    </div>
  )
}
