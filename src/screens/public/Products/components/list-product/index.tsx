import { Plus, Minus } from "lucide-react";
import { useState, useCallback, useEffect } from "react";

interface Product {
  name: string;
  price: number;
}

interface ListProductParams {
  item: {
    name: string;
    description: string;
    products: Product[];
  };
  onValueChange: (price: number) => void;
}

const ProductItem = ({
  product,
  onValueChange,
}: {
  product: Product;
  onValueChange: (price: number) => void;
}) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = useCallback(() => {
    setQuantity((prev) => prev + 1);
  }, [quantity]);

  const handleDecrement = useCallback(() => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
    }
  }, [quantity]);

  useEffect(() => {
    if (quantity > 0) {
      console.log(quantity);
      console.log(product.price);
      onValueChange(Number(quantity) * Number(product.price));
    }
  }, [quantity]);

  return (
    <div>
      <div className="flex flex-row space-x-3 items-center justify-center">
        <div onClick={handleDecrement}>
          <button className="flex items-center justify-center w-[18px] h-[18px] bg-[#FF3326] rounded-full">
            <Minus color="white" />
          </button>
        </div>
        <span>{quantity}</span>
        <button
          onClick={handleIncrement}
          className="flex items-center justify-center w-[18px] h-[18px] bg-[#09CF83] rounded-full"
        >
          <Plus color="white" />
        </button>
        <div className="flex flex-row justify-between w-full">
          <p className="font-bold">{product.name}</p>
          <span className="mr-[30px] text-[#09CF83] font-bold">
            R$ {product.price}
          </span>
        </div>
      </div>
      <div className="border-t border-[#EEF2F6] my-2 max-w-[450px]"></div>
    </div>
  );
};

export default function ListProduct({
  item,
  onValueChange,
}: ListProductParams) {
  return (
    <li>
      <h1 className="font-semibold">{item.name.toUpperCase()}</h1>
      <p className="text-[#9C9BA6] font-normal">{item.description}</p>
      <div className="border-t border-[#EEF2F6] my-2 max-w-[450px]"></div>
      <ul>
        {item.products.map((product, index) => (
          <li key={index}>
            <ProductItem product={product} onValueChange={onValueChange} />
          </li>
        ))}
      </ul>
    </li>
  );
}
