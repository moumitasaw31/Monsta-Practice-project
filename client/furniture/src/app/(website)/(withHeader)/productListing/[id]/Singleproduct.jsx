

// import { log } from 'firebase/firestore/pipelines';
// import { useParams } from 'next/navigation'
// import React, { useEffect, useState } from 'react'

export default function Singleproduct({singleData}) {



  // let params = useParams();

  // let Sid = params.id;

  // let [SingleData, SetSingleData] = useState([]);

  // console.log(SingleData)

  // useEffect(() => {

  //   axios.get(`https://dummyjson.com/products/${Sid}`)
  //     .then((res) => {
  //       SetSingleData(res.data)
  //     })

  // }, [])



  return (
    <>

      <section>
        <div className='max-w-[1320px] mx-auto grid grid-cols-[50%_auto] gap-8 p-3'>
          <div className="border border-[#ccc]">
            <img src={singleData.thumbnail} alt="images" className="mx-auto" />
            <div className='flex gap-5 mt-5'>
              <img src={singleData.images} alt="images" className='w-[100px] border border-[#ccc]' />
              {/* <img src="\images\monsta furniture (12).jpg" alt="images" className='w-[100px]' />
              <img src="\images\monsta furniture (12).jpg" alt="images" className='w-[100px]' /> */}
            </div>

          </div>
          <div>
            {/* <h1 className='text-[25px] mb-3'>{SingleData.title} </h1> */}
            <h1 className='text-[25px] mb-3'>Evan Coffee Mirror {singleData.title} </h1>
            <p className='mb-10'> <span className='line-through'>Rs. 2,600</span> <span className='text-[20px] text-[#C09578] font-bold'>{singleData.price}</span> </p>

            <p className='text-[14px] mb-5'>{singleData.description}</p>
            <hr className='mb-5 text-[#ccc]' />
            <div>
              <button className='bg-[#c09578] p-[5px_20px] text-white cursor-pointer mb-5'>Add to Cart</button>
            </div>

            <div className='flex flex-col'>
              <h4>Code: jod00113</h4>
              <h4>Dimension:{singleData.dimensions.height}</h4>
              <h4>Estimate Delivery Days: {singleData.returnPolicy}</h4>
              <h4>Category: </h4>
              <h4>Color: Faded Ochre</h4>
              <h4> Material: Marandi Wood</h4>



            </div>
          </div>
        </div>

        <div className='max-w-[1320px] mx-auto mt-5'>
          <h1 className='font-bold text-[25px] text-[#c09578] mb-5'>Description</h1>
          <p>{singleData.description}</p>
        </div>

      </section>


    </>
  )
}
