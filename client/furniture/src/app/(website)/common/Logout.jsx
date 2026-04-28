// "use client"
// import { logout } from '@/app/redux/slice/userSlice'
// import { useRouter } from 'next/navigation'

// import React, { useEffect } from 'react'
// import { useDispatch } from 'react-redux'

// export default function Logout() {

//     let dispatch = useDispatch()
//     let router = useRouter()

//     let logoutUser = () => {

//         dispatch(logout())
//         router.replace("/login")


//     }
//     return (
//         <div>

//             <div>

//                 <button className='bg-[black] text-white text-left p-2 w-full rounded' onClick={logoutUser}>Logout </button>
//             </div>

//         </div>
//     )
// }

// // 

// // Why change router.push("/") → router.replace("/login") ?
// // router.push("/")

// // User can press back button → go back to protected page ❌

// // router.replace("/login")

// // User cannot go back → safer ✅
// // //

