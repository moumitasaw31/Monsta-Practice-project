import Image from "next/image";
import Homebanner from "./components/home/Homebanner";
import Homecollection from "./components/home/Homecollection";
import TabsProducts from "./components/home/TabsProducts";
import TrendingCollection from "./components/home/TrendingCollection";
import BestsellingProducts from "./components/home/BestsellingProducts";
import OnlineSupport from "./components/home/OnlineSupport";
import CustomerReview from "./components/home/CustomerReview";
import { bestSellerProducts, tabsProducts } from "../apiServices/homeservicesPage";

export default async function Home() {

  let tabsdata = await tabsProducts();
  let bestSellerData = await bestSellerProducts();

  // console.log("tab data",tabsdata)

  return (

    <>

      <Homebanner />
      <Homecollection/>
      <TabsProducts tabsdata={tabsdata}/>
      <TrendingCollection/>
      <BestsellingProducts bestSellerData={bestSellerData}/>
      <OnlineSupport/>
      <CustomerReview/>



    </>





  );
}
