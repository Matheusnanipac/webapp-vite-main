export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category_name: string;
  category_id: number;
  img: string;
  estimated_time: number;
};

export type ListProductsProps = {
  products: Product[];
};

export type GroupedProducts = {
  [category: string]: Product[];
};
