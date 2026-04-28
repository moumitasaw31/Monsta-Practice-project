'use client'
import { loginSucess } from '@/app/redux/slice/userSlice'
import axios from 'axios'
// import { headers } from 'next/headers'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Changepassword() {

    let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL

    let token = useSelector((myStore) => myStore.myUser.token)

    let user = useSelector((myStore) => myStore.myUser.user)

    let dispatch = useDispatch()

    // console.log("user details =>",user);

    // console.log(token);



    let [msg, setMsg] = useState('')
    let [formValue, setFormValue] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    })

    let setValueGetValue = (e) => {

        let obj = { ...formValue }
        let inputName = e.target.name
        obj[inputName] = e.target.value
        setFormValue(obj)
    }

    let submitForm = (e) => {

        e.preventDefault()

        if (user?.userPassword) {
            axios.post(`${apiBaseUrl}user/changeCurrentPass`, formValue, {

                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then((res) => res.data)
                .then((finalRes) => {
                    // console.log(finalRes);
                    if (finalRes.status == 0) {
                        setMsg(finalRes.msg)
                    }
                    else {
                        setMsg(finalRes.msg)
                        setFormValue({
                            currentPassword: '',
                            newPassword: '',
                            confirmPassword: ''
                        })


                    }

                })
                .catch((error) => {
                    // console.log(error)
                })
        }
        else {
            axios.post(`${apiBaseUrl}user/google-password`, {
                newPassword: formValue.newPassword,
                confirmPassword: formValue.confirmPassword
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            )
                .then((res) => res.data)
                .then((finalRes) => {
                    // console.log(finalRes.user);
                    setMsg(finalRes.msg)
                    if (finalRes.status == 1) {
                        dispatch(loginSucess({
                            user: {
                                ...user,
                                userPassword: true
                            },
                            
                        }))

                        setFormValue({
                            currentPassword: '',
                            newPassword: '',
                            confirmPassword: ''
                        })

                    }

                })
                .catch((error)=>{
                    console.log(error)
                })
        }

    }


    return (
        <div>
            <div>

                {user?.userPassword
                    ? <button><h1 className='text-[30px] mb-3'>Change Password</h1></button>
                    : <button><h1 className='text-[30px] mb-3'>Create Password</h1></button>
                }



                <form action="" onSubmit={submitForm} className='border border-[#ccc] rounded p-5 w-full'>

                    {user?.userPassword
                        ?
                         <div>
                            <label htmlFor="currentPassword">Current Password*</label>
                            <div>
                                <input required type="password" value={formValue.currentPassword} onChange={setValueGetValue} name='currentPassword' className='border p-3 w-full border-[#ccc] rounded mt-3 mb-4' />
                            </div>
                        </div>
                        :
                         <>
                        </>
                    }




                    <label htmlFor="newPassword">New Password*</label>
                    <div>
                        <input required type="password" value={formValue.newPassword} onChange={setValueGetValue} name='newPassword' className='border p-3 w-full border-[#ccc] rounded mt-3 mb-4' />
                    </div>

                    <label htmlFor="confirmPassword">Confirm Password*</label>
                    <div>
                        <input required type="password" value={formValue.confirmPassword} onChange={setValueGetValue} name='confirmPassword' className='border p-3 w-full border-[#ccc] rounded mt-3 mb-4' />
                    </div>
                    {
                        msg != '' ?

                            <div>
                                <p className="text-red-500">{msg}</p>
                            </div>


                            :

                            <></>
                    }


                    <div className='flex justify-end'>

                        {user?.userPassword
                            ?
                            <button className='uppercase border bg-[#C09578] font-bold text-white px-3 py-2 rounded-4xl text-[14px]'>
                                Change Password</button>
                            :

                            <button className='uppercase border bg-[#C09578] font-bold text-white px-3 py-2 rounded-4xl text-[14px]'>
                                Create Password</button>
                        }

                    </div>
                </form>
            </div>
        </div>
    )
}
