import { IZenBreadcrumbItem } from "../ZenHeader";

export interface IZenStatusBarProps {
  onPropertiesToggle: () => void;
  isPropertiesOpen: boolean;
  propertiesButtonText: string;
  propertiesButtonIcon?: string;
  onBack?: () => void;
  breadcrumbs?: IZenBreadcrumbItem[];
}
