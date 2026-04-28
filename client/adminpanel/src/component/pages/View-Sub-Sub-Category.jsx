
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import { Link } from 'react-router'
import { SiElasticsearch } from "react-icons/si";
import { HiPencil } from "react-icons/hi2";
import Button from '../common folder/Button';
import axios from 'axios';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';



export default function ViewSubSubCategory() {

  const apiBaseUrl = import.meta.env.VITE_APIBASEURL



  let [subsubcatData, setsubsubcatData] = useState([])
  let [staticPath, setStaticPath] = useState(" ")            // 1 id aa rha hai isliye string
  const [currentPage, setCurrentPage] = useState(1);
  let [totalPages, setTotalpages] = useState(1)
  let [ids, setIds] = useState([])
  let [allcheck, setAllcheck] = useState(false)


  let getsubSubData = () => {



    axios.get(`${apiBaseUrl}subsubCategory/viewsubsub`, { 
      params: {
        page: currentPage,
      }
    })
      .then((res) => res.data)
      .then((finalRes) => {
        console.log(finalRes)
        setsubsubcatData(finalRes.getSubSubData)
        setStaticPath(finalRes.staticPath)
        setTotalpages(finalRes.totalPages)
      })


  }

  useEffect(() => {
    getsubSubData()
  }, [currentPage])







  return (
    <div>

      <section className='   border-y-2 border-[#E5E7EB] '>
        <div className='flex gap-2 p-4 text-[#4B5563] font-[600]'>
          <h2 className='  hover:text-[blue]'><Link to={"/dashboard"}>Home</Link> <span>/</span></h2>
          <h2 className=' hover:text-[blue]'> <Link to={" "}>
            Sub Category</Link> </h2>
          <h2 className=' hover:text-[blue]'> <NavLink to={""}
            className={({ isActive }) => isActive ? " text-[#999797]" : " "}> / View</NavLink> </h2>
        </div>
        <hr className='border-b-2 border-[#E5E7EB] ' />

        <div className='min-h-[550px]  '>

          <div className='rounded-[8px] m-5 border '>

            <div className='  '>
              <div className='flex justify-between items-center rounded-[8px_8px_0px_0px] bg-[#F1F5F9]' >
                <h1 className='text-[25px] font-[500] p-4'>View Sub Sub Category

                </h1>
                <div className='p-4 flex gap-3'>

                  <Button label={<SiElasticsearch />} onClick="" className="bg-blue-700 text-white py-3 rounded-[8px] hover:bg-[#1E40AF] " />
                  <Button label={"Change Status"} onClick="" className="bg-[#15803D] text-white  rounded-[8px] font-[500] hover:bg-[#166534] " />
                  <Button label={"Delete"} onClick="" className="bg-[#B91C1C] text-white  rounded-[8px] font-[500] hover:bg-[#991B1B] " />

                </div>
              </div>
              <hr />
            </div>


            <table className='w-[100%] '>
              <thead className=''>
                <tr className='text-[#374151] bg-[#F9FAFB]  text-[12px] uppercase '>

                  <th className='p-3 text-left '><input type="checkbox" /></th >
                  <th className='p-3 text-left w-[1000px] '>Parent Category</th >
                  <th className='p-3 text-left  w-[400px]'>	Sub Category Name</th >
                  <th className='p-3 text-left  w-[400px]'>	Category Name</th >
                  <th className='p-3 text-left w-[150px]'>Image</th >
                  <th className='p-3 text-left w-[150px]'>Order</th >
                  <th className='p-3 text-left  w-[150px] '>Status</th >
                  <th className='p-3 text-left  w-[100px]'>Action</th >

                </tr>
              </thead>

              {
                subsubcatData?.length >= 1

                  ?

                  subsubcatData.map((data, index) => {
                    return (
                      <tr className=' text-[gray] border-b-[1px] border-[#e4e0e0]'>
                        <td className='p-3 text-left '><input type="checkbox" /></td>

                        <td className='p-3 text-left text-[black] font-[500]'>{data.parentCategory.categoryName}</td>
                        <td className='p-3 text-left'>{data.subCategoryName.subCategoryName}</td>
                        <td className='p-3 text-left'>{data.subsubCategoryName}</td>
                        <td className='p-3 text-left'> <img src={staticPath + data.subsubCategoryImage} className='w-12' alt="" /></td>
                        <td className='p-3 text-left'>{data.subsubCategoryOrder}</td>
                        <td className='p-3 text-left'><button type="button" class="text-white bg-[#1DB957] focus:ring-4 focus:outline-none focus:ring-[#86EFAC]  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Active</button>
                        </td>
                        <td className='className=p-3 text-left  '><button className='bg-[#1D4ED8]  text-white p-[10px] ms-3 rounded-[50%] cursor-pointer  hover:bg-[#1E40AF]'><HiPencil className='text-[18px]' /></button>
                        </td>



                      </tr>


                    )
                  })


                  :

                  <div>Data Not Found</div>
              }



            </table>


          </div>



        </div>

        <ResponsivePagination
          current={currentPage}
          total={totalPages}
          onPageChange={setCurrentPage}
        />
      </section>
    </div>
  )
}
