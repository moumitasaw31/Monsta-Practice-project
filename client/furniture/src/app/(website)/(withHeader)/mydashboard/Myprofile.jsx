'use client'
import { loginSucess } from '@/app/redux/slice/userSlice';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Myprofile() {

    let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL

    let dispatch = useDispatch()


    const user = useSelector((state) => state.myUser.user)
    // console.log(user);

    const token = useSelector((state) => state.myUser.token)
    // console.log(token);

    let [msg, setMsg] = useState('')


    let [formValue, setFormValue] = useState({
        title: '',
        userName: '',
        userEmail: '',
        userPhone: '',
        userAddress: '',
    })

    useEffect(() => {

        if (user) {
            setFormValue({
                title: user.userTitle || '',
                userName: user.userName || '',
                userEmail: user.userEmail || '',
                userPhone: user.userPhone || '',
                userAddress: user.userAddress || '',
            })
        }

    }, [user])


    let setValueGetValue = (e) => {

        let obj = { ...formValue }
        let { name, value } = e.target
        obj[name] = value
        setFormValue(obj)
    }

    let submitForm = (e) => {

        e.preventDefault()
        axios.put(`${apiBaseUrl}user/update-profile`, formValue, {

            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => res.data)
            .then((finalRes) => {
                console.log(finalRes);
                if (finalRes.status == 1) {
                    setMsg(finalRes.msg)
                    dispatch(loginSucess({ user: finalRes.user }))

                }
                else {
                    setMsg(finalRes.msg)
                }


            })

    }




    return (
        <div>
            <div>
                <h1 className='text-[30px] mb-3'>My Profile</h1>

                <form action="" className='border border-[#ccc] rounded p-5 w-full' onSubmit={submitForm}>
                    <div className='mb-3 flex gap-3'>
                        <input type="radio" name='title' checked={formValue.title === "mr"} value='mr' onChange={setValueGetValue} /> Mr.
                        <input type="radio" name='title' checked={formValue.title === "mrs"} value='mrs' onChange={setValueGetValue} /> Mrs.
                    </div>


                    <label htmlFor="userName">Name*</label>
                    <div>
                        <input type="text" name='userName' onChange={setValueGetValue} value={formValue.userName} className='border p-3 w-full border-[#ccc] rounded mt-3 mb-4' />
                    </div>

                    <label htmlFor="userEmail">Email*</label>
                    <div>
                        <input type="email" name='userEmail' onChange={setValueGetValue} value={formValue.userEmail} className='border p-3 w-full border-[#ccc] rounded mt-3 mb-4' />
                    </div>

                    <label htmlFor="userPhone">Mobile Number*</label>
                    <div>
                        <input type="tel" pattern="[0-9]{10}" inputMode="numeric" maxLength={10} onChange={setValueGetValue} name='userPhone' value={formValue.userPhone} className='border p-3 w-full border-[#ccc] rounded mt-3 mb-4' />
                    </div>

                    <label htmlFor="userAddress">Address*</label>
                    <div>
                        <textarea name="userAddress" id="userAddress" value={formValue.userAddress} onChange={setValueGetValue} className='border p-3 w-full border-[#ccc] rounded mt-3 mb-4'></textarea>
                    </div>

                    <div className='flex justify-end'>
                        <button className='uppercase border bg-[#C09578] text-white p-3 rounded-4xl text-[14px]'>update</button>
                    </div>

                    {
                        msg && <div><p className='text-green-700'>{msg}</p></div>
                    }
                </form>
            </div>

        </div>
    )
}
