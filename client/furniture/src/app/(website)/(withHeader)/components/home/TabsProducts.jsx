"use client";
import { tabsProducts } from '@/app/(website)/apiServices/homeservicesPage';
import Products from '@/app/(website)/common/ProductCard';
import React, { useEffect, useState } from 'react'
import { FaRegHeart } from "react-icons/fa";


export default function TabsProducts({ tabsdata }) {

    let [changeCatg, setChangeCatg] = useState(tabsdata);

    // console.log(tabsdata);

    useEffect(() => {
        handlecategory("furniture");
    }, []);




    let handlecategory = async (category) => {

        let tabscategory = await tabsProducts(category);
        setChangeCatg(tabscategory);


    }



    return (
        <div>


            <section className='py-5' >
                <div className='max-w-[1320px] mx-auto flex justify-center items-center font-bold gap-5 '>

                    <div>

                        <button onClick={() => handlecategory("furniture")} className={`cursor-pointer border border-amber-300 p-4  'text-[#C09578]' `} >Featured</button>
                    </div>

                    <div>
                        <button onClick={() => handlecategory("smartphones")} className={`cursor-pointer border border-amber-300 p-4 text-[#C09578] "text-black" `} >New Arrival</button>
                    </div>

                    <div>
                        <button onClick={() => handlecategory("beauty")} className={`cursor-pointer border border-amber-300 p-4 xt-[#C09578] "text-black" `} >Onsale</button>
                    </div>

                </div>

                <div>
                    {
                        <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                            {
                                changeCatg.map((data, index) => (
                                    <Products key={index} data={data} />
                                ))
                            }
                        </div>
                    }

                </div>


            </section>
        </div>
    )
}
