import React from "react";
import { twMerge } from "tailwind-merge";

export default function ItemsIconLabel(props: {
  children: React.ReactNode;
  className?: string;
}) {
  const className = twMerge(
    "text-color-text-primary text-sm lg:text-base",
    props.className,
  );
  return <span className={className}>{props.children}</span>;
}
