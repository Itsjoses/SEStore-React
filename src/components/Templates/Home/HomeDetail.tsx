import { Link } from "react-router-dom";

export default function HomeDetail() {
  return (
    <div className="gap-12 flex-col flex bg-secondary ">
      <div className="flex gap-2">
        <div className="w-full h-96">
          <img
            className=" h-full w-full"
            src="https://www.eq3.com/_next/image?url=http%3A%2F%2Fcdn-yotpo-images-production.yotpo.com%2Finstagram%2F31%2F18003028814304531%2Fmedium.jpg&w=480&q=75"
            alt=""
          />
        </div>
        <div className="w-full h-96 bg-black">
          <img
            className="bg-cover h-full w-full"
            src="https://www.eq3.com/_next/image?url=http%3A%2F%2Fcdn-yotpo-images-production.yotpo.com%2Finstagram%2F56%2F17975769092589456%2Fmedium.jpg&w=480&q=75"
            alt=""
          />
        </div>
        <div className="w-full h-96">
          <img
            className=" h-full w-full"
            src="https://www.eq3.com/_next/image?url=http%3A%2F%2Fcdn-yotpo-images-production.yotpo.com%2Finstagram%2F19%2F18060110428434519%2Fmedium.jpg&w=480&q=75"
            alt=""
          />
        </div>
        <div className="w-full h-96">
          <img
            className=" h-full w-full"
            src="https://www.eq3.com/_next/image?url=http%3A%2F%2Fcdn-yotpo-images-production.yotpo.com%2Finstagram%2F88%2F18005317792654288%2Fmedium.jpg&w=480&q=75"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 pb-12">
        <p className="text-4xl font-bold">BEST STORE IN THE WORLD</p>
        <p>Discover a lot of things in here</p>
        <Link to={"/products"}>
          <button className="w-fit text-white py-1 px-4 rounded-md bg-primary">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
}
