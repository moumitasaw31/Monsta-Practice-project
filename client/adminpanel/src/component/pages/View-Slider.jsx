
import React, { useState } from 'react'
import { NavLink } from 'react-router'
import { Link } from 'react-router'
import { SiElasticsearch } from "react-icons/si";
import Button from '../common folder/Button';
import { HiPencil } from "react-icons/hi2";





export default function ViewSlider() {

  let [deactive, setDeactive] = useState(0)
  let [active, setActive] = useState(0)
  return (
    <div>

      <section className='   border-y-2 border-[#E5E7EB] '>
        <div className='flex gap-2 p-4 text-[#4B5563] font-[600]'>
          <h2 className='  hover:text-[blue]'><Link to={"/dashboard"}>Home</Link> <span>/</span></h2>
          <h2 className=' hover:text-[blue]'> <Link to={" "}>
            Slider</Link> </h2>
          <h2 className=' hover:text-[blue]'> <NavLink to={""}
            className={({ isActive }) => isActive ? " text-[#999797]" : " "}> / View</NavLink> </h2>
        </div>
        <hr className='border-b-2 border-[#E5E7EB] ' />

        <div className='min-h-[550px]  '>

          <div className='rounded-[8px] m-5 border '>

            <div className='  '>
              <div className='flex justify-between items-center rounded-[8px_8px_0px_0px] bg-[#F1F5F9]' >
                <h1 className='text-[25px] font-[500] p-4'>View Slider

                </h1>


                <div className='p-4 flex gap-3'>

                  <Button label={"Change Status"} onClick="" className="bg-[#15803D] text-white  rounded-[8px] font-[500] hover:bg-[#166534] " />
                  <Button label={"Delete"} onClick="" className="bg-[#B91C1C] text-white  rounded-[8px] font-[500] hover:bg-[#991B1B] " />

                </div>

              </div>
              <hr />
            </div>


            <table className='w-[100%] '>
              <thead className=''>
                <tr className='text-[#374151] bg-[#F9FAFB]  text-[12px] uppercase '>

                  <th className='p-3 text-left '><input type="checkbox" /></th >
                  <th className='p-3 text-left w-[1000px] '>Name</th >
                  <th className='p-3 text-left w-[150px]'>Image</th >
                  <th className='p-3 text-left w-[150px]'>Order</th >
                  <th className='p-3 text-left  w-[150px] '>Status</th >
                  <th className='p-3 text-left  w-[100px]'>Action</th >

                </tr>
              </thead>

              <tr className=' text-[gray]  border-[#e4e0e0]'>
                <td className='p-3 text-left '><input type="checkbox" /></td>
                <td className='p-3 text-left font-[500] text-[black]'>Neil Sims</td>
                <td className='p-3 text-left'> <img src="https://packshifts.in/images/iso.png" className='w-12' alt="" /></td>
                <td className='p-3 text-left'>1</td>
                <td className='p-3 text-left'><button type="button" class="text-white bg-[#1DB957] focus:ring-4 focus:outline-none focus:ring-[#86EFAC]  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Active</button>
                </td>
                <td className='className=p-3 text-left  '><button className='bg-[#1D4ED8]  text-white p-[10px] ms-3 rounded-[50%] cursor-pointer  hover:bg-[#1E40AF]'><HiPencil className='text-[18px]' /></button>
                </td>



              </tr>

              <tr className=' text-[gray]  border-[#e4e0e0]'>
                <td className='p-3 text-left '><input type="checkbox" /></td>
                <td className='p-3 text-left font-[500] text-[black]'>Neil Sims</td>
                <td className='p-3 text-left'> <img src="https://packshifts.in/images/iso.png" className='w-12' alt="" /></td>
                <td className='p-3 text-left'>1</td>
                <td className='p-3 text-left'><button type="button" class="text-white bg-[#E53434] focus:ring-4 focus:outline-none focus:ring-[#f89d9d]  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Deactive</button>
                </td>
                <td className='className=p-3 text-left  '><button className='bg-[#1D4ED8]  text-white p-[10px] ms-3 rounded-[50%] cursor-pointer  hover:bg-[#1E40AF]'><HiPencil className='text-[18px]' /></button>
                </td>



              </tr>

            </table>



          </div>

        </div>


      </section >
    </div >
  )
}
