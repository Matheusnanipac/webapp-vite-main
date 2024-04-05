import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function MenuCategory() {
  const mockMenu = [
    {
      id: 1,
      category_id: 1,
      name: "Empadão",
    },
    {
      id: 2,
      category_id: 2,
      name: "Escondidinho",
    },
    {
      id: 3,
      category_id: 3,
      name: "Bebidas",
    },
  ];

  const [selectedMenu, setSelectedMenu] = useState(mockMenu[0].category_id);

  const defaultNavClassName = "py-2 px-3 rounded-full border border-slate-300";
  const activeNavClassName = twMerge(
    defaultNavClassName,
    "bg-orange-400 text-white",
  );

  const onClickMenu = (categoryId: number) => {
    setSelectedMenu(categoryId);
    scrollToIndex(categoryId);
  };

  const scrollToIndex = (index: number) => {
    const element = document.getElementById(`menu-${index}`);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-row pb-1 items-center gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
      {mockMenu.map((menu) => (
        <button
          key={menu.id}
          onClick={() => onClickMenu(menu.category_id)}
          className={
            menu.category_id === selectedMenu
              ? activeNavClassName
              : defaultNavClassName
          }
        >
          <span>{menu.name}</span>
        </button>
      ))}
    </div>
  );
}
