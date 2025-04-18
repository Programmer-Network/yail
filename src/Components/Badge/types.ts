export enum BadgeVariantEnum {
  FILLED = "filled",
  OUTLINE = "outline"
}

export interface IBadgeProps {
  title: string;
  className?: string;
  variant?: BadgeVariantEnum;
}
