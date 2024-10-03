import DynamicLayout from "./DyanmicLayout";
import { IoCart } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { BsPersonCircle } from "react-icons/bs";
import { useEffect, useState } from "react";
import Cart from "./Cart";
import { apiGetSubCategory } from "../../api/sub_product";
import { Link } from "react-router-dom";

interface categoryDTO {
  id: number;
  category: string;
}

export default function Navbar() {
  const [cart, setCart] = useState<boolean>(false);
  const [subCategory, setSubCategory] = useState<categoryDTO[]>([]);

  useEffect(() => {
    const responseData = async () => {
      const responseSubCategoryData = await apiGetSubCategory();
      const categoryData: categoryDTO[] = responseSubCategoryData.data.map(
        (data: any) => ({
          id: data.id,
          category: data.attributes.title,
        })
      );
      setSubCategory(categoryData);
    };
    responseData();
  }, []);
  return (
    <div>
      <div className="relative z-10">
        <DynamicLayout border={true}>
          <div className="relative">
            {cart && <Cart />}

            <div className="flex justify-center bg-white">
              <div className="flex justify-between py-4 px-2 items-center w-full transition-width duration-500">
                <div className="flex gap-4 ">
                  <Link to="/">
                    <div className="h-auto flex-shrink-0 items-center flex">
                      <p className="font-CustomFont text-4xl">SEStore</p>
                    </div>
                  </Link>
                </div>

                <div className="flex items-center gap-2 2xl:w-6/12 xl:w-5/12">
                  <CiSearch className="text-xl text-primary" />
                  <input
                    type="search"
                    name=""
                    id=""
                    placeholder="Search Product/Brands"
                    className="w-full py-1 outline-none border-b border-b-primary placeholder:text-sm placeholder:text-primary/60"
                  />
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex gap-4 items-center">
                    <button className="hover:text-primary/80">Log in</button>
                    <span>or</span>
                    <button className="bg-primary text-white p-2 rounded-md">
                      Register
                    </button>
                  </div>
                  <IoCart
                    className="text-3xl hover:text-primary/80 cursor-pointer"
                    onClick={() => setCart((prev) => !prev)}
                  />
                  <BsPersonCircle className="text-3xl font-black text-primary/80" />
                </div>
              </div>
            </div>

            <div className="flex bg-white">
              <div className="flex items-center gap-8 ">
                <p className="relative flex items-center flex-col p-2 text-primary/80">
                  <Link to={"/products"}>All Product</Link>
                </p>
                {subCategory.map((data) => (
                  <p className="relative flex items-center flex-col p-2">
                    <Link to={"/products"}>{data.category}</Link>
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* <div className="absolute border-b border-[#e1d5d5] w-full py-4 top-full left-0 flex justify-center gap-12 bg-white -z-50">
          <div className="absolute right-8 top-4 font-bold">
            <GiTireIronCross />
          </div>
          <p className="text-base font-medium">See All Categories</p>
          <div className="flex flex-col gap-1">
            <p className="text-base font-medium">Promo</p>
            <div className="text-xs flex flex-col gap-1">
              <p>Menu 1</p>
              <p>Menu 1</p>
              <p>Menu 1</p>
              <p>Menu 1</p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-base font-medium">Promo</p>
            <div className="text-xs flex flex-col gap-1">
              <p>Menu 1</p>
              <p>Menu 1</p>
              <p>Menu 1</p>
              <p>Menu 1</p>
            </div>
          </div>
        </div> */}
        </DynamicLayout>
      </div>

      {/* <div className="fixed bg-white h-screen w-9/12 z-50 top-0 overflow-y-hidden p-6 border-r-2">
        <div className="absolute">
          <GiTireIronCross />
        </div>
        <input
          type="text"
          className="w-full h-12 border-2 outline-none rounded-md mt-10 px-3"
          placeholder="Search"
        />
        <div>
          <div className={`absolute ${status === true ? "right-full" : "right-0"} w-full  px-6 transition-all duration-200 `}>
            <div className="flex flex-col mt-6">
              <div className="py-4 cursor-pointer" onClick={() => {setStatus(prevStatus => !prevStatus)}}>
                <p className="w-full relative">
                  Promo
                  <span className="absolute right-0 font-semibold">{`>`}</span>
                </p>
              </div>
              <div className="py-4">
                <p className="w-full relative">
                  Promo
                  <span className="absolute right-0 font-semibold">{`>`}</span>
                </p>
              </div>
              <div className="py-4">
                <p className="w-full relative">
                  Promo
                  <span className="absolute right-0 font-semibold">{`>`}</span>
                </p>
              </div>
              <div className="py-4">
                <p className="w-full relative">
                  Promo
                  <span className="absolute right-0 font-semibold">{`>`}</span>
                </p>
              </div>
              <div className="py-4">
                <p className="w-full relative">
                  Promo
                  <span className="absolute right-0 font-semibold">{`>`}</span>
                </p>
              </div>
            </div>
          </div>

          <div className={`absolute w-full  ${status === true ? "right-0" : "-right-full"} px-6 transition-all duration-200 `}>
            <div className="flex flex-col gap-6 mt-6">
              <div className="w-full" onClick={() => {setStatus(prevStatus => !prevStatus)}}>{`< Back`}</div>
              <div className="w-full relative font-semibold">
                See All Categories
              </div>
              <div className="">
                <p className="w-full relative font-semibold">Promo</p>
                <div className="my-2">

                <div className="px-4 py-2">Promo 1</div>
                <div className="px-4 py-2">Promo 1</div>
                <div className="px-4 py-2">Promo 1</div>
                <div className="px-4 py-2">Promo 1</div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
