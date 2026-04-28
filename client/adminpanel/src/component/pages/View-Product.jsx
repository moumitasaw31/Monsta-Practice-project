
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import { Link } from 'react-router'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import axios from 'axios';




export default function ViewProduct() {

  const apiBaseUrl = import.meta.env.VITE_APIBASEURL


  let [productData, setProductData] = useState([])
  let [staticPath, setStaticPath] = useState(" ")
  let [id, setId] = useState([])                  //  multiple id uthani hai isiliye array liya


  let viewProduct = () => {

    axios.get(`${apiBaseUrl}product/product-view`)
      .then((res) => res.data)
      .then((finalRes) => {
        // console.log(finalRes)
        setProductData(finalRes.productData)
        setStaticPath(finalRes.staticPath)
      })


  }

  useEffect(() => {

    viewProduct()

  }, [])


  let getChecked = (e) => {

    if (e.target.checked) {
      if (!id.includes(e.target.value)) {           ///  jisme ja rha usme pahle se value toh nhi pada hai
        setId([...id, e.target.value])            // old state copy kiya, naya add kiya

      }

    }
    else {
      let removeId = id.filter((v) => v != e.target.value)
      setId(removeId)

    }

  }

  // console.log(id);


  let deleteProduct = (id) => {

    if (id.length == 0) return;             //  no id dont work

    if (id.length == 1) {

      if (!window.confirm("Are you sure?")) return;
      axios.delete(`${apiBaseUrl}product/delete-product/${id[0]}`)   // id me 0 mandatory hai beacuse id 1 array hai
        .then((res) => res.data)
        .then((finalRes) => {
          console.log(finalRes.msg);
          setId([])
          viewProduct()

        })
    }



  }




  return (
    <div>

      <section className='   border-y-2 border-[#E5E7EB] '>
        <div className='flex gap-2 p-4 text-[#4B5563] font-[600]'>
          <h2 className='  hover:text-[blue]'><Link to={"/dashboard"}>Home</Link> <span>/</span></h2>
          <h2 className=' hover:text-[blue]'> <Link to={" "}>
            Product</Link> </h2>
          <h2 className=' hover:text-[blue]'> <NavLink to={""}
            className={({ isActive }) => isActive ? " text-[#999797]" : " "}> /
            Product Items</NavLink> </h2>
        </div>
        <hr className='border-b-2 border-[#E5E7EB] ' />




        <div className='min-h-[550px]   pb-12 '>



          <div className=' border m-5 rounded-[8px]'>

            <div className='flex justify-between items-center rounded-[8px_8px_0px_0px] bg-[#F1F5F9]' >
              <h1 className='text-[25px] font-[500] p-4'>Product Items</h1>
            </div>
            <hr />

            <table className='w-[100%]'>
              <thead>
                <tr className='text-[#374151] bg-[#F9FAFB] h-[40px] text-[14px] uppercase'>
                  <th className='p-3 text-left'>Delete</th >
                  <th className='p-3 text-left '>S. No.</th >
                  <th className='p-3 text-left  w-[160px]'>Product Name</th >
                  <th className='p-3 text-left w-[280px]'>Description</th >
                  <th className='p-3 text-left w-[250px]'>Short Description</th >
                  <th className='p-3 text-left  '>Thumbnails</th >
                  <th className='p-3 text-left'>Action</th >
                  <th className='p-3 text-left'>Status</th>
                </tr>
              </thead>

              {
                productData.length >= 1 ?

                  productData.map((items, index) => {

                    return (

                      <tr key={index} className=' text-[gray] border-b-[1px] border-[#e4e0e0]'>
                        <td className='p-3 text-left '><input type="checkbox" value={items._id} onChange={getChecked} checked={id.includes(items._id)} /></td>
                        <td className='p-3 text-left'>{index + 1}</td>
                        <td className='p-3 text-left'>{items.prodctName}</td>
                        <td className='p-3 text-left leading-[28px] '><p className='line-clamp-1'>{items.description}</p> <p className='text-[#1D4ED8] text-[14px] font-[500] cursor-pointer'>Read More</p></td>
                        <td className='p-3 text-left leading-[28px] '><p className='line-clamp-1'>Lorem ipsum dolor cfdfdf sit</p> <p className='text-[#1D4ED8] text-[14px] font-[500] cursor-pointer'>Read More</p></td>
                        <td className='p-3 text-left'> <img src={staticPath + items.productImage} className='w-16 h-16 rounded-lg' alt="" /></td>
                        <td className='p-3 text-left '>
                          <button onClick={() => deleteProduct([items._id])} className='p-2 text-red-500 text-[20px]'><Link><i><RiDeleteBin6Line /></i></Link></button>
                          <span>|</span>
                          <button className='p-2 text-yellow-400 text-[20px]'><Link><i><FaEdit /></i></Link></button>
                        </td>
                        <td className='p-3 text-left'>Active</td>
                      </tr>

                    )
                  }


                  )

                  :



                  <tr><td className='text-center text-red-500 py-5'>No data found</td></tr>


              }



              {/* <tr className=' text-[gray] border-b-[1px] border-[#e4e0e0]'>
                <td className='p-3 text-left '><input type="checkbox" /></td>
                <td className='p-3 text-left'>2</td>
                <td className='p-3 text-left'>Men's</td>
                <td className='p-3 text-left leading-[28px] '><p className='line-clamp-1'>Lorem ipsum dolor cfdfdf sit</p> <p className='text-[#1D4ED8] text-[14px] font-[500] cursor-pointer'>Read More</p></td>
                <td className='p-3 text-left leading-[28px] '><p className='line-clamp-1'>Lorem ipsum dolor cfdfdf sit</p> <p className='text-[#1D4ED8] text-[14px] font-[500] cursor-pointer'>Read More</p></td>
                <td className='p-3 text-left'> <img src="https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png" className='w-16 h-16 rounded-lg' alt="" /></td>
                <td className='p-3 text-left '>
                  <button className='p-2 text-red-500 text-[20px]'><Link><i><RiDeleteBin6Line /></i></Link></button>
                  <span>|</span>
                  <button className='p-2 text-yellow-400 text-[20px]'><Link><i><FaEdit /></i></Link></button>
                </td>
                <td className='p-3 text-left'>Active</td>
              </tr>

              <tr className=' text-[gray] border-b-[1px] border-[#e4e0e0]'>
                <td className='p-3 text-left '><input type="checkbox" /></td>
                <td className='p-3 text-left'>3</td>
                <td className='p-3 text-left'>Men's</td>
                <td className='p-3 text-left leading-[28px] '><p className='line-clamp-1'>Lorem ipsum dolor cfdfdf sit</p> <p className='text-[#1D4ED8] text-[14px] font-[500] cursor-pointer'>Read More</p></td>
                <td className='p-3 text-left leading-[28px] '><p className='line-clamp-1'>Lorem ipsum dolor cfdfdf sit</p> <p className='text-[#1D4ED8] text-[14px] font-[500] cursor-pointer'>Read More</p></td>
                <td className='p-3 text-left'> <img src="https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png" className='w-16 h-16 rounded-lg' alt="" /></td>
                <td className='p-3 text-left '>
                  <button className='p-2 text-red-500 text-[20px]'><Link><i><RiDeleteBin6Line /></i></Link></button>
                  <span>|</span>
                  <button className='p-2 text-yellow-400 text-[20px]'><Link><i><FaEdit /></i></Link></button>
                </td>
                <td className='p-3 text-left'>Active</td>
              </tr>

              <tr className=' text-[gray] '>
                <td className='p-3 text-left '><input type="checkbox" /></td>
                <td className='p-3 text-left'>4</td>
                <td className='p-3 text-left'>Men's</td>
                <td className='p-3 text-left leading-[28px] '><p className='line-clamp-1'>Lorem ipsum dolor cfdfdf sit</p> <p className='text-[#1D4ED8] text-[14px] font-[500] cursor-pointer'>Read More</p></td>
                <td className='p-3 text-left leading-[28px] '><p className='line-clamp-1'>Lorem ipsum dolor cfdfdf sit</p> <p className='text-[#1D4ED8] text-[14px] font-[500] cursor-pointer'>Read More</p></td>
                <td className='p-3 text-left'> <img src="https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png" className='w-16 h-16 rounded-lg' alt="" /></td>
                <td className='p-3 text-left '>
                  <button className='p-2 text-red-500 text-[20px]'><Link><i><RiDeleteBin6Line /></i></Link></button>
                  <span>|</span>
                  <button className='p-2 text-yellow-400 text-[20px]'><Link><i><FaEdit /></i></Link></button>
                </td>
                <td className='p-3 text-left'>Active</td>
              </tr> */}


            </table>


          </div>


        </div>


      </section >
    </div >
  )
}
