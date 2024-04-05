import React from "react";
import { twMerge } from "tailwind-merge";

export default function ItemsIconsContainer(props: {
  children: React.ReactNode;
  className?: string;
}) {
  const className = twMerge(
    "flex flex-1 justify-center items-center",
    props.className,
  );
  return <div className={className}>{props.children}</div>;
}
