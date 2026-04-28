import React, { useContext, useEffect } from 'react'
import Header from './Header'
import { Outlet, useNavigate } from 'react-router'
import Footer from './Footer'
// import { } from "module";
import { Sidebar } from './Sidebar';
import { context } from '../../contextApi/MainContext';




export default function Layout() {

  // JS- AREA

  const apiBaseUrl = import.meta.env.VITE_APIBASEURL





  let { id } = useContext(context)      ////  id yiha blank string ya fir id lekar aayega

  console.log("id", id)


  let navigate = useNavigate()
  useEffect(() => {

    if (id == '' || id == undefined || id == null) {     //  1 vi hai

      navigate("/")

    }

  }, [id])



  return (

    <section className='grid grid-cols-[18%_auto] '>
      {/* left sidebar */}
      <div>
        <Sidebar />
      </div>

      {/* right-side */}

      <div>
        <Header />

        <Outlet />

        <Footer />

      </div>


    </section>




  )
}
