import React from "react";
import { twMerge } from "tailwind-merge";

export default function ItemsIconsButton(props: {
  children: React.ReactNode;
  className?: string;
  onPress?: () => void;
}) {
  const className = twMerge(
    "flex flex-row gap-2 items-center",
    props.className,
  );

  return (
    <button className={className} onClick={props.onPress}>
      {props.children}
    </button>
  );
}
