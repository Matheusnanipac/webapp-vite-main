export const productMockApi = {
  name: "Empadão de frango cremoso",
  description:
    "Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
  price: 40.0,
  estimated_time: 30,
  img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg",
  category_name: "Empadão",
  category_id: 1,
  followUp: [
    {
      name: "Acompanhamento",
      description: "Escolha até 10 opções de acompanhamento",
      products: [
        {
          name: "Arroz Branco",
          price: 3,
          category_name: "Acompanhamento",
          category_id: 4,
        },
        {
          name: "Salada",
          price: 4.5,
          category_name: "Acompanhamento",
          category_id: 4,
        },
        {
          name: "Molho da Casa",
          price: 12.9,
          category_name: "Acompanhamento",
          category_id: 4,
        },
      ],
    },
    {
      name: "Bebidas",
      description: "Escolha sua bebida",
      products: [
        {
          name: "Coca-Cola 2L",
          price: "12,00",
          category_id: 4,
        },
        {
          name: "Guaraná",
          price: "9,50",
          category_id: 4,
        },
      ],
    },
  ],
};
