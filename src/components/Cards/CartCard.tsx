import { FaTrash } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/cartReducer";
interface ProductDTO {
  id: number;
  price: number;
  desc: string;
  title: string;
  img: string;
  quantity: number;
}

interface CartCardProps {
  product: ProductDTO;
}

export default function CartCard({ product }: CartCardProps) {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-4 border-b py-4 ">
      <div className=" flex items-center">
        <img
          className="w-14 h-20 bg-red-600"
          src={import.meta.env.VITE_API_IMAGE + product.img}
          alt=""
        />
      </div>
      <div className="flex-grow flex flex-col gap-2">
        <div>{product.title}</div>
        <div className="text-xs">{product.desc}</div>
        <div className="text-blue-400">
          {product.quantity} x $ {product.price}{" "}
        </div>
      </div>
      <div className=" flex items-center">
        <FaTrash
          className="text-lg text-red-500"
          onClick={() => dispatch(removeItem(product.id))}
        />
      </div>
    </div>
  );
}
