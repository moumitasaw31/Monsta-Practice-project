
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import { Link } from 'react-router'
import { SiElasticsearch } from "react-icons/si";
import { HiPencil } from "react-icons/hi2";
import Button from '../common folder/Button';
import axios from 'axios';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';
import { ToastContainer, toast } from 'react-toastify';



export default function Viewcategory() {


  const apiBaseUrl = import.meta.env.VITE_APIBASEURL

  let [catData, setCatData] = useState([])
  let [staticPath, setStaticPath] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  let [totalPages, setTotalpages] = useState(1)
  let [ids, setIds] = useState([])
  let [allcheck, setAllcheck] = useState(false)







  let getcatData = () => {

    axios.get(`${apiBaseUrl}category/view`, {
      params: {
        page: currentPage,
      }
    })
      .then((res) => res.data)
      .then((finalRes) => {

        // console.log(finalRes)
        setCatData(finalRes.viewData)
        setStaticPath(finalRes.staticPath)
        setTotalpages(finalRes.totalPages)

        // setTotalpages(finalRes.totalPages)
      })
  }


  let getChecked = (e) => {

    if (e.target.checked) {
      if (!ids.includes(e.target.value)) {

        setIds([...ids, e.target.value])

      }
    }
    else {

      let removeDta = ids.filter((v) => v != e.target.value)
      setIds(removeDta)
    }
  }



  let deleteData = () => {                                       // 1 button single/multiple delete

    if (ids.length == 0) return;                                   //  if id not selected, hit button return

    if (ids.length === 1) {                                       // list me 1 itme array ka 0 index pe hota hai

      if (!window.confirm("Are you sure?")) return;                // yes,no pe return to page       

      axios.delete(`${apiBaseUrl}category/delete/${ids[0]}`)       //1 single thing ${ } isme bheja jata hai, ids ek arry hai
        .then((res) => res.data)
        .then((finalRes) => {
          console.log(finalRes)
          toast(finalRes.msg)
          setIds([])                                     // checkbox removed
          getcatData()                          // list screen se hat gayi(refresh screen after delete)
        })
    }
    else {

      if (ids.length >= 1) {

        if (!window.confirm("Are you sure?")) return;

        axios.post(`${apiBaseUrl}category/delete-multi`, { ids })        // multiple me as object jayega cant send array directly
          .then((res) => res.data)
          .then((finalRes) => {
            console.log(finalRes)
            toast(finalRes.msg)
            setIds([])
            getcatData()

          })

      }

    }
  }

  let getAllChecked = (e) => {

    if (e.target.checked) {                          //check pe ye hoga
      let allcheckbox = catData.map((v) => v._id)
      setIds(allcheckbox)

    } else {                   // uncheck logic
      setIds([])
      // setAllcheck(allcheck)
    }
  }

  useEffect(() => {


    if (ids.length === catData.length) {
      setAllcheck(true)
    } else {
      setAllcheck(false)
    }


  }, [ids, catData])



  useEffect(() => {


    getcatData()
    console.log(ids)


  }, [currentPage, ids])





  return (
    <div>

      <section className='   border-y-2 border-[#E5E7EB] '>
        < ToastContainer />
        <div className='flex gap-2 p-4 text-[#4B5563] font-[600]'>
          <h2 className='  hover:text-[blue]'><Link to={"/dashboard"}>Home</Link> <span>/</span></h2>
          <h2 className=' hover:text-[blue]'> <Link to={" "}>Category</Link> </h2>
          <h2 className=' hover:text-[blue]'> <NavLink to={""}
            className={({ isActive }) => isActive ? " text-[#999797]" : " "}> / View</NavLink> </h2>
        </div>
        <hr className='border-b-2 border-[#E5E7EB] ' />

        <div className='min-h-[550px]  '>

          <div className='rounded-[8px] m-5 border '>

            <div className='  '>
              <div className='flex justify-between items-center rounded-[8px_8px_0px_0px] bg-[#F1F5F9]' >
                <h1 className='text-[25px] font-[500] p-4'>View Category

                </h1>
                <div className='p-4 flex gap-3'>

                  <Button label={<SiElasticsearch />} onClick="" className="bg-blue-700 text-white py-3 rounded-[8px] hover:bg-[#1E40AF] " />
                  <Button label={"Change Status"} onClick="" className="bg-[#15803D] text-white  rounded-[8px] font-[500] hover:bg-[#166534] " />
                  <Button label={"Delete"} onClick={deleteData} className="bg-[#B91C1C] text-white  rounded-[8px] font-[500] hover:bg-[#991B1B] " />

                </div>
              </div>
              <hr />
            </div>


            <form action="">

              <div className='flex   px-4 bg-[#F9FAFB] py-3 uppercase font-[700] text-[12px] mb-4'>
                <div className=' flex grow items-center gap-8  text-[#374151]'>
                  <input type="checkbox" name='checkbox_1' onChange={getAllChecked} checked={allcheck} />
                  <h2>Name</h2>
                </div>
                <div className='flex grow justify-end gap-[90px]  text-[#374151]'>
                  <h2>Image	</h2>
                  <h2>Order	</h2>
                  <h2>Status</h2>
                  <h2>Action</h2>
                </div>

              </div>

              {

                catData.length >= 1 ?

                  catData.map((data, index) => {
                    return (
                      <div key={data.id} className='flex justify-between   px-4  py-6 uppercase  text-[12px]   hover:bg-[#F9FAFB] '>
                        <div className=' flex grow  items-center gap-8  text-[#374151] font-[700]'>
                          <input type="checkbox" name='checkbox_1' onChange={getChecked} value={data._id} checked={ids.includes(data._id)} />
                          <h2>{data.categoryName}</h2>
                        </div>
                        <div className='flex grow items-center justify-end gap-[76px]  text-[#374151] font-[500]'>
                          <h2><img src={staticPath + data.categoryImage} className='w-[50px]' alt="" /></h2>
                          <h2>{data.categoryOrder}</h2>
                          <button type="button" class="text-white bg-[#1DB957] focus:ring-4 focus:outline-none focus:ring-[#86EFAC]  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Active</button>
                          <button type='button' className='bg-[#1D4ED8] text-white p-[10px] rounded-[50%] cursor-pointer  hover:bg-[#1E40AF]'><HiPencil className='text-[18px]' /></button>
                        </div>

                      </div>
                    )
                  })

                  :

                  <div>No Data Found</div>
              }




              {/* <div className='flex justify-between   px-4  py-6 uppercase  text-[12px]   hover:bg-[#F9FAFB] rounded-[0px_0px_8px_8px]'>
                <div className=' flex grow  items-center gap-8  text-[#374151] font-[700]'>
                  <input type="checkbox" name='checkbox_1' />
                  <h2>Neil Sims</h2>
                </div>
                <div className='flex grow items-center justify-end gap-[76px]  text-[#374151] font-[500]'>
                  <h2><img src="https://packshifts.in/images/iso.png" className='w-[50px]' alt="" /></h2>
                  <h2>1</h2>
                  <button type="button" class="text-white bg-[#E53434] focus:ring-4 focus:outline-none focus:ring-[#f89d9d]  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Deactive</button>
                  <button className='bg-[#1D4ED8] text-white p-[10px] rounded-[50%] cursor-pointer hover:bg-[#1E40AF]'><HiPencil className='text-[18px]' /></button>
                </div>

              </div> */}



            </form>

          </div>


          <ResponsivePagination
            current={currentPage}
            total={totalPages}
            onPageChange={setCurrentPage}
          />

        </div>



      </section>
    </div>
  )
}
