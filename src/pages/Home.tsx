import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Carousel from "../components/Carousel";
import ProductCards from "../components/Cards/ProductCards";
import DynamicLayout from "../components/Layouts/DyanmicLayout";
import Categories from "../components/Categories";
import HomeDetail from "../components/Templates/Home/HomeDetail";
import ProductDetail from "../components/Templates/Home/ProductDetail";
import StoreAddress from "../components/Templates/Home/StoreAddress";
import Footer from "../components/Layouts/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <DynamicLayout border={false}>
        <ProductDetail title="Product"/>
      </DynamicLayout>
      <DynamicLayout border={false}>
        <ProductDetail title="New Arrival"/>
      </DynamicLayout>
      <DynamicLayout border={false}>
        <Categories />
      </DynamicLayout>
      <DynamicLayout border={false}>
        <HomeDetail />
      </DynamicLayout>
      <StoreAddress/>

      <Footer/>
    </div>
  );
}
