import React, { useState } from 'react'
import { NavLink, Link } from 'react-router'
import Button from '../common folder/Button'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';



export default function Addmaterial() {

  const apiBaseUrl = import.meta.env.VITE_APIBASEURL




  let [formValue, setformValue] = useState({
    categoryName: "",
    categoryOrder: ""

  })

  let onchangeValue = (e) => {

    let obj = { ...formValue }
    let inputName = e.target.name
    let inputValue = e.target.value
    obj[inputName] = inputValue
    setformValue(obj)
  }

  let submitCategory = (e) => {

    e.preventDefault()
    axios.post(`${apiBaseUrl}material/add`, formValue)
      .then((res) => res.data)
      .then((finalRes) => {
        console.log(finalRes)
        toast(finalRes.msg)
        setformValue({
          categoryName: "",
          categoryOrder: ""

        })

      })

      .catch((err)=>{

        toast(err.response.data.msg)


      })


  }




  return (
    <div>
      <section className='   border-y-2 border-[#E5E7EB] '>
        <div className='flex gap-2 p-4 text-[#4B5563] font-[600]'>
          <h2 className='  hover:text-[blue]'><Link to={"/dashboard"}>Home</Link> <span>/</span></h2>
          <h2 className=' hover:text-[blue]'> <Link to={" "}>Material
            /</Link> </h2>
          <h2 className=' '> <NavLink to={" "}
            className={({ isActive }) => isActive ? " text-[#7d2020]" : " "}>  View</NavLink> </h2>
        </div>
        <hr className='border-b-2 border-[#E5E7EB] ' />

        <div className='min-h-[550px]  '>

          <div className='rounded-[8px] m-5 border '>

            <div className='  '>
              <div className='flex justify-between items-center rounded-[8px_8px_0px_0px] bg-[#F1F5F9]' >
                <h1 className='text-[20px] font-[500] p-4'>Add Material</h1>
              </div>
              <hr />
            </div>


            <form action="" className='p-4'>
              <ToastContainer />
              <div className='mb-5'>
                <label htmlFor="" className='font-[500]'>Category Name</label>
                <input type="text" onChange={onchangeValue} value={formValue.categoryName} placeholder='Enter Color Name' name='categoryName' className='border w-[100%] border-[grey] p-2 rounded-[8px]' />
              </div>

              <div className='mb-10'>
                <label htmlFor="" className='font-[500]'> Order</label>
                <input type="number" onChange={onchangeValue} value={formValue.categoryOrder} placeholder='Enter Order' name='categoryOrder' className='border w-[100%] border-[grey] p-2 rounded-[8px]' />
              </div>

              <Button onClick={submitCategory} label="Add Material" className="bg-[#7E22CE]" />

            </form>



          </div>


        </div>


      </section>


    </div>
  )
}
