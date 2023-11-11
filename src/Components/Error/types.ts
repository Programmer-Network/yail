export interface IErrorProps {
  error: string;
  title: string;
  description?: string;
  backToText?: string;
  className?: string;
  onBackToClick?: () => void;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  IconProps?: React.SVGProps<SVGSVGElement>;
  onIconClick?: () => void;
}
