import React from "react";
import CategoryCard from "./Cards/CategoryCard";

export default function Categories() {
  return (
    <div className="flex flex-col gap-12 my-12">
      <div className="font-bold text-xl">SHOP BY CATEGORY</div>
      <div className="grid grid-cols-4 gap-4">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
}
