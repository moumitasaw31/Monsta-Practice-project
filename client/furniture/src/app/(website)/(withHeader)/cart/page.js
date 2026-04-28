import React from 'react'
import Cart from './Cart'
import Breadcrumbs from '../../common/Breadcrumbs'

export default function page() {

  let pageName ='My - Cart'
  return (
    <div>
      <Breadcrumbs pageName={pageName}/>
        <Cart/>
    </div>
  )
}
