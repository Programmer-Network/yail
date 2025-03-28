export enum BadgeVariantEnum {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
  BETA = "beta",
  NEW = "new",
  NONE = "none"
}

export interface IBadgeProps {
  title: string;
  className?: string;
  variant: BadgeVariantEnum;
}
