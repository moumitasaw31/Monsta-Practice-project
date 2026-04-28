
import React, { useState } from 'react'
import { NavLink } from 'react-router'
import { Link } from 'react-router'

import Button from '../common folder/Button';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';



export default function Addcategory() {


  let [deactive, setDeactive] = useState(0)
  let [active, setActive] = useState(0)

    const apiBaseUrl = import.meta.env.VITE_APIBASEURL


  let previewImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/500px-No-Image-Placeholder.svg.png?20200912122019";

  let [image, setImage] = useState(previewImage)



  let saveData = (e) => {        // e for button tag  jaha ye call hoga

    e.preventDefault()
    
    let formValue = new FormData(e.target)
    axios.post(`${apiBaseUrl}category/add`, formValue)
      .then((res) => res.data)
      .then((finalRes) => {

        console.log(finalRes)
        if (finalRes.status === 1) {
          toast(finalRes.msg)
          e.target.reset()   //  tag ko reset / khali kar dena
          setImage(previewImage)             


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
        <ToastContainer/>
        <div className='flex gap-2 p-4 text-[#4B5563] font-[600]'>
          <h2 className='  hover:text-[blue]'><Link to={"/dashboard"}>Home</Link> <span>/</span></h2>
          <h2 className=' hover:text-[blue]'> <Link to={" "}>
            Category
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
                <h1 className='text-[25px] font-[500] p-4'>Add Category
                </h1>

              </div>
              <hr />
            </div>


            <form action="" onSubmit={saveData} encType="multipart/form-data">

              <div className=' grid grid-cols-[35%_auto]  gap-6  px-4 py-5'>

                <div className=' rounded-[8px]  mb-5 '>

                  <h2 className='font-[500]'>Category Image</h2>

                  {/* <div className='border relative h-[160px]'>
                    

                    <input type="file" hidden className={`absolute top-0 left-0 z-10 w-full h-full border-2 text-hidden bg-center bg-no-repeat border-[#E5E7EB] mb-4`} />

                    <img src={image} alt="" className='absolute top-0 left-0 h-full w-full z-0' />

                  </div> */}

                  <div className="border relative h-[200px] w-full  mb-5">

                    <span onClick={(e) => setImage(previewImage)} className='text-[30px] cursor-pointer text-[purple] absolute right-5'>&times;</span>


                    {/* CLICKABLE IMAGE AREA */}
                    <label htmlFor="categoryImage" className="block h-full w-full cursor-pointer">

                      {/* HIDDEN FILE INPUT */}

                      <input type="file" id="categoryImage" name='categoryImage' hidden onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} />



                      <img src={image} alt="No Image" className="h-full w-full " />



                    </label>

                  </div>



                  <Button label="Add Category" className="bg-[#7E22CE]" />
                </div>



                <div>



                  <div className='mb-5'>
                    <label htmlFor="categoryName" className='font-[500]'>Category Name</label>
                    <input type="text" placeholder='Enter Color Name' name='categoryName' className='border w-[100%] border-[grey] p-2 rounded-[8px]' />
                  </div>

                  <div className='mb-5'>
                    <label htmlFor="categoryOrder" className='font-[500]'> Order</label>
                    <input type="text" placeholder='Enter Order' name='categoryOrder' className='border w-[100%] border-[grey] p-2 rounded-[8px]' />
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
