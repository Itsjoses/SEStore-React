import React, { useState } from "react";
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
    <div className="min-w-screen relative h-[40rem] overflow-hidden bg-black">
      <div className="w-[300vw] h-full flex transition-all duration-500" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" className="w-screen h-full object-cover"/>
        <img src={data[1]} alt="" className="w-screen h-full object-cover"/>
        <img src={data[2]} alt="" className="w-screen h-full object-cover"/>
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center px-4">
        <IoArrowBackSharp onClick={prevSlide} className="cursor-pointer text-4xl text-white" />
        <IoArrowForward onClick={nextSlide} className="cursor-pointer text-4xl text-white" />
      </div>
    </div>
  );
}
