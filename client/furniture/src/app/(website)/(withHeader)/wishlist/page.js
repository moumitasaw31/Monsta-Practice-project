import React from 'react'
import Wishlist from './Wishlist'
import Breadcrumbs from '../../common/Breadcrumbs'

export default function page() {
    let pageName = 'My Wishlist'

    return (
        <div>
            <Breadcrumbs pageName={pageName} />

            <Wishlist />
        </div>
    )
}
