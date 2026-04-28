
import React, { useState } from 'react'
import { NavLink } from 'react-router'
import { Link } from 'react-router'

import Button from '../common folder/Button';



export default function AddSlider() {

  let [deactive, setDeactive] = useState(0)
  let [active, setActive] = useState(0)


  return (
    <div>

      <section className='   border-y-2 border-[#E5E7EB] '>
        <div className='flex gap-2 p-4 text-[#4B5563] font-[600]'>
          <h2 className='  hover:text-[blue]'><Link to={"/dashboard"}>Home</Link> <span>/</span></h2>
          <h2 className=' hover:text-[blue]'> <Link to={" "}>

            Slider

          </Link> </h2>
          <h2 className=' hover:text-[blue]'> <NavLink to={""}
            className={({ isActive }) => isActive ? " text-[#999797]" : " "}> / Add
          </NavLink> </h2>
        </div>
        <hr className='border-b-2 border-[#E5E7EB] ' />

        <div className='min-h-[550px]  '>

          <div className='rounded-[8px] m-5 border '>

            <div className='  '>
              <div className='flex justify-between items-center rounded-[8px_8px_0px_0px] bg-[#F1F5F9]' >
                <h1 className='text-[25px] font-[500] p-4'>Add Slider

                </h1>

              </div>
              <hr />
            </div>


            <form action="">

              <div className=' grid grid-cols-[35%_auto]  gap-6  px-4 py-5'>

                <div className=' rounded-[8px]  mb-5 '>

                  <h2 className='font-[500]'>Choose Image</h2>

                  <input type="file" className='border-2 bg-[url(https://flowbite.com/images/logo.svg)] h-[250px] w-[100%] text-hidden bg-center bg-no-repeat border-[#E5E7EB] mb-4' />


                  <Button onClick="#" label="Add Slider" className="bg-[#7E22CE]" />
                </div>



                <div>



                  <div className='mb-5'>
                    <label htmlFor="" className='font-[500]'>Title</label>
                    <input type="text" placeholder='Enter Color Name' name='sliderTitle' className='border w-[100%] border-[grey] p-2 rounded-[8px]' />
                  </div>

                  <div className='mb-5'>
                    <label htmlFor="" className='font-[500]'> Order</label>
                    <input type="text" placeholder='Enter Order' name='orderTitle' className='border w-[100%] border-[grey] p-2 rounded-[8px]' />
                  </div>




                </div>



              </div>

            </form>
          </div>

        </div>


      </section>



    </div>
  )
}
