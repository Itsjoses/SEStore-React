import React from "react";

export default function ProductCards() {
  return (
    <div className="flex flex-col gap-2 ">
      <div className="h-[350px] w-full">
        <img
          className="h-full w-full object-cover"
          src="https://storage.googleapis.com/hijup-production-sg-core/system/product_image/image/741595/medium_BUTTONSCARVES_TAPIS_SATIN_JACQUARD_IN_BRILLIANT_WHITE_1.JPG"
        //   src="https://www.eq3.com/_next/image?url=https%3A%2F%2Fimages.eq3.com%2Fproduct-definitions%2Fcllpji6s405dg356ek8hkzkzj%2Finstance%2Fclm6q961v07t8356e07bo0ekd%2FTHUMBNAIL%2F33bf3077-d545-4d38-8bf0-1610fe6a1ce2Optional%5Bbird-chair-fabric%5D.jpg&w=320&q=75"
          alt=""
        />
      </div>
      <div className="w-full">
        <div className="font-bold">Baju Baru Alhamdulilah</div>
        <div className="flex gap-4">
          <p className="text-sm ">old price</p>
          <p className="text-sm ">new price</p>
        </div>
      </div>
    </div>
  );
}
