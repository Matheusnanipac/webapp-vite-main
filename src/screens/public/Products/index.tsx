import React, { useState, useMemo } from "react";
import { CarouselDemo } from "./components/carousel";
import { productMockApi } from "@/mock/product";
import { Minus } from "@/components/others/icons/Minus";
import { Plus } from "@/components/others/icons/Plus";
import { useParams } from "react-router-dom";
import { AccompanimentProduct } from "./components/AcompanimentList/types";
import AcompanimentList from "./components/AcompanimentList";

export default function Products() {
  const { productId } = useParams();
  const basePrice = productMockApi?.price;

  const [selectedAccompaniments, setSelectedAccompaniments] = useState<
    AccompanimentProduct[]
  >([]);
  const [quantity, setQuantity] = useState(1); // Estado para controlar a quantidade

  const priceFinal = useMemo(() => {
    let totalPrice = basePrice;

    // if (selectedAccompaniments?.length <= 0) return totalPrice;//
    // Calculo de todos os produtos e sua quantidade dos acompanhamentos
    selectedAccompaniments.forEach((accompaniment) => {
      accompaniment.products.forEach((product) => {
        totalPrice += product.price * product.amount; // Adiciona o preço do produto ao total
      });
    });

    return totalPrice;
  }, [selectedAccompaniments, basePrice]);

  const finalPrice = useMemo(() => {
    if (quantity >= 1) {
      return priceFinal * quantity; // Multiplicar esse valor depois com a quantidade de produto base
    }
    return priceFinal; // Calculo caso não existir acompanhemntos
  }, [priceFinal, quantity]);

  // Função para incrementar a quantidade
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  // Função para decrementar a quantidade
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const onChangeValue = (products: AccompanimentProduct[]) => {
    setSelectedAccompaniments(products);
  };

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(finalPrice as never);

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
          <AcompanimentList
            data={productMockApi.accompaniment}
            onChangeValue={(product) => onChangeValue(product)}
          />
        </ul>
      </div>
      <div className="w-full h-[151px] bg-[#F0F5FA] rounded-tl-3xl rounded-tr-3xl fixed bottom-0">
        <div className="flex flex-row justify-around">
          <span className="font-semibold text-[28px] mt-[24px]">
            {formattedPrice}
          </span>
          <div className="w-[140px] flex items-center justify-around mt-[24px] bg-[#121223] rounded-full">
            <div className="flex items-center justify-center">
              <button onClick={handleDecrement}>
                <Minus />
              </button>
            </div>
            <span className="font-bold text-white">{quantity}</span>
            <div className="flex items-center justify-center">
              <button onClick={handleIncrement}>
                <Plus />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-[16px]">
          <button className="w-[327px] h-[50px] bg-[#FF7622] rounded-2xl">
            <span className="font-bold text-white">ADICIONAR</span>
          </button>
        </div>
      </div>
    </div>
  );
}
