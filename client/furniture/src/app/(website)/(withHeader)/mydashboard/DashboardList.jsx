// "use client"
// import React, { useEffect, useState } from 'react'
// import Dashboard from './Dashboard'
// import Order from './Order'
// import Address from './Address'
// import Profile from './Profile'
// import ChangePassword from './ChangePassword'

// export default function DashBoardList() {

//     let [tab, setTab] = useState('dashboard')

//     return (
//         <div className='max-w-[1320px] mx-auto py-5'>
//             <div className="md:flex">
//                 <ul className="flex-column space-y space-y-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
//                     <li>
//                         <button onClick={() => setTab('dashboard')} className={`w-[250px] inline-flex items-center px-4 py-3 text-white ${tab == 'dashboard' ? 'bg-amber-400' : 'bg-black'} rounded-lg active dark:bg-blue-600 cursor-pointer`} aria-current="page">
//                             My Dashboard
//                         </button>
//                     </li>
//                     <li>
//                         <button onClick={() => setTab('order')} className={`w-[250px] inline-flex items-center px-4 py-3 text-white ${tab == 'order' ? 'bg-amber-400' : 'bg-black'} rounded-lg active dark:bg-blue-600 cursor-pointer`}>
//                             Orders
//                         </button>
//                     </li>
//                     <li>
//                         <button onClick={() => setTab('address')} className={`w-[250px] inline-flex items-center px-4 py-3 text-white ${tab == 'address' ? 'bg-amber-400' : 'bg-black'} rounded-lg active dark:bg-blue-600 cursor-pointer`}>
//                             Address
//                         </button>
//                     </li>
//                     <li>
//                         <button onClick={() => setTab('myprofile')} className={`w-[250px] inline-flex items-center px-4 py-3 text-white ${tab == 'myprofile' ? 'bg-amber-400' : 'bg-black'} rounded-lg active dark:bg-blue-600 cursor-pointer`}>
//                             My Profile
//                         </button>
//                     </li>
//                     <li>
//                         <button onClick={() => setTab('changePass')} className={`w-[250px] inline-flex items-center px-4 py-3 text-white ${tab == 'changePass' ? 'bg-amber-400' : 'bg-black'} rounded-lg active dark:bg-blue-600 cursor-pointer`}>
//                             Chnage Password
//                         </button>
//                     </li>
//                 </ul>
//                 <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
//                     {
//                         tab == 'dashboard' ?
//                             <Dashboard />
//                             : tab == 'order' ?
//                                 <Order />
//                                 : tab == 'address' ?
//                                     <Address />
//                                     : tab == 'myprofile' ?
//                                         <Profile />
//                                         : tab == 'changePass' ?
//                                             <ChangePassword />
//                                             :
//                                             <></>
//                     }
//                 </div>
//             </div>
//         </div>
//     )
// }

"use client"
import React, { useState } from 'react'
import Dashboard from './Dashboard'
import Orders from './Orders'
import Address from './Address'
import Changepassword from './Changepassword'
import Myprofile from './Myprofile'
import { useDispatch } from 'react-redux'
import { logout } from '@/app/redux/slice/userSlice'
import { useRouter } from 'next/navigation'

export default function () {

    let [tab, setTab] = useState('dashboard')

    let dispatch = useDispatch()
    let router = useRouter()

    let logoutUser = () => {

        dispatch(logout())
        router.replace('/login')

    }

    return (
        <div className='max-w-[1320px] mx-auto py-5'>

            <div className='lg:grid md:grid-cols-[20%_auto] md:gap-8 px-12 lg:px-0'>

                <ul className='flex flex-col justify-center items-center lg:block lg:items-start lg:justify-start'>
                    <li><button onClick={() => setTab('dashboard')} className={`w-[250px] mb-2 inline-flex items-center px-4 py-3 text-white ${tab == 'dashboard' ? "bg-[#c09578]" : "bg-[black]"} rounded-lg active dark:bg-blue-600 cursor-pointer`}>My Dashboard</button> </li>
                    <li><button onClick={() => setTab('order')} className={`w-[250px] mb-2 inline-flex items-center px-4 py-3 text-white ${tab == 'order' ? "bg-[#c09578]" : "bg-[black]"} rounded-lg active dark:bg-blue-600 cursor-pointer`}>Orders</button></li>
                    <li><button onClick={() => setTab('address')} className={`w-[250px] mb-2 inline-flex items-center px-4 py-3 text-white ${tab == 'address' ? "bg-[#c09578]" : "bg-[black]"} rounded-lg active dark:bg-blue-600 cursor-pointer`}>Address</button></li>
                    <li><button onClick={() => setTab('myprofile')} className={`w-[250px] mb-2 inline-flex items-center px-4 py-3 text-white ${tab == 'myprofile' ? "bg-[#c09578]" : "bg-[black]"} rounded-lg active dark:bg-blue-600 cursor-pointer`}>My Profile</button></li>
                    <li><button onClick={() => setTab('changepass')} className={`w-[250px] mb-2 inline-flex items-center px-4 py-3 text-white ${tab == 'changepass' ? "bg-[#c09578]" : "bg-[black]"} rounded-lg active dark:bg-blue-600 cursor-pointer`}>Change Password</button></li>
                    <li><button onClick={() => { setTab('logout'); logoutUser(); }}



                        className={`w-[250px] mb-2 inline-flex items-center px-4 py-3 text-white ${tab == 'logout' ? "bg-[#c09578]" : "bg-[black]"} rounded-lg active dark:bg-blue-600 cursor-pointer`}>logout</button></li>


                </ul>

                <div>
                    {
                        tab == 'dashboard' ?
                            <Dashboard />
                            :
                            tab == 'order' ?
                                <Orders />
                                :
                                tab == 'address' ?
                                    <Address />
                                    :
                                    tab == 'changepass' ?
                                        <Changepassword />
                                        :
                                        tab == 'myprofile' ?
                                            <Myprofile />
                                            :
                                            <></>
                    }
                </div>

            </div>



        </div>
    )
}
