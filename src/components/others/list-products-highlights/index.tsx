import { Plus } from "lucide-react";

type ListProductHighlightsProps = {
  handleNavigation: (id: string) => void;
};

export default function ListProductsHighlights(
  props: ListProductHighlightsProps,
) {
  const mockData = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div className="flex mt-4 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden md:grid">
      <ul className="flex flex-row gap-5 md:grid md:grid-cols-2 md:gap-10">
        {mockData.map((_, i) => (
          <li
            key={i}
            onClick={() => props.handleNavigation("costela")}
            className="flex flex-1 flex-col min-w-40 p-3 rounded-xl bg-white shadow-md shadow-slate-100 md:flex-row cursor-pointer"
          >
            <div className="block md:flex md:pr-2">
              <div className="md:flex-1">
                <img
                  src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg"
                  alt="Escondidinho de frango"
                  className="w-32 h-32 rounded-xl object-fill"
                />
              </div>
            </div>
            <div className="block md:flex md:flex-1 md:flex-col">
              <div className="block md:flex md:flex-1 flex-col">
                <p className="font-medium text-base mt-1">
                  Escondidinho de frango
                </p>
                <p className="font-light text-sm mt-1">Escondidinho</p>
              </div>
              <div className="flex flex-row justify-between items-center">
                <p className="font-bold text-base mt-1">R$40,00</p>
                <button className="flex w-8 h-8 rounded-full bg-orange-500 justify-center items-center">
                  <Plus color="white" size={18} />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
