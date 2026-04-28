
import React, { useState } from 'react'
import { NavLink } from 'react-router'
import { Link } from 'react-router'
import { SiElasticsearch } from "react-icons/si";
import Button from '../common folder/Button';
import { HiPencil } from "react-icons/hi2";





export default function Orders() {

  let [deactive, setDeactive] = useState(0)
  let [active, setActive] = useState(0)
  return (
    <div>

      <section className='   border-y-2 border-[#E5E7EB] '>
        <div className='flex gap-2 p-4 text-[#4B5563] font-[600]'>
          <h2 className='  hover:text-[blue]'><Link to={"/dashboard"}>Home</Link> <span>/</span></h2>
          <h2 className=' hover:text-[blue]'> <Link to={" "}>Orders</Link> </h2>

        </div>
        <hr className='border-b-2 border-[#E5E7EB] ' />

        <div className='min-h-[550px]  '>

          <div className='rounded-[8px] m-5 border '>

            <div className='  '>
              <div className='flex justify-between items-center rounded-[8px_8px_0px_0px] bg-[#F1F5F9]' >
                <h1 className='text-[25px] font-[500] p-4'>Order's List

                </h1>

              </div>
              <hr />
            </div>


            <table className='w-[100%] '>
              <thead className=''>
                <tr className='text-[#374151] bg-[#F9FAFB]  text-[14px] uppercase '>
                  <th className='p-3 text-left w-[150px]'><Button label="Delete" className={"bg-[#8045ED] text-[15px]"} /></th >
                  <th className='p-3 text-left w-[120px] '>S. No.</th >
                  <th className='p-3 text-left  w-[120px]'>	Order ID</th >
                  <th className='p-3 text-left w-[200px]'>Name</th >
                  <th className='p-3 text-left w-[150px]'>Quantity</th >
                  <th className='p-3 text-left  w-[150px] '>Price</th >
                  <th className='p-3 text-left  w-[150px]'>Date</th >
                  <th className='p-3 text-left  w-[150px]'>Status</th >
                  <th className='p-3 text-left  w-[100px]'>View</th >
                </tr>
              </thead>

              <tr className=' text-[gray] border-b-[1px] border-[#e4e0e0]'>
                <td className='p-3 text-left'><input type="checkbox"/></td>
                <td className='p-3 text-left'>1</td>
                <td className='p-3 text-left'>Frank01</td>
                <td className='p-3 text-left'> Roshan Chaurasia</td>
                <td className='p-3 text-left'>2</td>
                <td className='p-3 text-left'>₹ 3500</td>
                <td className='p-3 text-left'>10/06/2024	</td>
                <td className='p-3 text-left'>Processing...	</td>

                <td className='className=p-3 text-left  '><Button label="view" className={"bg-[#8045ED] text-[15px] hover:bg-[#F3F4F6] hover:text-[blue]"} />
                </td>



              </tr>

            </table>



          </div>

        </div>


      </section >
    </div >
  )
}
