

import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router'
import { Link } from 'react-router'
import { SiElasticsearch } from "react-icons/si";
import { HiPencil } from "react-icons/hi2";
import Button from '../common folder/Button';
import axios from 'axios';
import Select from 'react-select';
import JoditEditor from 'jodit-react';



export default function AddProduct() {

  const apiBaseUrl = import.meta.env.VITE_APIBASEURL

  let previewImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/500px-No-Image-Placeholder.svg.png?20200912122019";

  const [productImage, setProductImage] = useState(previewImage);
  const [backImage, setBackImage] = useState(previewImage);
  const [galleryImages, setGalleryImages] = useState([]);


  // let [image, setImage] = useState(previewImage)


  const editor = useRef(null);
  const [content, setContent] = useState('');


  let [sucmsg, setSucmsg] = useState(" ")


  let [ParentCatData, setParentCatData] = useState([])
  let [subCatData, setSubCatData] = useState([])
  let [subSubCatData, setsubSubCatData] = useState([])
  let [materialData, setmaterialData] = useState([])
  let [selectedMaterial, setSelectedMaterial] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);

  let [colorData, setcolorData] = useState([])


  const [galleryFiles, setGalleryFiles] = useState([]);  //





  const materialOptions = materialData.map(m => ({
    value: m._id,
    label: m.categoryName
  }));

  const colorlOptions = colorData.map(m => ({
    value: m._id,
    label: m.colorName
  }));



  let getParentCatData = () => {
    axios.get(`${apiBaseUrl}product/categoryview`)
      .then((res) => res.data)
      .then((finalRes) => {
        // console.log(finalRes)
        setParentCatData(finalRes.categoryData)

      })



  }

  let getSubCatData = (pid) => {
    axios.get(`${apiBaseUrl}product/subcategoryview/${pid}`)
      .then((res) => res.data)
      .then((finalRes) => {
        // console.log(finalRes)
        setSubCatData(finalRes.subCatData)

      })

  }

  let getSubSubCatData = (subid) => {
    axios.get(`${apiBaseUrl}product/sub-subcategoryview/${subid}`)
      .then((res) => res.data)
      .then((finalRes) => {
        // console.log(finalRes)
        setsubSubCatData(finalRes.subsubCatData)


      })



  }


  let getMaterialData = () => {
    axios.get(`${apiBaseUrl}product/material`)
      .then((res) => res.data)
      .then((finalRes) => {
        // console.log(finalRes)
        setmaterialData(finalRes.materialData)


      })


  }

  let getcolorData = () => {
    axios.get(`${apiBaseUrl}product/color`)
      .then((res) => res.data)
      .then((finalRes) => {
        // console.log(finalRes)
        setcolorData(finalRes.colorData)

      })

  }

  let saveProductData = (e) => {        // e for button tag  jaha ye call hoga

    e.preventDefault()

    let formValue = new FormData(e.target)
    axios.post(`${apiBaseUrl}product/savedata`, formValue)
      .then((res) => res.data)
      .then((finalRes) => {

        console.log(finalRes)

        setSucmsg(finalRes.msg)


        e.target.reset()
        // setTimeout(() => setSucmsg(""), 2000);
        setContent(" ")
        setProductImage(previewImage)
        setBackImage(previewImage)
        setGalleryImages([])
        setSelectedMaterial([])
        setSelectedColor([])


      })
    // .catch((err) => {

    //   // console.log(err)

    //   if (err.response?.status === 400) {

    //     toast(err.response.data.msg)

    //   }
    // })

  }


  useEffect(() => {
    getParentCatData()
    getMaterialData()
    getcolorData()
  }, [])


  return (
    <div>

      <section className='   border-y-2 border-[#E5E7EB] '>

        {

          sucmsg?.length > 0 ?
            <div className={`font-bold text-white purple-700 bg-[#8540EC] w-[200px] p-3`}>{sucmsg}</div>
            :

            ""
        }




        <div className='flex gap-2 p-4 text-[#4B5563] font-[600]'>
          <h2 className='  hover:text-[blue]'><Link to={"/dashboard"}>Home</Link> <span>/</span></h2>
          <h2 className=' hover:text-[blue]'> <Link to={" "}>
            Product
          </Link> </h2>
          <h2 className=' hover:text-[blue]'> <NavLink to={"#"}
            className={({ isActive }) => isActive ? " text-[#999797]" : " "}> /
            Product Details</NavLink> </h2>
        </div>
        <hr className='border-b-2 border-[#E5E7EB] ' />


        <form action="" onSubmit={saveProductData} encType="multipart/form-data">
          <div className='min-h-[550px]  py-5 '>

            <div className=' mx-4  grid grid-cols-3 gap-2'>

              <div>

                <div className=' rounded-[8px]   '>

                  <h2 className='font-[500]'>Product Image</h2>

                  {/* <input name='productImage' type="file" className='border-2 h-[250px] w-[100%] bg-center bg-no-repeat border-[#E5E7EB] ' /> */}
                  <div className="border relative h-[200px] w-full  mb-5">

                    <span onClick={(e) => setProductImage(previewImage)} className='text-[30px] cursor-pointer text-[purple] absolute right-5'>&times;</span>


                    {/* CLICKABLE IMAGE AREA */}
                    <label htmlFor="productImage" className="block h-full w-full cursor-pointer">

                      {/* HIDDEN FILE INPUT */}

                      <input type="file" id="productImage" name='productImage' hidden onChange={(e) => setProductImage(URL.createObjectURL(e.target.files[0]))} />



                      <img src={productImage} alt="No Image" className="h-full w-full " />



                    </label>

                  </div>
                </div>

                <div className=' rounded-[8px] '>

                  <h2 className='font-[500]'>Back Image</h2>

                  {/* <input name='backImage' type="file" className='border-2 bg-[url(https://flowbite.com/images/logo.svg)] h-[250px] w-[100%] bg-center bg-no-repeat border-[#E5E7EB] ' /> */}


                  <div className="border relative h-[200px] w-full  mb-5">

                    <span onClick={(e) => setBackImage(previewImage)} className='text-[30px] cursor-pointer text-[purple] absolute right-5'>&times;</span>


                    {/* CLICKABLE IMAGE AREA */}
                    <label htmlFor="backImage" className="block h-full w-full cursor-pointer">

                      {/* HIDDEN FILE INPUT */}

                      <input type="file" id="backImage" name='backImage' hidden onChange={(e) => setBackImage(URL.createObjectURL(e.target.files[0]))} />



                      <img src={backImage} alt="No Image" className="h-full w-full " />



                    </label>

                  </div>


                </div>

                <div className=' rounded-[8px]   '>

                  <h2 className='font-[500]'>Gallery Image</h2>

                  {/* <input name='galleryImage[]' type="file" className='border-2 h-[250px] w-[100%] bg-center bg-no-repeat border-[#E5E7EB] ' /> */}

                  <div className="border relative h-[200px] w-full overflow-hidden mb-5">

                    <span
                      onClick={() => setGalleryImages([])}
                      className="text-[30px] cursor-pointer text-[purple] absolute right-5 z-10"
                    >
                      &times;
                    </span>

                    <label className="block h-full w-full cursor-pointer">

                      <input
                        type="file"
                        multiple
                        name="galleryImage"
                        hidden
                        onChange={(e) => {
                          const files = [...e.target.files];
                          setGalleryFiles(files); // real files
                          setGalleryImages(files.map(file => URL.createObjectURL(file))); // previews
                        }}
                      />


                      {galleryImages.length === 0 && (
                        <div className="h-full flex items-center justify-center text-gray-400">
                          Click to upload images
                        </div>
                      )}

                      <div className="grid grid-cols-3 gap-2 p-2">
                        {galleryImages.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            className="h-20 w-full object-cover rounded"
                          />
                        ))}
                      </div>

                    </label>
                  </div>




                </div>
              </div>

              <div>

                <div className='mb-5'>
                  <label htmlFor="" className='font-[500]'>Prodct Name</label>
                  <input type="text" placeholder="Product Name" name='prodctName' className='border-2 w-[100%] border-[#D1D5DB] p-2 rounded-[8px] text-[14px] text-[#77787b]' />
                </div>



                <div className='mb-5 flex flex-col '>
                  <label htmlFor="subCategory" className='font-[500] '>Select Sub Category</label>
                  <select onChange={(e) => getSubSubCatData(e.target.value)} name="subCategory" id="subCategory" className='border-2 border-[#D1D5DB] w-[100%] p-2 rounded-[8px] text-[14px]'>
                    <option value="">Select sub Category</option>
                    {
                      subCatData &&
                      subCatData.map((data, index) => {
                        return (
                          <option key={index} value={data._id}>{data.subCategoryName}</option>


                        )


                      })
                    }

                  </select>
                </div>

                <div className='mb-5 flex flex-col'>
                  <label htmlFor="material" className='font-[500] '>Select Material</label>
                  {/* <select multiple name="material[]" id="material" className='border-2 border-[#D1D5DB] w-[100%] p-2 rounded-[8px] text-[14px]'>
                    <option value="">Nothing Selected</option>

                    {
                      materialData &&
                      materialData.map((data, index) => {
                        return (
                          <option key={index} value={data._id}>{data.categoryName}</option>

                        )
                      })
                    }


                  </select> */}


                  <Select
                    isMulti
                    options={materialOptions}
                    name='material[]'
                    value={selectedMaterial}
                    onChange={setSelectedMaterial}
                    placeholder="Select material"
                  />




                </div>

                <div className='mb-5 flex flex-col'>
                  <label htmlFor="productType" className='font-[500] '>Select Product Type</label>
                  <select name="productType" id="productType" className='border-2 border-[#D1D5DB] w-[100%] p-2 rounded-[8px] text-[14px]'>

                    <option value="Featured">Featured</option>
                    <option value="New Arrivals">New Arrivals</option>
                    <option value="Onsale">Onsale</option>

                  </select>
                </div>

                <div className='mb-5 flex flex-col'>
                  <label htmlFor="topRated" className='font-[500] '>Is Top Rated</label>
                  <select name="topRated" id="topRated" className='border-2 border-[#D1D5DB] w-[100%] p-2 rounded-[8px] text-[14px]'>
                    <option value="">Nothing Selected</option>
                    <option value={true}>YES</option>
                    <option value={false}>NO</option>

                  </select>
                </div>

                <div className='mb-5'>
                  <label htmlFor="actualPrice" className='font-[500]'>Actual Price</label>
                  <input type="text" placeholder="Actual Price" name='actualPrice' className='border-2 w-[100%] border-[#D1D5DB] p-2 rounded-[8px] text-[14px] text-[#77787b]' />
                </div>

                <div className='mb-5'>
                  <label htmlFor="totalInStocks" className='font-[500]'>Total In Stocks</label>
                  <input type="text" placeholder="Total In Stocks" name='totalInStocks' className='border-2 w-[100%] border-[#D1D5DB] p-2 rounded-[8px] text-[14px] text-[#77787b]' />
                </div>



              </div>

              <div>

                <div className='mb-5 flex flex-col'>
                  <label htmlFor="parentCategory" className='font-[500] '>Select Parent Category</label>
                  <select onChange={(e) => getSubCatData(e.target.value)} name="parentCategory" id="parentCategory" className='border-2 border-[#D1D5DB] w-[100%] p-2 rounded-[8px] text-[14px]'>
                    <option value="">Nothing Selected</option>

                    {
                      ParentCatData.map((data, index) => {
                        return (

                          <option value={data._id}>{data.categoryName}</option>

                        )
                      })
                    }

                  </select>
                </div>

                <div className='mb-5 flex flex-col'>
                  <label htmlFor="subsubCategory" className='font-[500] '>Select Sub Sub Category</label>
                  <select name="subsubCategory" id="subsubCategory" className='border-2 border-[#D1D5DB] w-[100%] p-2 rounded-[8px] text-[14px]'>
                    <option value="">Nothing Selected</option>

                    {

                      subSubCatData &&
                      subSubCatData.map((data, index) => {
                        return (

                          <option key={index} value={data._id}>{data.subsubCategoryName}</option>

                        )
                      })
                    }

                  </select>
                </div>

                <div className='mb-5 flex flex-col'>
                  <label htmlFor="color" className='font-[500] '>Select Color</label>
                  {/* <select multiple name="color[]" id="color" className='border-2 border-[#D1D5DB] w-[100%] p-2 rounded-[8px] text-[14px]'>
                    <option value="">Nothing Selected</option>

                    {
                      colorData &&
                      colorData.map((data, index) => {
                        return (
                          <option key={index} value={data._id}>{data.colorName}</option>

                        )
                      })
                    }
                  </select> */}

                  <Select
                    isMulti
                    name="color"
                    defaultValue={selectedColor}
                    onChange={setSelectedColor}
                    options={colorlOptions}
                  />
                </div>

                <div className='mb-5 flex flex-col'>
                  <label htmlFor="bestSelling" className='font-[500] '>Is Best Selling</label>
                  <select name="bestSelling" id="bestSelling" className='border-2 border-[#D1D5DB] w-[100%] p-2 rounded-[8px] text-[14px]'>
                    <option value="">Nothing Selected</option>
                    <option value={true}>YES</option>
                    <option value={false}>NO</option>

                  </select>
                </div>

                <div className='mb-5 flex flex-col'>
                  <label htmlFor="upsell" className='font-[500] '>Is Upsell</label>
                  <select name="upsell" id="upsell" className='border-2 border-[#D1D5DB] w-[100%] p-2 rounded-[8px] text-[14px]'>
                    <option value="">Nothing Selected</option>
                    <option value={true}>YES</option>
                    <option value={false}>NO</option>


                  </select>
                </div>

                <div className='mb-5'>
                  <label htmlFor="salePrice" className='font-[500]'>Sale Price</label>
                  <input type="text" placeholder="Sale Price" name='salePrice' className='border-2 w-[100%] border-[#D1D5DB] p-2 rounded-[8px] text-[14px] text-[#77787b]' />
                </div>

                <div className='mb-5'>
                  <label htmlFor="Order" className='font-[500]'>Order</label>
                  <input type="text" placeholder="Order" name='Order' className='border-2 w-[100%] border-[#D1D5DB] p-2 rounded-[8px] text-[14px] text-[#77787b]' />
                </div>

              </div>



            </div>



            <div className='mx-4 py-4'>
              <label htmlFor="description" className='font-[500]'>Description</label>
              {/* <textarea name="description" id="" className='w-[100%] border border-[#D1D5DB] h-[200px] resize-none'>

              </textarea> */}


              <JoditEditor
                name='description'
                ref={editor}
                value={content}
                onChange={setContent}
              />


            </div>

            <Button label={"Create Product"} className="bg-[#8540EC] mx-4 " />



          </div>
        </form>




      </section >



    </div >
  )
}
