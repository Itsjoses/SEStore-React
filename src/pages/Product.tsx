import { useEffect, useState } from "react";
import Navbar from "../components/Layouts/Navbar";
import DynamicLayout from "../components/Layouts/DyanmicLayout";
import Footer from "../components/Layouts/Footer";
import { apiFilteredProducts } from "../api/product";
import { apiGetSubCategory } from "../api/sub_product";
import ProductCards from "../components/Cards/ProductCards";
import { Link } from "react-router-dom";

interface categoryDTO {
  id: number;
  category: string;
}

export default function Product() {
  const [sort, setSort] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [subCat, setSubCat] = useState<string[]>([]);
  const [subCategory, setSubCategory] = useState<categoryDTO[]>([]);
  const [productFilteredData, setProductFileteredData] = useState<any>([]);
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

  useEffect(() => {
    const responseData = async () => {
      const responseFilteredData = await apiFilteredProducts(
        maxPrice,
        sort,
        subCat
      );
      console.log(responseFilteredData);
      setProductFileteredData(responseFilteredData);
    };
    responseData();
    console.log(Number(maxPrice));
  }, [sort, maxPrice, subCat]);

  const handleChange = (e: any) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSubCat(
      isChecked ? [...subCat, value] : subCat.filter((item) => item !== value)
    );
  };

  return (
    <div>
      <Navbar />
      <DynamicLayout border={false}>
        <div className=" flex my-16 ">
          <div className="flex-1 sticky top-1 h-full flex flex-col gap-4">
            <div className="">
              <p className="font-bold text-xl ">Product Categories</p>
              <div className="flex flex-col gap-1">
                {subCategory.map((data: any) => (
                  <div className="flex gap-4">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      value={data.id}
                      onChange={handleChange}
                    />{" "}
                    {data.category}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-bold text-xl">Filter By Price</p>
              <div>
                <input
                  type="range"
                  name=""
                  id=""
                  min={0}
                  max={1000}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
              </div>
            </div>

            <div>
              <p className="font-bold text-xl">Sort By</p>
              <div className="flex flex-col gap-1">
                <div className="flex gap-4">
                  <input
                    type="radio"
                    name="radio"
                    value=""
                    onChange={() => setSort("asc")}
                  />
                  <p>{`Price (Lowest First)`}</p>
                </div>
                <div className="flex gap-4">
                  <input
                    type="radio"
                    name="radio"
                    value=""
                    onChange={() => setSort("desc")}
                  />
                  <p>{`Price (highest First)`}</p>
                </div>
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
                {productFilteredData && productFilteredData.data ? (
                  productFilteredData.data.map((data: any) => (
                    <Link to={`/product/${data.id}`}>
                      <ProductCards key={data.id} data={data.attributes} />
                    </Link>
                  ))
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </DynamicLayout>
      <Footer />
    </div>
  );
}
