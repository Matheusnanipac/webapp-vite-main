import { useState } from "react";
import { CarouselDemo } from "./components/carousel";
import { productMockApi } from "@/mock/product";
import ListProduct from "./components/list-product/index";
import AddCard from "./components/add-card";

export default function Products() {
  const [finalPrice, setFinalPrice] = useState(productMockApi.price);

  const handleOnValueChange = (price: number) => {
    console.log("Final Price", price);
  };

  return (
    <div>
      <div>
        <CarouselDemo />
      </div>
      <div className="ml-[24px]">
        <div className="mt-[18px]">
          <h1 className="font-bold text-[20px]">{productMockApi.name}</h1>
          <div className="bg-[#FF762233] w-[88px] flex items-center justify-center mt-[8px] rounded-full">
            <span className="text-[#FF7622] font-medium text-[14px]">
              {productMockApi.category_name}
            </span>
          </div>
          <h2 className="mt-[13px] text-[#A0A5BA] max-w-[350px]">
            {productMockApi.description}
          </h2>
        </div>
        <ul className="mt-[24px] pb-[160px]">
          {productMockApi.followUp.map((followUp, index) => (
            <ListProduct
              key={index}
              item={followUp}
              index={index}
              onValueChange={handleOnValueChange}
            />
          ))}
        </ul>
      </div>
      <AddCard />
    </div>
  );
}
