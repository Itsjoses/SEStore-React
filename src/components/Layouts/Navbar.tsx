import React from "react";
import DynamicLayout from "./DyanmicLayout";
import { IoCart } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
export default function Navbar() {
  return (
    <DynamicLayout border={true}>
      <div className="flex justify-center ">
        <div className="flex justify-between pt-2 pb-4 items-center  w-full transition-width duration-500" >
          <div className="flex gap-4 w-6/12">
          <div className="w-28 h-auto flex-shrink-0">
              <img src="/Logo.png" alt="Logo" className="w-full h-full object-contain"/>
            </div>
            <div className="flex items-center gap-2 grow">
              <CiSearch className="text-xl" />
              <input
                type="search"
                name=""
                id=""
                placeholder="Search Product/Brands"
                className="w-full py-1 outline-none border-b border-b-black placeholder:text-sm"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button>Theme</button>|<p>Sign In</p>|<p>Register</p>
            <IoCart className="text-2xl" />
            <CgProfile className="text-2xl font-light"/>
          </div>
        </div>
      </div>
      <div className="flex ">
        <div className="flex items-center gap-8 py-2">
          <p>Promo</p>
          <p>Promo</p>
          <p>Promo</p>
          <p>Promo</p>
          <p>Promo</p>
          <p>Promo</p>
          <p>Promo</p>
        </div>
      </div>
    </DynamicLayout>
  );
}
