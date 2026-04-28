import React from 'react'
import { PiUserCircleFill } from "react-icons/pi";
import { Link } from 'react-router';




export default function Dropdown(props) {
    console.log(props.droptitle)
    return (
        <div>

            <ul>
                <li >
                    <Link to={"#"} className={`flex items-center gap-2 `}>
                        <PiUserCircleFill /> ViewUser
                    </Link>
                </li>
            </ul>
        </div>
    )
}


{/* <ul>
    <li className='px-2' >
        <Link to={"#"} className={`flex items-center gap-2 `}>
            {title == "Users" ? <li> <Link to={"/viewUser"} className='flex items-center gap-3'>
                <PiUserCircleFill />ViewUser</Link> </li> : " "}

            {title == "Enquirys"

                ?
                < div className='flex flex-col'>
                    <li> <Link to={"/viewUser"} className='flex items-center gap-3'>
                        <PiUserCircleFill />Contact Enquirys</Link> </li>

                    <li> <Link to={"/viewUser"} className='flex items-center gap-3'>
                        <PiUserCircleFill />Newsletters</Link> </li>

                </div>

                :

                " "}
        </Link>
    </li>
</ul> */}