
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import { Link } from 'react-router'
import { SiElasticsearch } from "react-icons/si";
import { HiPencil } from "react-icons/hi2";
import Button from '../common folder/Button';
import axios, { Axios } from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Modal from '../common folder/Modal';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';



const apiBaseUrl = import.meta.env.VITE_APIBASEURL



export default function Viewcolor() {


  let [colorData, setColorData] = useState([])
  let [ids, setIds] = useState([])
  let [allcheck, setAllcheck] = useState(false)
  let [showModal, setshowModal] = useState(false)
  let [editData, setEditData] = useState(null)
  const [currentPage, setCurrentPage] = useState(1);
  let [totalPages, setTotalpages] = useState(1)



  let getAllChecked = (e) => {

    if (e.target.checked) {                          //check pe ye hoga
      let allcheckbox = colorData.map((v) => v._id)
      setIds(allcheckbox)

    } else {                   // uncheck logic
      setIds([])
      // setAllcheck(allcheck)
    }
  }


  useEffect(() => {


    if (ids.length === colorData.length) {
      setAllcheck(true)
    } else {
      setAllcheck(false)
    }


  }, [ids, colorData])                            // ids ka chnge hona( array me in & out hona)


  let getChecked = (e) => {

    if (e.target.checked) {
      if (!ids.includes(e.target.value)) {
        setIds([...ids, e.target.value])             // old basket ,new value
      }
    }

    else {
      let removeList = ids.filter((v) => v != e.target.value)
      setIds(removeList)

    }
  }


  let deleteData = () => {                                       // 1 button single/multiple delete

    if (ids.length == 0) return;                                   //  if id not selected, hit button return

    if (ids.length === 1) {                                       // list me 1 itme array ka 0 index pe hota hai

      if (!window.confirm("Are you sure?")) return;                // yes,no pe return to page       

      axios.delete(`${apiBaseUrl}color/delete-color/${ids[0]}`)       //1 single thing ${ } isme bheja jata hai
        .then((res) => res.data)
        .then((finalRes) => {
          toast(finalRes.msg)
          setIds([])                                     // checkbox removed
          getallColorData()                           // list screen se hat gayi(refresh screen after delete)
        })
    }
    else {

      if (ids.length >= 1) {

        if (!window.confirm("Are you sure?")) return;

        axios.post(`${apiBaseUrl}color/delete-multi`, { ids })        // multiple me as object jayega cant send array directly
          .then((res) => res.data)
          .then((finalRes) => {
            toast(finalRes.msg)
            setIds([])
            getallColorData()

          })

      }

    }
  }



  let getallColorData = () => {

    axios.get(`${apiBaseUrl}color/view-color`, {
      params: {
        page: currentPage,
      }
    })
      .then((res) => res.data)
      .then((finalRes) => {
        setColorData(finalRes.getAllData)
        setTotalpages(finalRes.totalPages)
      })
  }

  useEffect(() => {

    getallColorData()
    // page load hote hi jo data aata hai

  }, [currentPage])


  return (
    <div>

      {
        showModal &&              // if true then show
        <Modal closeModal={() => setshowModal(false)} data={editData} refreshData={getallColorData} />


      }






      <section className='   border-y-2 border-[#E5E7EB] '>
        <div className='flex gap-2 p-4 text-[#4B5563] font-[600]'>
          <h2 className='  hover:text-[blue]'><Link to={"/dashboard"}>Home</Link> <span>/</span></h2>
          <h2 className=' hover:text-[blue]'> <Link to={" "}>Color</Link> </h2>
          <h2 className=' hover:text-[blue]'> <NavLink to={""}
            className={({ isActive }) => isActive ? " text-[#999797]" : " "}> / View</NavLink> </h2>
        </div>
        <hr className='border-b-2 border-[#E5E7EB] ' />

        <div className='min-h-[550px]  '>

          <div className='rounded-[8px] m-5 border '>

            <div className='  '>
              <div className='flex justify-between items-center rounded-[8px_8px_0px_0px] bg-[#F1F5F9]' >
                <h1 className='text-[25px] font-[500] p-4'>View Color
                </h1>
                <div className='p-4 flex gap-3'>

                  <Button label={<SiElasticsearch />} onClick="" className="bg-blue-700 text-white py-3 rounded-[8px] hover:bg-[#1E40AF] " />
                  <Button label={"Change Status"} onClick="" className="bg-[#15803D] text-white  rounded-[8px] font-[500] hover:bg-[#166534] " />
                  <Button label={"Delete"}
                    onClick=
                    {deleteData} className="bg-[#B91C1C] text-white  rounded-[8px] font-[500] hover:bg-[#991B1B] " />
                  <ToastContainer />
                </div>
              </div>
              <hr />
            </div>


            <form action="">

              <div className='flex   px-4 bg-[#F9FAFB] py-3 uppercase font-[700] text-[12px] mb-4'>
                <div className=' flex grow items-center gap-8  text-[#374151]'>


                  <input type="checkbox" name='checkbox_1' onChange={getAllChecked} checked={allcheck} />
                  <h2>Sr. No.</h2>
                  <h2>Color Name</h2>
                </div>
                <div className='flex  justify-end gap-[90px]  text-[#374151]'>
                  <h2>Code	</h2>
                  <h2>Order</h2>
                  <h2>Status</h2>
                  <h2>Action</h2>
                </div>

              </div>

              <div>

                {  // loop for show all colors

                  colorData.length >= 1


                    ?

                    colorData.map((items, index) => {
                      return (
                        <div key={index} className='flex justify-between   px-4  py-6 uppercase  text-[12px]   hover:bg-[#F9FAFB] '>
                          <div className=' flex grow  items-center gap-8  text-[#374151] font-[700]'>
                            <input type="checkbox" name='checkbox' onChange={getChecked} value={items._id} checked={ids.includes(items._id)} />

                            <h2>
                              {

                                (currentPage - 1) * 5 + index + 1
                              }



                            </h2>
                            <h2>{items.colorName}</h2>
                          </div>

                          <div className='flex grow items-center justify-end gap-[76px]  text-[#374151] font-[500]'>
                            <h2>{items.colorCode}</h2>
                            <h2>{items.colorOrder}</h2>

                            <button type="button" class="text-white bg-[#1DB957] focus:ring-4 focus:outline-none focus:ring-[#86EFAC]  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Active</button>

                            <Link>
                              <button className='bg-[#1D4ED8] text-white p-[10px] rounded-[50%] cursor-pointer  hover:bg-[#1E40AF]' onClick={() => { setshowModal(true); setEditData(items) }} >



                                <HiPencil className='text-[18px]' />
                              </button>
                            </Link>
                          </div>

                        </div>

                      )
                    })


                    :


                    <div>No Data Found</div>
                }
              </div>

            </form>


          </div>

        </div>

        <ResponsivePagination
          current={currentPage}
          total={totalPages}
          onPageChange={setCurrentPage}
        />


      </section>

      {/* <table className='w-full border'>

        <thead className='border'>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Sr No.</th>
            <th><h2>Color Name</h2></th>
            <th><h2> Code</h2></th>
            <th><h2> Order</h2></th>
            <th><h2> Status</h2></th>
            <th><h2> Action</h2></th>
          </tr>
        </thead>

        <tbody>

          {
            showData.map((items, index) => {
              return (

                <tr>
                  <td><input type="checkbox" name='checkbox_1' /></td>
                  <td>{index+1}</td>
                  <td><h2>{items.colorName}</h2></td>
                  <td>{items.colorCode}</td>
                  <td>{items.colorOrder}</td>
                </tr>

              )
            })
          }



        </tbody>

      </table> */}



    </div >

  )
}



