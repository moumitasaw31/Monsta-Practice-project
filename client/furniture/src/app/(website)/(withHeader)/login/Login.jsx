"use client"
import React, { useEffect, useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { loginSucess } from '@/app/redux/slice/userSlice';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";
import { app } from '@/config/firebaseConfig';


export default function Login() {

    let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL


    // let user = useSelector((store) => store.myUser.user)   //  id, userName hai

    // let [passwordForm, setPasswordForm] = useState(false)
    let [loginForm, setLoginForm] = useState(true)


    let router = useRouter()
    let dispatch = useDispatch()

    let [msg, setMsg] = useState('')

    let [formValue, setFormValue] = useState({
        userEmail: '',
        userPassword: '',
    })

    let getValuesetValue = (e) => {

        let obj = { ...formValue }
        let inputName = e.target.name
        let inputValue = e.target.value
        obj[inputName] = inputValue
        setFormValue(obj)
    }




    let userLogin = (e) => {

        e.preventDefault()
        axios.post(`${apiBaseUrl}user/login`, formValue)
            .then((res) => res.data)
            .then((finalRes) => {

                // console.log(finalRes);


                if (finalRes.status == 1) {
                    // 2 things require

                    let userDta = {
                        id: finalRes.user._id,
                        userName: finalRes.user.userName,
                        userEmail: finalRes.user.userEmail,
                        userPhone: finalRes.user.userPhone,
                        userAddress: finalRes.user.userAddress,
                        userPassword: finalRes.user.userPassword

                    }
                    setMsg('')
                    //  data jaye slice me
                    dispatch(loginSucess({ user: userDta, token: finalRes.token }))
                    router.push('/')
                }
                else {
                    setMsg(finalRes.msg)

                }
            })
    }

    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    let googleLogin = () => {

        // const auth = getAuth(app);
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;

                // console.log(user);
                let userObj = {
                    userEmail: user.email,
                    userName: user.displayName,


                }

                axios.post(`${apiBaseUrl}user/google-login`, userObj)
                    .then((res) => res.data)
                    .then((finalRes) => {
                        // console.log(finalRes);

                        if (finalRes.status == 1) {


                            // let userDta = {

                            //     id: finalRes.user.id,
                            //     userName: finalRes.user.userName,
                            //     userEmail: finalRes.user.userEmail,
                            //     userPassword: finalRes.user.userPassword
                            // }
                            dispatch(loginSucess({ user: finalRes.user, token: finalRes.token }))
                            router.replace('/')
                        }
                    })


                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                // console.log(error)
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return (
        <div>

            <section className='bg-[#ff9980] min-h-screen'>

                {/* {

                    passwordForm && <form className='w-[300px] bg-white h-[200px] p-3 absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center'>

                        <div><label htmlFor="userPassword">Set your password</label></div>

                        <input type="password" value={formValue.userPassword} onChange={getValuesetValue} name='userPassword' placeholder='Enter password' className='border w-full p-2' />

                        <div>
                            <button onClick={setGooglePasswordLogin} className="cursor-pointer text-white text-[20px] bg-[#ff9980]  w-full p-2 rounded mt-3">Go</button>
                        </div>
                    </form>

                } */}




                <div className='max-w-[1320px] mx-auto '>

                    <div className='flex items-center justify-center min-h-screen'>

                        {
                            loginForm &&

                            <form action="" onSubmit={userLogin} className='bg-white rounded w-[500px] mx-auto p-5'>

                                <div>
                                    <h1 className='text-center text-[50px] p-3'>Login</h1>


                                    {msg != '' ? <p className='text-red-500 text-center'>{msg}</p> : ''}

                                    <div className='mb-5'>
                                        <label htmlFor="userEmail">Enter Email</label>

                                        <div>
                                            <input type="email" onChange={getValuesetValue} value={formValue.userEmail} name='userEmail' placeholder='Enter your email' className='border rounded p-2 w-full ' />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="userPassword">Enter Password</label>

                                        <div>
                                            <input type="password" required onChange={getValuesetValue} value={formValue.userPassword} name='userPassword' placeholder='Enter your password' className='border rounded p-2 w-full ' />
                                        </div>
                                    </div>

                                    <div>
                                        <button type='submit' className="cursor-pointer text-white text-[20px] bg-[#ff9980]  w-full p-2 rounded mt-3">Login</button>
                                    </div>

                                    <div className="flex items-center justify-center gap-3 mt-3">
                                        <button onClick={googleLogin} className="bg-[#ff9980] p-2 rounded-2xl"><FaGoogle /></button>
                                        <button className="bg-[#ff9980] p-2 rounded-2xl"><FaFacebook /></button>
                                        <button className="bg-[#ff9980] p-2 rounded-2xl"><FaGithub /></button>
                                    </div>

                                    <div className="mt-7 text-center">
                                        <h2>Don't have an account? <Link href="/registration" className="border-b">Sign Up</Link> </h2>
                                    </div>
                                </div>



                            </form>
                        }




                    </div>


                </div>
            </section>


        </div>
    )
}
