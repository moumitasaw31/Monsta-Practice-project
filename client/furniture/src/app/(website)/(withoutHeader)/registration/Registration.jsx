"use client";
import { loginSucess } from "@/app/redux/slice/userSlice";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useDispatch } from "react-redux";




export default function Registration() {


  let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL

  let dispatch = useDispatch()

  let router = useRouter()

  let [showMsg, setShowrMsg] = useState('')
  let [register, setRegister] = useState(true)
  let [otpForm, setOtpForm] = useState(false)
  let [formValue, setFormValue] = useState({
    userName: '',
    userEmail: '',
    userPhone: '',
    userPassword: '',
    otp: ''


  })


  let getValueSetValue = (e) => {

    let obj = { ...formValue }
    let inputName = e.target.name
    let inputValue = e.target.value
    obj[inputName] = inputValue
    setFormValue(obj)


  }


  let sendFormDta = (e) => {                              // sign-up form handling

    e.preventDefault()
    axios.post(`${apiBaseUrl}user/sign-up`, formValue)
      .then((res) => res.data)
      .then((finalRes) => {
        console.log(finalRes);

        if (finalRes.status === 1) {
          setShowrMsg("")
          setOtpForm(true)               //  otp form dikha dena
          setRegister(false)


        }
        else {
          if (finalRes.status == 0) {
            setShowrMsg(finalRes.msg)

            router.push("/login")

          }
        }
        console.log(finalRes)
      })

  }



  let verifyOtp = (e) => {
    e.preventDefault()
    axios.post(`${apiBaseUrl}user/verify-otp`, formValue)
      .then((res) => res.data)
      .then((finalRes) => {

        console.log(finalRes);

        if (finalRes.status == 1) {
          console.log(finalRes)
          setShowrMsg('')

          // object bana kar kam karna best way

          let userDta = {                       
            id: finalRes.user.id,
            userName: finalRes.user.userName
          }

          // console.log(userDta);


          dispatch(loginSucess({ user: userDta }))


          router.push("/")
        }
        else {
          if (finalRes.status == 0) {
            setShowrMsg(finalRes.msg)


          }
        }
      })

  }

  let resendOtp = () => {
    axios.post(`${apiBaseUrl}user/resend-otp`, formValue)
      .then((res) => res.data)
      .then((finalRes) => {
        console.log(finalRes);

        if (finalRes.status == 1) {
          setShowrMsg(finalRes.msg)
        }
      }

      )
  }









  return (
    <div>


      <section className='bg-[#ff9980] min-h-screen'>
        <div className='max-w-[1320px] mx-auto flex items-center justify-center min-h-screen'>



          {

            register &&

            <form action="" onSubmit={sendFormDta} className='p-5 w-[500px] bg-white rounded'>

              {/* FORM HEADING */}

              <div className='text-center'>

                <h1 className="font-bold text-[25px] mb-5">Sign Up</h1>

                <div><h1 className='text-[50px]'>MONSTA</h1></div>


              </div>

              {/* FORM INPUTS */}

              <div>

                <div className='mb-5'>
                  <input type="text" name="userName" value={formValue.userName} onChange={getValueSetValue} id="userName" placeholder='Name' className='border border-[#8985857b] w-full p-3 rounded' />
                </div>

                <div className='mb-5'>


                  {showMsg && <p className="text-red-500">{showMsg}</p>}


                  <input type="email" name="userEmail" value={formValue.userEmail} onChange={getValueSetValue} id="userEmail" placeholder='Email' className='border border-[#8985857b] w-full p-3 rounded' />
                </div>

                <div className='mb-5'>
                  <input type="tel" name="userPhone" value={formValue.userPhone} onChange={getValueSetValue} id="userPhone" placeholder='Phone' className='border border-[#8985857b] w-full p-3 rounded' />
                </div>

                <div className='mb-5'>
                  <input type="password" name="userPassword" value={formValue.userPassword} onChange={getValueSetValue} id="userPassword" placeholder='Password' className='border border-[#8985857b] w-full p-3 rounded' />
                </div>

                <div>
                  <button className="cursor-pointer text-white text-[20px] bg-[#ff9980]  w-full p-3 rounded">Sign Up</button>
                </div>

              </div>

              <div className="flex items-center justify-center gap-3 mt-3">
                <div className="bg-[#ff9980] p-2 rounded-2xl"><FaGoogle /></div>
                <div className="bg-[#ff9980] p-2 rounded-2xl"><FaFacebook /></div>
                <div className="bg-[#ff9980] p-2 rounded-2xl"><FaGithub /></div>
              </div>

              <div className="mt-7 text-center">
                <h2>Have an account? <Link href="/login" className="border-b">Log In</Link> </h2>
              </div>
            </form>


          }



          {/* 2nd otp enter FORM */}

          {

            otpForm &&
            <div className="mx-auto">


              <form action="" onSubmit={verifyOtp} className="  w-[300px] bg-white rounded p-3">



                <h1 className="mb-2">Enter your OTP</h1>

                <div>
                  <input type="text" name="otp" value={formValue.otp} onChange={getValueSetValue} className="border w-full p-2 rounded" />
                </div>

                <div>
                  <button className="cursor-pointer text-white text-[20px] bg-[#ff9980]  w-full p-2 rounded mt-3">verify OTP</button>
                  {showMsg && <p className="text-red-500">{showMsg}</p>}
                </div>



                <div>
                  <h2 onClick={resendOtp} className="text-right cursor-pointer text-[14px]">resend otp?</h2>
                </div>


                <div className="mt-5 text-center">
                  <h2>Have an account? <Link href="/login" className="border-b">Log In</Link>  </h2>
                </div>

              </form>
            </div>


          }






        </div>


      </section>





    </div>
  )
}
