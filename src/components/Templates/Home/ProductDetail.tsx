import React from "react";
import ProductCards from "../../Cards/ProductCards";

interface ProductType{
    title: string,
    datas:any | undefined
}

export default function ProductDetail({title,datas}: ProductType) {
  return (
    <div className="flex justify-center py-8">
      <div className="w-4/5 flex flex-col gap-8">
        <div className="flex items-center justify-between ">
          <p className="text-2xl font-bold">{title}</p>
          <p className="text-sm w-3/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sapiente assumenda cum necessitatibus error iure nostrum ad fugit, exercitationem repellendus minus beatae tempora sunt quisquam eos nesciunt, voluptas amet. Harum.</p>
        </div>
        <div className="grid grid-cols-4 gap-16">
        {datas && datas.data ? (
            datas.data.map((data: any) => (
              <ProductCards key={data.id} data={data.attributes} />
            ))
          ): <></>}
        </div>
      </div>
    </div>
  );
}
