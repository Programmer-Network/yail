export interface ITooltipProps {
  text: string;
  id: string;
  children: React.ReactNode;
  place?: "top" | "bottom" | "left" | "right";
}
