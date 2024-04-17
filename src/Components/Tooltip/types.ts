import React from "react";

export interface ITooltipProps {
  text: string | React.ReactNode;
  id: string;
  children: React.ReactNode;
  place?: "top" | "bottom" | "left" | "right";
}
