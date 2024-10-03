import CartCard from "../Cards/CartCard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/cartReducer";
export default function Cart() {
  const products = useSelector((state: any) => state.cart.products);
  const calculateTotal = (): number => {
    return products.reduce(
      (acc: number, item?: any) => acc + item.quantity * item.price,
      0
    );
  };
  const dispatch = useDispatch();
  const total = calculateTotal().toFixed(2);
  return (
    <div className="bg-white w-[30rem] absolute top-full right-0 z-50 px-4 py-2 flex flex-col gap-2 drop-shadow-xl">
      <div className="text-xl font-semibold mb-2">Product in your cart</div>
      {products.map((product: any) => (
        <CartCard product={product}></CartCard>
      ))}
      {/* <CartCard></CartCard> */}
      <div className="flex justify-between font-semibold">
        <p>SUBTOTAL</p>
        <p>${Number(total)}</p>
      </div>
      <button className="bg-primary text-white text-xs px-10 py-2 w-fit">
        PROCEED TO CHECKOUT
      </button>
      <p
        className="text-red-500 text-sm cursor-pointer"
        onClick={() => dispatch(resetCart())}
      >
        Reset Cart
      </p>
    </div>
  );
}
