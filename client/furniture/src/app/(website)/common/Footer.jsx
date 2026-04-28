import Link from 'next/link';
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";







export default function Footer() {
  return (
    <div>
      <section className=' py-12 border-t w-full border-t-[#B2B2B2] mt-12'>
        <div className='max-w-[1320px] mx-auto  '>

          <div className='grid md:grid-cols-[30%_20%_20%_auto] ps-[25px]  md:mb-3'>
            <div>
              <h1 className='text-[22px] font-bold mb-5'>Contact Us</h1>
              <div className='text-[14px] mb-5 leading-7 text-[#5A5A5A]'>
                <p>Address: Claritas est etiam processus dynamicus</p>
                <p>Phone: 98745612330</p>
                <p>Email: furnitureinfo@gmail.com</p>
              </div>

              <div className='flex items-center gap-2 text-[#B2B2B2] md:text-[20px] mb-3'>

                <Link href="" className='border rounded-full p-2'><FaFacebookF /></Link>
                <Link href="" className='border rounded-full p-2'><SlSocialInstagram /></Link>
                <Link href="" className='border rounded-full p-2'><TiSocialTwitter /></Link>
                <Link href="" className='border rounded-full p-2'><TiSocialLinkedin /></Link>
                <Link href="" className='border rounded-full p-2'><TiSocialYoutube /></Link>
                <Link href="" className='border rounded-full p-2'><FaWhatsapp /></Link>


              </div>

            </div>

            <div>

              <h1 className='text-[22px] font-bold mb-5'>Information</h1>
              <div>
                <ul className='text-[14px] mb-5 leading-7 text-[#5A5A5A]'>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Frequently Questions</li>
                </ul>
              </div>

            </div>

            <div>
              <h1 className='text-[22px] font-bold mb-5'>My Account</h1>
              <div>
                <ul className='text-[14px] mb-5 leading-7 text-[#5A5A5A]'>
                  <li> <Link href="/mydashboard">My Dashboard</Link></li>
                  <li> <Link href='/wishlist'>Wishlist</Link> </li>
                  <li> <Link href='/cart'>Cart</Link></li>
                  <li>Checkout</li>
                </ul>
              </div>
            </div>

            <div>
              <h1 className='text-[22px] font-bold mb-5'>Top Rated Products</h1>
              <div className='flex gap-3 border-b mb-3'>
                <img src="\images\monsta furniture (13).jpg" alt="" className='w-[100px] h-[60px]' />
                <div className='text-[14px] pb-5 '>
                  <h2 className='mb-2'>2 Seater Sofa</h2>
                  <p className='mb-4'>Ganthur Sheesham Wood Sofa Set</p>
                  <p><span className='line-through'>Rs. 8,000 </span>Rs. 7,600</p>
                </div>
              </div>

              <div className='flex gap-3 '>
                <img src="\images\monsta furniture (13).jpg" alt="" className='w-[100px] h-[60px]' />
                <div className='text-[14px] pb-5 '>
                  <h2 className='mb-2'>2 Seater Sofa</h2>
                  <p className='mb-4'>Ganthur Sheesham Wood Sofa Set</p>
                  <p><span className='line-through'>Rs. 8,000 </span>Rs. 7,600</p>
                </div>
              </div>
            </div>
          </div>

          <div className='border-b border-t border-[#B2B2B2] flex items-center flex-wrap justify-center gap-10 py-7'>

            <div>Home</div>
            <div> Online Store</div>
            <div> Privacy Policy</div>
            <div> Terms Of Use</div>

          </div>

          <div className='py-10 text-center leading-[50px]'>
            <p>All Rights Reserved By Furniture | © 2026</p>
            <img src="\images\monsta furniture (2).png" alt="" className='mx-auto' />
          </div>
        </div>

      </section>
    </div>
  )
}
