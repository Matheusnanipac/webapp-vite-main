export const productMockApi = {
  productId: 1,
  name: "Empadão de frango cremoso",
  description:
    "Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
  category_name: "Empadão",
  price: 29.9,
  productImages: [
    {
      id: 1,
      url: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg",
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg",
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg",
    },
  ],
  accompaniment: [
    {
      accompanimentId: 1,
      name: "Acompanhamento",
      description: "Escolha até 10 opções de acompanhamento",
      accompanimentProducts: [
        {
          accompanimentProductsId: 1,
          name: "Arroz Branco",
          price: 3,
        },
        {
          accompanimentProductsId: 2,
          name: "Salada",
          price: 4.5,
        },
        {
          accompanimentProductsId: 3,
          name: "Molho da Casa",
          price: 12.9,
        },
      ],
    },
    {
      accompanimentId: 2,
      name: "Bebidas",
      description: "Escolha sua bebida",
      accompanimentProducts: [
        {
          accompanimentProductsId: 1,
          name: "Coca-Cola 2L",
          price: 12,
        },
        {
          accompanimentProductsId: 2,
          name: "Guaraná",
          price: 10,
        },
        {
          accompanimentProductsId: 3,
          name: "Limonada Fresca",
          price: 5.5,
        },
        {
          accompanimentProductsId: 4,
          name: "Chá Gelado de Pêssego",
          price: 6.5,
        },
        {
          accompanimentProductsId: 5,
          name: "Refresco de Morango",
          price: 8.2,
        },
        {
          accompanimentProductsId: 6,
          name: "Água de Coco",
          price: 10.5,
        },
      ],
    },
  ],
};
