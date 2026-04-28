import React, { useContext } from 'react'
import { HiOutlineMenu } from "react-icons/hi";
import { Link } from 'react-router';
import { FaUserCircle } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { RiProfileFill } from "react-icons/ri";
import { context } from '../../contextApi/MainContext';


export default function Header() {

let {setId} = useContext(context)


  return (
    <div>
      <section className=' '>
        <div className='max-w-[1320px] mx-auto grid grid-cols-2 items-center  justify-between p-4'>

          <div className='flex items-center gap-3 text-[20px] text-[#6B7280] font-[500] '>
            < HiOutlineMenu className='text-[25px]' />
            <h1>Dashboard</h1>
          </div>

          {/* profile part */}

          <div className=''>
            <figure className='relative group  '>
              <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="" className='w-[50px] h-[50px] rounded-[50%] cursor-pointer float-right' />


              <div className='w-[300px] rounded-[8px] shadow-[0px_0px_30px_2px_#ccc] float-right hidden group-hover:block '>

                <div className='absolute  right-6 top-8  p-3'>

                  <ul className='text-[14px] font-[500] text-[#111827] border-[1px] border-[#ccc] rounded-[8px]  bg-white shadow-lg '>
                    <li className='  hover:bg-[#F3F4F6]'><Link to={"/profile"}
                      className='flex items-center gap-2 border-b-[1px]  border-[#dbdbdb] p-2.5 '><FaUserCircle /> Profile</Link>
                    </li>
                    <li className=' hover:bg-[#F3F4F6] '><Link to={"/View-company-profile"}
                      className='flex items-center gap-2  p-2.5 border-b-[1.5px] '> <RiProfileFill /> Comapany Profile</Link>
                    </li>
                    <li className='group hover:bg-[#F3F4F6]'>
                     <button onClick={()=>setId('')} className='flex items-center gap-2 p-2.5 group-hover:text-[red]'> <FaLock />
                        Logout</button> 
                    </li>
                  </ul>
                </div>

              </div>

            </figure>




          </div>

        </div>




      </section>

    </div>
  )
}
