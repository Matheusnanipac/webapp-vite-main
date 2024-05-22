import { Decrement } from "@/components/others/icons/Decrement";
import { Increment } from "@/components/others/icons/Increment";
import { memo, useState, useCallback, useEffect } from "react";
import {
  AccompanimentListParams,
  AccompanimentProduct,
  AccompanimentProducts,
} from "./types";

function ListProduct(props: AccompanimentListParams) {
  const [selectedAccompaniments, setSelectedAccompaniments] = useState<
    AccompanimentProduct[]
  >([]);

  const handleAddProduct = useCallback(
    (
      accompanimentProduct: AccompanimentProducts,
      accompanimentId: number | undefined,
    ) => {
      if (!accompanimentId) return;
      const accompanimentIndex = selectedAccompaniments.findIndex(
        (accompaniment) => accompaniment.accompanimentId === accompanimentId,
      );

      if (accompanimentIndex !== -1) {
        const productIndex = selectedAccompaniments[
          accompanimentIndex
        ].products.findIndex(
          (product) =>
            product.accompanimentProductsId ===
            accompanimentProduct.accompanimentProductsId,
        );

        if (productIndex !== -1) {
          // Se o produto já existe, aumente a quantidade
          selectedAccompaniments[accompanimentIndex].products[
            productIndex
          ].amount += 1;
        } else {
          // Se o produto não existe, adicione-o à lista de produtos do acompanhamento
          selectedAccompaniments[accompanimentIndex].products.push({
            accompanimentProductsId:
              accompanimentProduct.accompanimentProductsId,
            name: accompanimentProduct.name,
            price: accompanimentProduct.price,
            amount: 1,
          });
        }
      } else {
        // Se o acompanhamento não existe na lista, crie-o e adicione o produto
        selectedAccompaniments.push({
          accompanimentId,
          products: [
            {
              accompanimentProductsId:
                accompanimentProduct.accompanimentProductsId,
              name: accompanimentProduct.name,
              price: accompanimentProduct.price,
              amount: 1,
            },
          ],
        });
      }
      setSelectedAccompaniments([...selectedAccompaniments]);
      props.onChangeValue(selectedAccompaniments);
    },
    [selectedAccompaniments],
  );

  const handleRemoveProduct = useCallback(
    (
      accompanimentProduct: AccompanimentProducts,
      accompanimentId: number | undefined,
    ) => {
      if (!accompanimentId) return;
      const accompanimentIndex = selectedAccompaniments.findIndex(
        (Accompaniment) => Accompaniment.accompanimentId === accompanimentId,
      );

      if (accompanimentIndex !== -1) {
        const productIndex = selectedAccompaniments[
          accompanimentIndex
        ].products.findIndex(
          (product) =>
            product.accompanimentProductsId ===
            accompanimentProduct.accompanimentProductsId,
        );

        if (productIndex !== -1) {
          // Se o produto existe, diminua a quantidade, se a quantidade for maior que zero
          if (
            selectedAccompaniments[accompanimentIndex].products[productIndex]
              .amount > 0
          ) {
            selectedAccompaniments[accompanimentIndex].products[
              productIndex
            ].amount -= 1;
          }
        } else {
          // Se o produto não existe, adicione-o à lista de produtos do acompanhamento
          selectedAccompaniments[accompanimentIndex].products.push({
            accompanimentProductsId:
              accompanimentProduct.accompanimentProductsId,
            name: accompanimentProduct.name,
            price: accompanimentProduct.price,
            amount: 1,
          });
        }
      } else {
        // Se o acompanhamento não existe na lista, crie-o e adicione o produto
        setSelectedAccompaniments([
          ...selectedAccompaniments,
          {
            accompanimentId,
            products: [
              {
                accompanimentProductsId:
                  accompanimentProduct.accompanimentProductsId,
                name: accompanimentProduct.name,
                price: accompanimentProduct.price,
                amount: 1,
              },
            ],
          },
        ]);
      }
      setSelectedAccompaniments([...selectedAccompaniments]); // Atualize o estado com as alterações
      props.onChangeValue(selectedAccompaniments); // Informe a mudança de valor ao componente pai, se necessário
    },
    [selectedAccompaniments],
  );

  const checkIndexForProductAmount = useCallback(
    (
      accompanimentId: number | undefined,
      accompanimentProductId: number,
    ): number => {
      if (!accompanimentId) return 0;

      const accompanimentIndex = selectedAccompaniments.findIndex(
        (accompaniment) => accompaniment.accompanimentId === accompanimentId,
      );
      if (accompanimentIndex === -1) return 0;

      const productIndex = selectedAccompaniments[
        accompanimentIndex
      ].products.findIndex(
        (product) => product.accompanimentProductsId === accompanimentProductId,
      );
      if (productIndex === -1) return 0;

      const amount =
        selectedAccompaniments[accompanimentIndex].products[productIndex]
          .amount;

      return amount;
    },
    [selectedAccompaniments],
  );

  useEffect(() => {
    console.log("state", selectedAccompaniments);
  }, [selectedAccompaniments]);

  return (
    <div>
      <ul>
        {props.data?.map((accompaniment) => (
          <li key={accompaniment.accompanimentId}>
            <h1 className="font-semibold">
              {accompaniment.name.toUpperCase()}
            </h1>
            <p className="text-[#9C9BA6] font-normal">
              {accompaniment.description}
            </p>
            <div className="border-t border-[#EEF2F6] my-2 max-w-[450px]"></div>
            <ul>
              {accompaniment.accompanimentProducts.map(
                (accompanimentProduct) => (
                  <li key={accompanimentProduct.accompanimentProductsId}>
                    <div className="flex flex-row space-x-3 items-center justify-center">
                      <button
                        className="flex items-center justify-center"
                        onClick={() =>
                          handleRemoveProduct(
                            accompanimentProduct,
                            accompaniment.accompanimentId,
                          )
                        }
                      >
                        <Decrement />
                      </button>
                      <span className="font-bold">
                        {checkIndexForProductAmount(
                          accompaniment.accompanimentId,
                          accompanimentProduct.accompanimentProductsId,
                        )}
                      </span>
                      <button
                        className="flex items-center justify-center"
                        onClick={() =>
                          handleAddProduct(
                            accompanimentProduct,
                            accompaniment.accompanimentId,
                          )
                        }
                      >
                        <Increment />
                      </button>
                      <div className="flex flex-row justify-between w-full">
                        <p className="font-bold">{accompanimentProduct.name}</p>
                        <span className="mr-[30px] text-[#09CF83] font-bold">
                          R$ {accompanimentProduct.price}
                        </span>
                      </div>
                    </div>
                    <div className="border-t border-[#EEF2F6] my-2 max-w-[450px]" />
                  </li>
                ),
              )}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default memo(ListProduct);
