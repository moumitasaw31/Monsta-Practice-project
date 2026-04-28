
import React, { useState } from 'react'
import { NavLink } from 'react-router'
import { Link } from 'react-router'
import { SiElasticsearch } from "react-icons/si";
import Button from '../common folder/Button';
import { HiPencil } from "react-icons/hi2";





export default function ViewFaq() {

  let [deactive, setDeactive] = useState(0)
  let [active, setActive] = useState(0)
  return (
    <div>

      <section className='   border-y-2 border-[#E5E7EB] '>
        <div className='flex gap-2 p-4 text-[#4B5563] font-[600]'>
          <h2 className='  hover:text-[blue]'><Link to={"/dashboard"}>Home</Link> <span>/</span></h2>
          <h2 className=' hover:text-[blue]'> <Link to={" "}>
            Faq</Link> </h2>
          <h2 className=' hover:text-[blue]'> <NavLink to={""}
            className={({ isActive }) => isActive ? " text-[#999797]" : " "}> / View</NavLink> </h2>
        </div>
        <hr className='border-b-2 border-[#E5E7EB] ' />

        <div className='min-h-[550px]  '>

          <div className='rounded-[8px] m-5 border '>

            <div className='  '>
              <div className='flex justify-between items-center rounded-[8px_8px_0px_0px] bg-[#F1F5F9]' >
                <h1 className='text-[25px] font-[500] p-4'>View Faq

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

                  <th className='p-3 text-left w-[50px] '><input type="checkbox" /></th >
                  <th className='p-3 text-left w-[350px] '>Question	</th >
                  <th className='p-3 text-left w-[500px]'>Answer	</th >
                  <th className='p-3 text-left w-[100x]'>Order</th >
                  <th className='p-3 text-left   '>Status</th >
                  <th className='p-3 text-left  '>Action</th >

                </tr>
              </thead>

              <tr className=' text-[gray]  border-[#e4e0e0]'>
                <td className='p-3 text-left '><input type="checkbox" /></td>
                <td className='p-3 text-left font-[500] text-[black]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</td>
                <td className='p-3 text-left'><p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae adipisci explicabo molestias possimus quidem obcaecati deserunt vel, officiis, nobis facilis earum quaerat aut esse consequuntur ab praesentium eius suscipit natus!</p></td>
                <td className='p-3 text-left'>1</td>

                <td className='p-3 text-left'><button onClick={() => setActive(1)} className={`bg-[#1DB957] ${active == 1 ? "border-4 border-[#86EFAC] " : "border-0"} text-white p-[8px_20px] rounded-[8px] cursor-pointer hover:bg-[#20BF5B]`}>Active</button>
                </td>
                <td className='className=p-3 text-left  '><button className='bg-[#1D4ED8]  text-white p-[10px] ms-3 rounded-[50%] cursor-pointer  hover:bg-[#1E40AF]'><HiPencil className='text-[18px]' /></button>
                </td>



              </tr>

          

              <tr className=' text-[gray]  border-[#e4e0e0]'>
                <td className='p-3 text-left '><input type="checkbox" /></td>
                <td className='p-3 text-left font-[500] text-[black]'>Neil Sims</td>
                <td className='p-3 text-left'><p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae adipisci explicabo molestias possimus quidem obcaecati deserunt vel, officiis, nobis facilis earum quaerat aut esse consequuntur ab praesentium eius suscipit natus!</p></td>
                <td className='p-3 text-left'>1</td>

                <td className='p-3 text-left'><button onClick={() => setDeactive(1)} className={`bg-[#E53434] ${deactive == 1 ? "border-4 border-[#f89d9d] " : "border-0"} ${deactive == 0 ? "border-0" : " "} text-white p-[8px_20px] rounded-[8px] cursor-pointer `}>Deactive</button>
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
