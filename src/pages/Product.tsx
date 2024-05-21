import React from "react";
import Navbar from "../components/Layouts/Navbar";
import DynamicLayout from "../components/Layouts/DyanmicLayout";
import ProductCards from "../components/Cards/ProductCards";
import Footer from "../components/Layouts/Footer";

export default function Product() {
  return (
    <div>
      <Navbar />
      <DynamicLayout border={false}>
          <div className=" flex my-24 ">
            <div className="flex-1 sticky top-1 h-full">
              <div className="">
                <p className="font-bold text-xl">Product Categories</p>
                <div className="flex gap-4">
                  <input type="checkbox" name="" id="" />
                  Shoes
                </div>
                <div className="flex gap-4">
                  <input type="checkbox" name="" id="" />
                  Shoes
                </div>
                <div className="flex gap-4">
                  <input type="checkbox" name="" id="" />
                  Shoes
                </div>
              </div>

              <div>
                <p className="font-bold text-xl">Filter By Price</p>
                <div>
                  <input type="range" name="" id="" min={0} max={1000} />
                </div>
              </div>

              <div>
                <p className="font-bold text-xl">Sort By</p>
                <div className="flex gap-4">
                  <input type="radio" value="" />
                  <p>Price Lowest to highest</p>
                </div>
                <div className="flex gap-4">
                  <input type="radio" value="" />
                  <p>Price Lowest to highest</p>
                </div>
                <div className="flex gap-4">
                  <input type="radio" value="" />
                  <p>Price Lowest to highest</p>
                </div>
              </div>
            </div>

            <div className="flex flex-[3] flex-col gap-12">
              <div className="w-full h-56 bg-black">
                <img
                  src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="grid grid-cols-4 gap-10">
                  <ProductCards />
                  <ProductCards />
                  <ProductCards />
                  <ProductCards />
                  <ProductCards />
                  <ProductCards />
                  <ProductCards />
                  <ProductCards />
                  <ProductCards />
                  <ProductCards />
                </div>
              </div>
            </div>
          </div>
      </DynamicLayout>
      <Footer />
    </div>
  );
}
