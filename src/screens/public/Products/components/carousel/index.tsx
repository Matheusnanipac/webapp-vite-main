import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ButtonDemo } from "../button-header";

export function CarouselDemo() {
  const imageUrls = [
    "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhhbWJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1608767221051-2b9d18f35a2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhhbWJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1624981013208-bb9adbb3f7b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGhhbWJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1631533633021-0a0a3e1ed34b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGhhbWJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1608767221051-2b9d18f35a2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhhbWJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
  ];
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {imageUrls.map((imageUrl, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="flex flex-1 rounded-[50px] h-[260px]">
                <CardContent className="w-full h-full p-0 ">
                  <ButtonDemo />
                  <img
                    className="rounded-[50px] h-[260px] w-full object-cover"
                    src={imageUrl}
                    alt={`Imagem ${index + 1}`}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
