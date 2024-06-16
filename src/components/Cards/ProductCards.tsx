import React from "react";


export default function ProductCards({data}:{data:any | undefined}) {
  console.log(data);
  
  return (
    <div className="flex flex-col gap-2 ">
      <div className="h-[350px] w-full">
        <img
          className="h-full w-full object-cover"
          // src="https://storage.googleapis.com/hijup-production-sg-core/system/product_image/image/741595/medium_BUTTONSCARVES_TAPIS_SATIN_JACQUARD_IN_BRILLIANT_WHITE_1.JPG"
          src={`http://localhost:1337${data.img.data.attributes.url}`}
        />
      </div>
      <div className="w-full">
        <div className="font-bold">{data.title}</div>
        <div className="flex gap-4">
          <p className="text-sm line-through font-semibold">${data.price+25}</p>
          <p className="text-sm font-semibold">${data.price}</p>
        </div>
      </div>
    </div>
  );
}
