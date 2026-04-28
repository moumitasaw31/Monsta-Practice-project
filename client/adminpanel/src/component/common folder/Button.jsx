import React from 'react'
import { Link } from 'react-router'


export default function Button({label,className,onClick, type = "submit"}) {
  return (
    <div>
        
        <button type={type} onClick={onClick} className={`px-4 py-2 text-14px text-white rounded-[8px] border font-semibold cursor-pointer ${className}`}>
         {label}
        </button>
    </div>
  )
}
