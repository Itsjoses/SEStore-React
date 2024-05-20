import React from "react";
import ProductCards from "../../Cards/ProductCards";

interface ProductType{
    title: string
}

export default function ProductDetail({title}: ProductType) {
  return (
    <div className="flex justify-center py-8">
      <div className="w-4/5 flex flex-col gap-8">
        <div className="flex items-end justify-between">
          <p className="text-xl font-bold">{title}</p>
          <p className="text-sm">View All</p>
        </div>
        <div className="grid grid-cols-4 gap-16">
          <ProductCards />
          <ProductCards />
          <ProductCards />
          <ProductCards />
        </div>
      </div>
    </div>
  );
}
