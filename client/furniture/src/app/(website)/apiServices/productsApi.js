import axios from "axios"

let productsApi = () => {
    return axios.get(`https://dummyjson.com/products`)
        .then((res) => res.data)
        .then((finalRes) => (finalRes.products)
            // console.log(finalRes.products);

        )
}

let singleProductApiData = (id) => {

    return axios.get(`https://dummyjson.com/products/${id}`)
        .then((res) => res.data)
        .then((finalRes) => finalRes)



}



export { productsApi, singleProductApiData }