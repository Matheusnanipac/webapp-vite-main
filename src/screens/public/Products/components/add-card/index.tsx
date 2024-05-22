/* import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function AddCard() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="w-full h-[151px] bg-[#F0F5FA] rounded-tl-3xl rounded-tr-3xl fixed bottom-0">
      <div className="flex flex-row justify-around">
        <span className="font-semibold text-[28px] mt-[24px]">R$ 29,90</span>
        <div className="w-[140px] flex items-center justify-around mt-[24px] bg-[#121223] rounded-full">
          <div className="flex items-center justify-center w-[22px] h-[22px] bg-gray-600 rounded-full">
            <button onClick={handleDecrement}>
              <Minus color="white" width={12} />
            </button>
          </div>
          <span className="font-bold text-white">{quantity}</span>
          <div className="flex items-center justify-center w-[22px] h-[22px] bg-gray-600 rounded-full">
            <button onClick={handleIncrement}>
              <Plus color="white" width={12} />
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
  );
} */
