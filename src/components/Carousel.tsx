import { useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="min-w-screen relative h-[40rem] overflow-hidden">
      <div
        className="w-[300vw] h-full flex transition-all duration-500 -z-10"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img
          src={data[0]}
          alt=""
          className="w-screen h-full object-cover -z-10"
        />
        <img
          src={data[1]}
          alt=""
          className="w-screen h-full object-cover -z-10"
        />
        <img
          src={data[2]}
          alt=""
          className="w-screen h-full object-cover -z-10"
        />
      </div>
      <div className="absolute w-full bottom-2  h-full left-0 flex justify-center">
        <div className="flex gap-2 absolute bottom-10">
          <div className="rounded-md bg-primary/80 p-1.5">
            <IoArrowBackSharp
              onClick={prevSlide}
              className="cursor-pointer text-4xl  text-white "
            />
          </div>
          <div className="rounded-md bg-primary/80 p-1.5">
            <IoArrowForward
              onClick={nextSlide}
              className="cursor-pointer text-4xl text-white rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
