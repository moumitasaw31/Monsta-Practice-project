import React from 'react'
import Checkout from './Checkout'
import Breadcrumbs from '../../common/Breadcrumbs'

export default function page() {
    let pageName = "Checkout"
  return (
    <div>
        <Breadcrumbs pageName={pageName}/>
        <Checkout/>
    </div>
  )
}
