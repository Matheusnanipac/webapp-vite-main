import { Clock, Star, Truck } from "lucide-react";
import React from "react";

export default function ItemsIconIcon(props: {
  iconType: "STAR" | "TRUCK" | "CLOCK" | "OTHER";
  size?: number;
  color?: string;
  children?: React.ReactNode;
}) {
  if (props.iconType === "STAR")
    return <Star size={props.size || 24} color={props.color || "orange"} />;
  if (props.iconType === "TRUCK")
    return <Truck size={props.size || 24} color={props.color || "orange"} />;
  if (props.iconType === "CLOCK")
    return <Clock size={props.size || 24} color={props.color || "orange"} />;
  if (props.iconType === "OTHER") return props.children;
}
