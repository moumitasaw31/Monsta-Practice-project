import axios from "axios";

const tabsProducts = async (catName="smartphones") => {
    return await axios.get(`https://dummyjson.com/products/category/${catName}`)
        .then((res) => res.data)
        .then((finalRes) => finalRes.products)


};

const bestSellerProducts = async () => {
    return await axios.get(`https://dummyjson.com/products`)
        .then((res) => res.data)
        .then((finalRes) => finalRes.products)


}






export { bestSellerProducts, tabsProducts };