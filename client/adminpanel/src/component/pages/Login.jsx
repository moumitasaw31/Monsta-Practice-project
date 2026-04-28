import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { context } from '../../contextApi/MainContext';
import { toast } from 'react-toastify';


export default function Login() {


    // JS - AREA

    const apiBaseUrl = import.meta.env.VITE_APIBASEURL

    let [loginMsg, setLoginMsg] = useState(" ")

    let { id, setId } = useContext(context)


    let navigate = useNavigate()

    let submitForm = (e) => {

        e.preventDefault();

        let formValue = new FormData(e.target)
        axios.post(`${apiBaseUrl}auth-login/user-login`, formValue)
            .then((res) => res.data)
            .then((finalRes) => {
                console.log(finalRes);
                if (finalRes.status === 0) {               // galat hone par pahle message dikhaya
                    setLoginMsg(finalRes.msg)
                }
                else {
                    setId(finalRes.loginDeatails._id)     // details sahi hone se id jayega state me

                }

            })



    }

    useEffect(() => {

        if (id) {                                                                        // agar id mila dashboard me bhej do
            navigate("/dashboard");
            toast.success("Login User");
        }

    }, [id])


    return (
        <div>


            <section className=' bg-[#2269b1]'>

                <div className='max-w-[1320px] mx-auto  fixed left-[50%] top-[50%] translate-[-50%] '>
                    <div className='w-[500px]  '>
                        <figure className='py-4' >
                            <Link to={"/"}>  <img src="https://www.wscubetech.com/images/wscube-tech-logo-2.svg" alt="" className='mx-auto' /></Link>
                        </figure>
                        <form action="" onSubmit={submitForm} className='p-[20px] bg-white shadow-[0px_0px_30px_4px_#ccc] rounded-[10px]'>
                            <h1 className='text-[24px] font-bold mb-3'>Sign in to your account</h1>

                            {
                                loginMsg != '' && <span className='text-red-500'>{loginMsg}</span>
                            }

                            <div className='mb-3'>

                                <label htmlFor="userEmail" className='font-[500] text-[14px]'>Email</label>
                                <div>
                                    <input type="email" className='border-[1px] border-[#ccc] w-[100%] bg-[#F9FAFB]
                                    mt-2 lg:py-2.5 px-[10px] rounded-[10px]' placeholder='Enter Email' name='userEmail' />

                                </div>
                            </div>


                            <div className='mb-3'>

                                <label htmlFor="userPassword" className='font-[500] text-[14px]' >Password</label>
                                <div>
                                    <input type="password" className='border-[1px] border-[#ccc] w-[100%] bg-[#F9FAFB]
                                    mt-2 lg:py-2.5 px-[10px] rounded-[10px]' placeholder='Enter Password' name='userPassword' />

                                </div>
                            </div>

                            <div>
                                <input type="submit" value="Sign In" className='w-[100%] text-white bg-[#1D4ED8] py-2.5 rounded-[10px] mt-2' />
                            </div>


                        </form>
                    </div>

                </div>

            </section>


        </div>
    )
}
