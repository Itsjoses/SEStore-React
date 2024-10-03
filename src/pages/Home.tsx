import { useEffect, useState } from "react";
import Navbar from "../components/Layouts/Navbar";
import Carousel from "../components/Carousel";
import DynamicLayout from "../components/Layouts/DyanmicLayout";
import Categories from "../components/Categories";
import HomeDetail from "../components/Templates/Home/HomeDetail";
import ProductDetail from "../components/Templates/Home/ProductDetail";
import StoreAddress from "../components/Templates/Home/StoreAddress";
import Footer from "../components/Layouts/Footer";
import { apiGetHomeProduct, apiGetSelectedHomeProduct } from "../api/product";

export default function Home() {
  const [allData, setAllData] = useState<any>();
  const [selectedAllData, setSelectedAllData] = useState<any>();
  useEffect(() => {
    const getHomeProduct = async () => {
      const responseAllShirt = await apiGetHomeProduct();
      const reponseSelectedAllShirt = await apiGetSelectedHomeProduct(
        "trending"
      );
      setAllData(responseAllShirt);
      setSelectedAllData(reponseSelectedAllShirt);

      console.log(responseAllShirt);
      console.log(reponseSelectedAllShirt);
    };
    getHomeProduct();
  }, []);

  return (
    <div>
      <Navbar />
      <Carousel />
      <DynamicLayout border={false}>
        <ProductDetail title="Product" datas={allData} />
      </DynamicLayout>
      <DynamicLayout border={false}>
        <HomeDetail />
      </DynamicLayout>
      <DynamicLayout border={false}>
        <ProductDetail title="Trending" datas={selectedAllData} />
      </DynamicLayout>
      <DynamicLayout border={false}>
        <Categories />
      </DynamicLayout>

      <StoreAddress />

      <Footer />
    </div>
  );
}
