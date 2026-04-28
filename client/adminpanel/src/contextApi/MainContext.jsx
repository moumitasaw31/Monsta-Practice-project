import React, { createContext, useEffect, useState } from 'react'
import Cookies from "js-cookie"

 export let context = createContext()                  //  bahar banega always


export default function MainContext({ children }) {

    let [id, setId] = useState(Cookies.get('ID') ?? '')   //  avi cookie khali hai  id ayegi to cookie me ayegi

            
    useEffect(()=>{

        Cookies.set("ID", id)
        
    },[id])



    let obj = { id, setId }                                         // always obj hi hoga state global hai avi

                                                                     //  inside data ab har jagah milega
    return (
        <context.Provider value={obj}>

            {children}

        </context.Provider>
    )
}
