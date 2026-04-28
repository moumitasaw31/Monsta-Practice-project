import React from 'react'

export default function () {
    return (
        <div>

            <div>
                <h1 className='text-[30px] mb-3'>Orders</h1>

                <table className='border w-full'>
                    <thead>
                        <tr className="border bg-[#ccc] p-5">
                            <th>Order</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Total</th>
                            <th>Actions</th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr className="border text-center p-5">
                            <td>1</td>
                            <td>May 10, 2018</td>
                            <td>Completed</td>
                            <td>Rs. 25.00</td>
                            <td>view</td>
                        </tr>
                    </tbody>
                </table>
            </div>



        </div>
    )
}
