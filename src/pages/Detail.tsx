import { useEffect, useState } from "react";
import DynamicLayout from "../components/Layouts/DyanmicLayout";
import Navbar from "../components/Layouts/Navbar";
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { apiGetSingleProduct } from "../api/product";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartReducer";
import Footer from "../components/Layouts/Footer";
interface ProductDTO {
  id: number;
  price: number;
  desc: string;
  title: string;
  img: string;
}

export default function Detail() {
  const id = useParams().id;
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const [singleProduct, setSingleProduct] = useState<ProductDTO>();

  useEffect(() => {
    const fetchData = async () => {
      const responseProductData: any = await apiGetSingleProduct(Number(id));
      console.log(responseProductData);
      setSingleProduct({
        id: responseProductData.data.id,
        price: responseProductData.data.attributes.price,
        title: responseProductData.data.attributes.title,
        desc: responseProductData.data.attributes.desc,
        img: responseProductData.data.attributes.img.data.attributes.url,
      });
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <DynamicLayout border={false}>
        <div className="flex my-4">
          <div className="flex flex-1 gap-4">
            <div className="flex-1 flex flex-col gap-4">
              <img
                className="h-[100px] w-full object-cover cursor-pointer"
                src={"http://localhost:1337" + singleProduct?.img}
                alt=""
              />
              {/* <img className='h-[100px] w-full object-cover cursor-pointer' src={images[1]} alt="" /> */}
            </div>
            <div className="flex-[5]">
              <img
                className="w-full max-h-[800px] object-cover bg-black"
                src={"http://localhost:1337" + singleProduct?.img}
                alt=""
              />
            </div>
          </div>
          <div className="right flex-1 px-8 flex flex-col gap-6">
            <p className="text-3xl font-bold">{singleProduct?.title}</p>
            <p className="text-primary/60 text-2xl font-semibold">
              $ {singleProduct?.price}
            </p>
            <p className="text-sm">{singleProduct?.desc}</p>
            <div className="flex gap-2 items-center">
              <button
                className=" py-1 px-4 bg-gray-400"
                onClick={() => setQuantity((prev) => prev - 1)}
              >
                -
              </button>
              {quantity}
              <button
                className=" py-1 px-4 bg-gray-400"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <button
              className="text-xs bg-primary px-12 py-1.5 font-semibold flex items-center gap-3 w-fit text-white"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: singleProduct!.id,
                    title: singleProduct!.title,
                    desc: singleProduct!.desc,
                    price: singleProduct!.price,
                    img: singleProduct!.img,
                    quantity: quantity,
                  })
                )
              }
            >
              <FaCartPlus className="text-lg" /> ADD TO CART
            </button>
            <div className="flex text-xs gap-6">
              <div className="flex items-center gap-2 text-primary/60">
                <FaHeart className="text-lg " />
                ADD TO WISH LIST
              </div>
              <div className="flex items-center gap-2 text-primary/60">
                <FaBalanceScale className="text-lg" />
                ADD TO COMPARE
              </div>
            </div>
            <div className="text-xs flex flex-col text-gray-400 mt-4">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="text-xs flex flex-col text-gray-400 gap-2 mt-4 w-fit">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </div>
      </DynamicLayout>
      <Footer />
    </>
  );
}
