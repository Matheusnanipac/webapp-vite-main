import { productMockApi } from "@/mock/product";

export type AccompanimentProducts = {
  accompanimentProductsId: number;
  name: string;
  price: number;
};

export type AccompanimentProduct = {
  accompanimentId: number;
  products: {
    accompanimentProductsId: number;
    name: string;
    price: number;
    amount: number;
  }[];
};

export type AccompanimentListParams = {
  data: typeof productMockApi.accompaniment;
  onChangeValue: (product: AccompanimentProduct[]) => void;
};
