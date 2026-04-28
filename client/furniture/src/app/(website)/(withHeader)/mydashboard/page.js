
import React from 'react'
import Breadcrumbs from '../../common/Breadcrumbs'
import DashBoardList from './DashboardList'


export default function MyDashboard() {
    let pageName = 'My Dashboard'
    return (
        <div>
        
            <Breadcrumbs pageName={pageName}/>
            <DashBoardList/>
            
        </div>
    )
}