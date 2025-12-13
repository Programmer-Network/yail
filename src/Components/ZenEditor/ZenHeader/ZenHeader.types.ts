export interface IZenBreadcrumbItem {
  label: string;
  onClick?: () => void;
}

export interface IZenHeaderProps {
  onBack?: () => void;
  breadcrumbs: IZenBreadcrumbItem[];
}
