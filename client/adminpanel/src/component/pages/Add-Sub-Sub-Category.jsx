

import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import { Link } from 'react-router'

import Button from '../common folder/Button';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';



export default function AddSubSubCategory() {

  let [parentData, setparentData] = useState([])
  let [subtData, setsubtData] = useState([])
  let previewImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/500px-No-Image-Placeholder.svg.png?20200912122019";
  let [image, setImage] = useState(previewImage)




  const apiBaseUrl = import.meta.env.VITE_APIBASEURL



  let getParentCategory = () => {

    axios.get(`${apiBaseUrl}subsubCategory/categoryview`)
      .then((res) => res.data)
      .then((finalRes) => {
        setparentData(finalRes.categoryData)
      })


  }

  useEffect(() => {
    getParentCategory()

  }, [])

  let subCategoryData = (parentid) => {            // click pe aayega call on onChange event

    axios.get(`${apiBaseUrl}subsubCategory/subcategoryview/${parentid}`)

      .then((res) => res.data)
      .then((finalRes) => {
        // console.log(finalRes)
        setsubtData(finalRes.subgoryData)
      })



  }

  let saveData = (e) => {        // e for button tag  jaha ye call hoga

    e.preventDefault()

    let formValue = new FormData(e.target)
    axios.post(`${apiBaseUrl}subsubCategory/savedata`, formValue)
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

        // console.log(err)

        if (err.response?.status === 400) {

          toast(err.response.data.msg)

        }
      })

  }






  return (
    <div>

      <section className='   border-y-2 border-[#E5E7EB] '>
        < ToastContainer />
        <div className='flex gap-2 p-4 text-[#4B5563] font-[600]'>
          <h2 className='  hover:text-[blue]'><Link to={"/dashboard"}>Home</Link> <span>/</span></h2>
          <h2 className=' hover:text-[blue]'> <Link to={" "}>
            Sub Category
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
                <h1 className='text-[25px] font-[500] p-4'>Add Sub Sub Category

                </h1>

              </div>
              <hr />
            </div>


            <form action="" onSubmit={saveData} encType="multipart/form-data">


              <div className=' grid grid-cols-[35%_auto]  gap-6  px-4 py-5'>

                <div className=' rounded-[8px]   '>



                  <h2 className='font-[500]'>Category Image</h2>

                  <div className="border relative h-[280px] w-full  mb-5">

                    <span onClick={(e) => setImage(previewImage)} className='text-[30px] cursor-pointer text-[purple] absolute right-5'>&times;</span>


                    {/* CLICKABLE IMAGE AREA */}
                    <label htmlFor="subsubCategoryImage" className="block h-full w-full cursor-pointer">

                      {/* HIDDEN FILE INPUT */}

                      <input type="file" id="subsubCategoryImage" name='subsubCategoryImage' hidden onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} />



                      <img src={image} alt="No Image" className="h-full w-full " />



                    </label>

                  </div>




                  <Button label="Add Sub Category" className="bg-[#7E22CE] mt-[100px]" />
                </div>



                <div>

                  <div className='flex flex-col mb-5 '>
                    <label htmlFor="" className='font-[500] w-[100%] '>Parent Category Name</label>

                    <select name="parentCategory" onChange={(e) => subCategoryData(e.target.value)} id="" className='border border-[grey] p-2 rounded-[8px]'>

                      <option value="">Select Category</option>

                      {
                        parentData.map((data, index) => {
                          return (


                            <option key={data._id} value={data._id}>{data.categoryName}</option>


                          )
                        })

                      }

                    </select>
                  </div>


                  <div className='flex flex-col mb-5 '>
                    <label htmlFor="" className='font-[500] w-[100%] '>Sub Category Name
                    </label>

                    <select name="subCategoryName" id="" className='border border-[grey] p-2 rounded-[8px]'>

                      <option value="">Select Category</option>

                      {
                        subtData.map((item) => (
                          <option key={item._id} value={item._id}>
                            {item.subCategoryName}
                          </option>
                        ))
                      }





                    </select>
                  </div>




                  <div className='mb-5'>
                    <label htmlFor="" className='font-[500]'>sub sub Category Name</label>
                    <input type="text" placeholder='Enter Color Name' name='subsubCategoryName' className='border w-[100%] border-[grey] p-2 rounded-[8px]' />
                  </div>

                  <div className='mb-5'>
                    <label htmlFor="" className='font-[500]'> Order</label>
                    <input type="text" placeholder='Enter Order' name='subsubCategoryOrder' className='border w-[100%] border-[grey] p-2 rounded-[8px]' />
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
