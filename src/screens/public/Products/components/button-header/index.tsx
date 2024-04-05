import { ChevronLeft, Heart } from "lucide-react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ButtonDemo() {
  const [heartFill, setHeartFill] = useState("none");

  const goBack = () => {
    window.history.back();
  };

  const handleHeartClick = () => {
    setHeartFill("red");
  };

  return (
    <div className="flex flex-row justify-between absolute w-full mt-[50px]">
      <button
        className="flex items-center justify-center w-[45px] h-[45px] bg-white rounded-full ml-[24px]"
        onClick={goBack}
      >
        <ChevronLeft />
      </button>
      <button
        className="flex items-center justify-center w-[45px] h-[45px] bg-white rounded-full mr-[50px]"
        onClick={handleHeartClick}
      ></button>
    </div>
  );
}
