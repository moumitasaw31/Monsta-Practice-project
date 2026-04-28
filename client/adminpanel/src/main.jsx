import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-responsive-pagination/themes/classic-light-dark.css';
import Login from './component/pages/Login.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
 

import Layout from './component/common folder/Layout.jsx'
import { Sidebar } from './component/common folder/Sidebar.jsx'
import Dashboard from './component/pages/Dashboard.jsx'
import Profile from './component/pages/Profile.jsx'
import ViewUser from './component/pages/ViewUser.jsx'
import ContactE from './component/pages/ContactE.jsx'
import Newsletters from './component/pages/Newsletters.jsx'
import Addcolor from './component/pages/Add-color.jsx'
import Viewcolor from './component/pages/View-color.jsx'
import Addmaterial from './component/pages/Add-material.jsx'
import Viewmaterial from './component/pages/View-material.jsx'
import Addcategory from './component/pages/Add-category.jsx'
import Viewcategory from './component/pages/View-category.jsx'
import AddSubSubCategory from './component/pages/Add-Sub-Sub-Category.jsx'
import ViewSubSubCategory from './component/pages/View-Sub-Sub-Category.jsx'
import AddWhyChooseUs from './component/pages/Add-Why-Choose-Us.jsx'
import ViewWhyChooseUs from './component/pages/View-Why-Choose-Us.jsx'
import AddProduct from './component/pages/Add-Product.jsx'
import Orders from './component/pages/Orders.jsx'
import AddSlider from './component/pages/Add-Slider.jsx'
import ViewSlider from './component/pages/View-Slider.jsx'
import ViewCountry from './component/pages/View-Country.jsx'
import AddCountry from './component/pages/Add-Country.jsx'
import AddTestimonial from './component/pages/Add-Testimonial.jsx'
import ViewTestimonial from './component/pages/View-Testimonial.jsx'
import AddFaq from './component/pages/Add-Faq.jsx'
import ViewFaq from './component/pages/View-Faq.jsx'
import AddSubCategory from './component/pages/Add-Sub-Category.jsx'
import ViewSubCategory from './component/pages/View-Sub-Category.jsx'
import CompanyProfile from './component/pages/Company-Profile.jsx'
import MainContext from './contextApi/MainContext.jsx';
import ViewProduct from './component/pages/View-Product.jsx';






createRoot(document.getElementById('root')).render(
  // <StrictMode>

  <MainContext>

    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>

          <Route />


          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/viewUser' element={<ViewUser />} />
          <Route path='/contact-enquiry' element={<ContactE />} />
          <Route path='/newsletters' element={<Newsletters />} />

          <Route path='/add-color' element={<Addcolor />} />
          <Route path='/view-color' element={<Viewcolor />} />
          <Route path='/add-material' element={<Addmaterial />} />
          <Route path='/view-material' element={<Viewmaterial />} />
          <Route path='/add-category' element={<Addcategory />} />
          <Route path='/view-category' element={<Viewcategory />} />

          <Route path='/Add-Sub-Category' element={<AddSubCategory />} />
          <Route path='/View-Sub-Category' element={<ViewSubCategory />} />

          <Route path='/Add-Sub-Sub-Category' element={<AddSubSubCategory />} />
          <Route path='/View-Sub-Sub-Category' element={<ViewSubSubCategory />} />

          <Route path='/Add-Product' element={<AddProduct />} />
          <Route path='/view-Product' element={<ViewProduct/>} />


          <Route path='/Add-Why-Choose-Us' element={<AddWhyChooseUs />} />
          <Route path='/View-Why-Choose-Us' element={<ViewWhyChooseUs />} />

          <Route path='/Orders' element={<Orders />} />

          <Route path='/Add-Slider' element={<AddSlider />} />
          <Route path='/View-Slider' element={<ViewSlider />} />

          <Route path='/Add-Country' element={<AddCountry />} />
          <Route path='/View-Country' element={<ViewCountry />} />

          <Route path='/Add-Testimonial' element={<AddTestimonial />} />
          <Route path='/View-Testimonial' element={<ViewTestimonial />} />

          <Route path='/Add-Faq' element={<AddFaq />} />
          <Route path='/View-Faq' element={<ViewFaq />} />
          <Route path='/View-company-profile' element={<CompanyProfile />} />






        </Route>

        <Route path='/' element={<Login />} />



      </Routes>

    </BrowserRouter>


  </MainContext>

  // {/* </StrictMode>, */}
)
