
import React from 'react'
import { NavLink, Link } from 'react-router'
import Button from '../common folder/Button'

export default function AddFaq() {
  return (
    <div>
      <section className='   border-y-2 border-[#E5E7EB] '>
        <div className='flex gap-2 p-4 text-[#4B5563] font-[600]'>
          <h2 className='  hover:text-[blue]'><Link to={"/dashboard"}>Home</Link> <span>/</span></h2>
          <h2 className=' hover:text-[blue]'> <Link to={"/View-Faq"}>
            Faq

            /</Link> </h2>
          <h2 className=' '> <NavLink to={" "}
            className={({ isActive }) => isActive ? " text-[#7d2020]" : " "}>  View</NavLink> </h2>
        </div>
        <hr className='border-b-2 border-[#E5E7EB] ' />

        <div className='min-h-[550px]  '>

          <div className='rounded-[8px] m-5 border '>

            <div className='  '>
              <div className='flex justify-between items-center rounded-[8px_8px_0px_0px] bg-[#F1F5F9]' >
                <h1 className='text-[20px] font-[500] p-4'>Add Faq</h1>
              </div>
              <hr />
            </div>


            <form action="" className='p-4'>
              <div className='mb-5'>
                <label htmlFor="" className='font-[500]'>Question</label>
                <input type="text" placeholder='Question' name='faqQuestion' className='border w-[100%] border-[grey] p-2 rounded-[8px]' />
              </div>

              <div className='mb-5'>
                <label htmlFor="" className='font-[500]'> Answer</label>
                <textarea name="faqAnswer" id="" placeholder='Answer' className=' h-[150px] border-[grey] border w-[100%] p-2 rounded-[8px]'>

                </textarea>
              </div>

               <div className='mb-12'>
                <label htmlFor="" className='font-[500]'>Order</label>
                <input type="number" placeholder='Order' name='faqOrder' className='border w-[100%] border-[grey] p-2 rounded-[8px]' />
              </div>

              <Button onClick="#" label="Add Faq" className="bg-[#7E22CE] mb-5" />

            </form>



          </div>


        </div>


      </section>


    </div>
  )
}
