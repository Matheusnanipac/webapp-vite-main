import { Clock } from "lucide-react";
import { GroupedProducts, ListProductsProps } from "./types";

export default function ListProducts(props: ListProductsProps) {
  const groupedProducts: GroupedProducts = props.products.reduce(
    (acc, product) => {
      if (!acc[product.category_name]) {
        acc[product.category_name] = [];
      }
      acc[product.category_name].push(product);
      return acc;
    },
    {} as GroupedProducts,
  );

  console.log(groupedProducts);

  return (
    <div className="flex mt-7 overflow-x-auto">
      <div className="flex flex-col gap-5">
        {Object.entries(groupedProducts).map(([category, products]) => (
          <div key={category} id={`menu-${products[0].category_id}`}>
            <h2 className="font-medium text-xl">{category}</h2>
            <ul className="flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-10">
              {products.map((product) => (
                <li
                  key={product.id}
                  className="flex p-3 rounded-xl bg-white shadow-md shadow-slate-100 items-center"
                >
                  <div className="flex min-w-32">
                    <img
                      src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg"
                      alt="Escondidinho de frango"
                      className="w-32 h-32 rounded-xl object-fill"
                    />
                  </div>
                  <div className="flex flex-1 flex-col pl-2">
                    <p className="font-bold text-base mt-1">{product.name}</p>
                    <p className="font-normal text-xs mt-1 text-ellipsis line-clamp-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed euismod, nisi ac tincidunt aliquam, mauris nunc
                      ultrices lacus, nec aliquet nunc nisl nec justo.
                    </p>
                    <div className="flex flex-1 flex-row items-center mt-1 justify-start">
                      <p className="font-bold text-base pr-3">R$ 40,00</p>
                      <div className="flex flex-1 flex-row items-center justify-center">
                        <Clock color="orange" size={24} />
                        <p className="font-normal text-base pl-1">30 min</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
