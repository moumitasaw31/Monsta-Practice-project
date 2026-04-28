import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'


export default function Modal({ closeModal, data, refreshData }) {

    console.log(refreshData)

    const apiBaseUrl = import.meta.env.VITE_APIBASEURL



    let [formData, setFormData] = useState({    //1
        colorName: "",
        colorCode: "",
        colorOrder: ""
    })

    let getValue = (e) => {                           //3

        let obj = { ...formData }                   // 4   data is editable now
        let inputName = e.target.name
        let inputValue = e.target.value
        obj[inputName] = inputValue

        setFormData(obj)
    }

    let saveButton = (e) => {                   //5

        e.preventDefault()
        console.log(data._id)
        if (!data?._id) return;
        axios.put(`${apiBaseUrl}color/update-color/${data._id}`, formData)
            .then((res) => res.data)
            .then((finalRes) => {
                toast(finalRes.msg)
                refreshData()
                closeModal()
                setFormData({
                    colorName: "",
                    colorCode: "",
                    colorOrder: ""
                })


            })

            .catch(err => {
                console.log(err)
                toast("Update failed")
            })


    }


    useEffect(() => {                                  //2
        if (data) {
            setFormData({
                colorName: data.colorName,
                colorCode: data.colorCode,
                colorOrder: data.colorOrder
            })
        }
    }, [data])

    return (
        <div>

            <div className='relative'>
                <div className='border max-w-[500px] mx-auto h-[500px] absolute top-[50%] left-[50%] translate-[-50%,-50%] bg-amber-50 p-5'>
                    <h2 className='text-center font-bold text-[20px] mb-[15px] relative'>Edit Color <span className='absolute top-0 right-0 cursor-pointer' onClick={closeModal}>  &times; </span> </h2>
                    <form action="">
                        <div>
                            <label htmlFor="">Color Name</label>
                            <input type="text" name='colorName' onChange={getValue} value={formData.colorName} className='border w-full p-2 rounded' placeholder='name' />
                        </div>
                        <div>
                            <label htmlFor="">Color Code</label>
                            <input type="text" name='colorCode' onChange={getValue} value={formData.colorCode} className='border w-full p-2 rounded' placeholder='code' />
                        </div>
                        <div>
                            <label htmlFor="">Color Order</label>
                            <input type="number" name='colorOrder' onChange={getValue} value={formData.colorOrder} className='border w-full p-2 rounded' placeholder='order' />
                        </div>

                        <div className='relative mt-5'>
                            <button className='bg-blue-400 p-3 rounded absolute left-[50%] translate-x-[-50%]' onClick={saveButton}>Update</button>
                        </div>


                    </form>

                </div>

            </div>




        </div>
    )
}


