import DynamicLayout from "./DyanmicLayout";
import { IoCart } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
export default function Navbar() {
  return (
    <div className="relative">
      <DynamicLayout border={true}>
        <div className="flex justify-center ">
          <div className="flex justify-between py-4 px-2 items-center w-full transition-width duration-500">
            <div className="flex gap-4 ">
              <div className="w-28 h-auto flex-shrink-0">
                <img
                  src="/Logo.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 2xl:w-6/12 xl:w-5/12">
              <CiSearch className="text-xl" />
              <input
                type="search"
                name=""
                id=""
                placeholder="Search Product/Brands"
                className="w-full py-1 outline-none border-b border-b-black placeholder:text-sm"
              />
            </div>

            <div className="flex items-center gap-4">
              <button>Theme</button>|<p>Sign In</p>|<p>Register</p>
              <IoCart className="text-2xl" />
              <CgProfile className="text-2xl font-light" />
            </div>
          </div>
        </div>

        <div className="flex ">
          <div className="flex items-center gap-8 ">
            <div className="p-2">
              <p className="flex items-center flex-col">
                Promo
                <hr className="w-5 border-b-2 border-black" />
              </p>
              <div className="absolute bg-red-500 w-full z-50 py-4 top-full left-0 flex justify-center">
                <div>
                  <p className="text-lg">Promo</p>
                  <div className="text-sm">
                    <p>Menu 1</p>
                    <p>Menu 1</p>
                    <p>Menu 1</p>
                    <p>Menu 1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DynamicLayout>
    </div>
  );
}
