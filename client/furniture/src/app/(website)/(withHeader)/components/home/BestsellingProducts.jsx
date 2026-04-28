"use client"
import Products from '@/app/(website)/common/ProductCard';
import React, { useEffect } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";





export default function BestsellingProducts({ bestSellerData }) {

    // console.log("bestselling dATA" , bestSellerData)
   

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div>
            <section className='py-12'>
                <div className='max-w-[1320px] mx-auto'>
                    <div className='flex items-center gap-5 '>
                        <h1 className='text-[25px] font-bold'>Bestselling Products</h1>
                        <div className=' border-b-[3px] rounded border-b-[#92919176] w-[75%]'></div>
                        <button className='flex items-center'>
                            <IoIosArrowBack className='cursor-pointer text-[16px]' />
                            <IoIosArrowForward className='cursor-pointer text-[16px]' />
                        </button>

                    </div>


                </div>


                <div className="max-w-[1320px] mx-auto grid grid-cols-1  gap-6 mt-6">




                    <Carousel
                        swipeable={false}
                        draggable={false}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        // deviceType={this.props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-50-px"
                    >


                        {
                            bestSellerData.map((data, i)=>{
                                return(
                                    <div key={i}>   <Products  data={data} /> </div>
                                )
                            })

                        }
                    </Carousel>


                </div>


            </section>
        </div>
    )
}
