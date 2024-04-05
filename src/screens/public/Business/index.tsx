import { UserRound, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import dayjs from "dayjs";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  ItemsIconsContainer,
  ItemsIconIcon,
  ItemsIconsLabel,
} from "@/components/others/items-icons";
import ItemsIconsButton from "@/components/others/items-icons/items-icons-button";
import ListProductsHighlights from "@/components/others/list-products-highlights";
import ListProducts from "@/components/others/list-products";
import MenuCategory from "@/components/others/menu-category";
import ImageLogo from "../../../assets/logo/logo.jpg";
import { Product } from "@/components/others/list-products/types";
import { RestaurantResponse } from "@/service/restaurant/types";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

export default function Business() {
  const navigate = useNavigate();
  const params = useParams();
  const data = useLoaderData() as RestaurantResponse;

  const productsMock: Product[] = [
    {
      id: 1,
      name: "Empadão de carne",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisi ac tincidunt aliquam, mauris nunc ultrices lacus, nec aliquet nunc nisl nec justo.",
      price: 40.0,
      estimated_time: 30,
      img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg",
      category_name: "Empadão",
      category_id: 1,
    },
    {
      id: 2,
      name: "Empadão de frango",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisi ac tincidunt aliquam, mauris nunc ultrices lacus, nec aliquet nunc nisl nec justo.",
      price: 40.0,
      estimated_time: 30,
      img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg",
      category_name: "Empadão",
      category_id: 1,
    },
    {
      id: 3,
      name: "Empadão de frango",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisi ac tincidunt aliquam, mauris nunc ultrices lacus, nec aliquet nunc nisl nec justo.",
      price: 40.0,
      estimated_time: 30,
      img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg",
      category_name: "Empadão",
      category_id: 1,
    },
    {
      id: 4,
      name: "Escondidinho de frango",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisi ac tincidunt aliquam, mauris nunc ultrices lacus, nec aliquet nunc nisl nec justo.",
      price: 40.0,
      estimated_time: 30,
      img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg",
      category_name: "Escondidinho",
      category_id: 2,
    },
    {
      id: 5,
      name: "Coca-cola",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisi ac tincidunt aliquam, mauris nunc ultrices lacus, nec aliquet nunc nisl nec justo.",
      price: 40.0,
      estimated_time: 30,
      img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg",
      category_name: "Bebidas",
      category_id: 3,
    },
  ];

  const handleNavigation = (product: string) => {
    if (!product) return;
    navigate(`/${params.businessId}/product/${product}`);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <div className="relative flex h-56 rounded-b-3xl bg-slate-500">
          <button className="flex absolute h-11 w-11 justify-center items-center rounded-full bg-orange-400 right-[24px] top-[40px] hover:bg-orange-300">
            <UserRound color="white" size={24} />
          </button>
          <img
            src={ImageLogo}
            alt="Picture of the author"
            className="rounded-b-3xl object-cover"
          />
        </div>
        <div className="flex items-center justify-center z-10">
          <div className="h-32 w-32 rounded-full bg-slate-500 mt-[-65px] items-center justify-center"></div>
        </div>
        <div className="container">
          <div className="flex flex-1 flex-col justify-center items-center my-4">
            <h1 className="text-2xl font-bold text-center my-4 text-color-text-primary lg:text-4xl">
              {data?.name}
            </h1>
            <HoverCard>
              <HoverCardTrigger>
                <Badge
                  className="bg-green-500 hover:bg-green-400"
                  variant="default"
                >
                  Aberto
                </Badge>
              </HoverCardTrigger>
              <HoverCardContent className="flex flex-row text-center gap-4">
                <Clock color="rgb(115 115 115)" />
                Aberto até as {dayjs(data?.createdAt).format("HH:mm")}
              </HoverCardContent>
            </HoverCard>
          </div>
          <div className="grid grid-cols-2 w-full gap-6 mobile-m:flex mobile-m:flex-1 mobile-m:gap-2">
            <ItemsIconsContainer>
              <ItemsIconsButton>
                <ItemsIconIcon iconType="STAR" />
                <ItemsIconsLabel className="font-bold">
                  {data?.rating}
                </ItemsIconsLabel>
              </ItemsIconsButton>
            </ItemsIconsContainer>
            <ItemsIconsContainer>
              <ItemsIconsButton>
                <ItemsIconIcon iconType="TRUCK" />
                <ItemsIconsLabel>Ver taxas</ItemsIconsLabel>
              </ItemsIconsButton>
            </ItemsIconsContainer>
            <ItemsIconsContainer>
              <ItemsIconsButton>
                <ItemsIconIcon iconType="CLOCK" />
                <ItemsIconsLabel>30 min</ItemsIconsLabel>
              </ItemsIconsButton>
            </ItemsIconsContainer>
          </div>
          <div className="flex mt-4 mb-6 text-left lg:mt-8 lg:mb-12">
            <p className="text-ellipsis overflow-x-hidden line-clamp-2 lg:text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nisi ac tincidunt aliquam, mauris nunc ultrices lacus,
              nec aliquet nunc nisl nec justo lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed euismod, nisi ac tincidunt
              aliquam, mauris nunc ultrices lacus, nec aliquet nunc nisl nec
              justo euismod, nisi ac tincidunt aliquam, mauris nunc ultrices
              lacus, nec aliquet nunc nisl nec justo lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed euismod, nisi ac tincidunt
              aliquam, mauris nunc ultrices lacus, nec aliquet nunc nisl nec
              justo.
            </p>
          </div>
          <MenuCategory />
          <h2 className="mt-7 font-medium text-xl">Destaques</h2>
          <ListProductsHighlights handleNavigation={handleNavigation} />
          <ListProducts products={productsMock} />
        </div>
      </div>
    </div>
  );
}
