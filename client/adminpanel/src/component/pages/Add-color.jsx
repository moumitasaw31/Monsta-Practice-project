import React, { useState } from 'react'
import { NavLink } from 'react-router'
import { Link } from 'react-router'
import Button from '../common folder/Button';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Modal from '../common folder/Modal';


export default function Addcolor({ }) {
  let [deactive, setDeactive] = useState(0)
  let [active, setActive] = useState(0)

  let [formValue, setFormValue] = useState(
    {
      colorName: "",
      colorCode: "#000000",
      colorOrder: ""

    }
  )

  const apiBaseUrl = import.meta.env.VITE_APIBASEURL


  let getValue = (e) => {             // onchange function

    let obj = { ...formValue }
    let inputName = e.target.name
    let inputValue = e.target.value
    obj[inputName] = inputValue
    setFormValue(obj)

  }

  let saveData = (e) => {        // e for button tag  jaha ye call hoga

    e.preventDefault()
    axios.post(`${apiBaseUrl}color/add-color`, formValue)
      .then((res) => res.data)
      .then((finalRes) => {

        console.log(finalRes)
        if (finalRes.status === 1) {
          toast(finalRes.msg)
          setFormValue(
            {
              colorName: "",
              colorCode: "#000000",
              colorOrder: ""
            }
          )
        }

      })
      .catch((err) => {

        console.log(err)

        if (err.response?.status === 400) {

          toast(err.response.data.msg)

        }
      })

  }




  return (
    <div>

      <section className='   border-y-2 border-[#E5E7EB] '>


        <div className='flex gap-2 p-4 text-[#4B5563] font-[600]'>
          <h2 className='  hover:text-[blue]'><Link to={"/dashboard"}>Home</Link> <span>/</span></h2>
          <h2 className=' hover:text-[blue]'> <Link to={" "}>color /</Link> </h2>
          <h2 className=' '> <NavLink to={" "}
            className={({ isActive }) => isActive ? " text-[#7d2020]" : " "}>  View</NavLink> </h2>
        </div>
        <hr className='border-b-2 border-[#E5E7EB] ' />

        <div className='min-h-[550px]  '>

          <div className='rounded-[8px] m-5 border '>

            <div className='  '>
              <div className='flex justify-between items-center rounded-[8px_8px_0px_0px] bg-[#F1F5F9]' >
                <h1 className='text-[20px] font-[500] p-4'>Add Colors</h1>
              </div>
              <hr />
            </div>


            <form action="" className='p-4'>
              <ToastContainer />
              <div className='mb-5'>
                <label htmlFor="" className='font-[500]'>Color Name</label>
                <input type="text" placeholder='Enter Color Name' onChange={getValue} name='colorName' value={formValue.colorName} className='border w-[100%] border-[grey] p-2 rounded-[8px]' />
              </div>

              <div className='flex flex-col mb-5'>
                <label htmlFor="" className='font-[500]'>Color Code</label>
                {/* <ColorPicker color={color} onChange={setColor}  width={200} height={150} /> */}
                <input type="color" className='w-full border h-[50px] border-[grey] p-2 rounded-[8px]' onChange={getValue} name="colorCode" value={formValue.colorCode} />
              </div>

              <div className='mb-5'>
                <label htmlFor="" className='font-[500]'> Order</label>
                <input type="number" placeholder='Enter Order' onChange={getValue} name='colorOrder' value={formValue.colorOrder} className='border w-[100%] border-[grey] p-2 rounded-[8px]' />
              </div>

              <Button onClick={saveData} label="Add Color" className="bg-[#7E22CE]" />

            </form>



          </div>


        </div>
      </section >




    </div >
  )
}
