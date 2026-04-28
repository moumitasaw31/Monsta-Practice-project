import React from 'react'
import Singleproduct from './Singleproduct'
import { singleProductApiData } from '@/app/(website)/apiServices/productsApi';

export default async function page(data) {



    let { id } = (await data.params);
    // console.log(id);

    let singleData = await singleProductApiData(id)

    // console.log(singleData);




    return (
        <div>
            <Singleproduct singleData={singleData} />
        </div>
    )
}
