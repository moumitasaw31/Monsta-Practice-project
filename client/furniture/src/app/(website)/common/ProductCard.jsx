'use client'
import { fetchCartData } from '@/app/redux/slice/cartSlice';
import axios from 'axios';
import Link from 'next/link';
import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';



export default function ProductCard({ data }) {

  // console.log("data from card",data);

  let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL


  // let token = useSelector((state) => state.myUser.token)

  let token = useSelector((myStore) => myStore.myUser.token)
  let dispatch = useDispatch()







  let addToCart = () => {


    if (!token) {
      alert("Kindly Login First")
      return
      // setTimeout(() => {
      //   router.push("/login")
      // }, 2000)


    }
    // when user click what you will go in database

    let cartObj = {

      productId: data.id,
      productImage: data.thumbnail,
      productName: data.title,
      category: data.category,
      salePrice: data.price,
      productQty: 1,

    }

    axios.post(`${apiBaseUrl}cart/add-to-cart`, cartObj, {

      headers: {
        Authorization: `Bearer ${token}`                // sending token taki backend ko pata chale user is logged in
      }

    })
      .then((res) => res.data)
      .then((finalRes) => {
        console.log(finalRes);
        toast(finalRes.msg)
        dispatch(fetchCartData())



      })


  }



  return (
    <div>

      <ToastContainer />


      <div className='lg:shadow'>
        <Link href={`/productListing/${data.id}`} >
          <img src={data.thumbnail} className='mx-auto' alt="" />
          <h2 className='text-center mb-3'>{data.category}</h2>
          {/* product Name */}
          <h3 className='text-center font-bold '>  {data.title}</h3>

          <hr className='text-[#ccc] w-[300px] mx-auto mt-5 mb-5' />

          <h4 className='text-center'> Price -{data.price}/</h4>

        </Link>



        <div className='flex ite justify-center p-2 gap-2'>
          <button className="bg-[#c09578] p-[5px_15px] cursor-pointer"><FaRegHeart /></button>
          <button onClick={addToCart} className='border border-[#c09578] p-[5px_15px] cursor-pointer bg-[#c09578] text-white'>Add to cart</button>
        </div>


      </div>






    </div >
  )
}
