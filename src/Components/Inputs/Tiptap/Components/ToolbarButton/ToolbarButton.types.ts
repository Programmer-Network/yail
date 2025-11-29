export interface IToolbarButtonProps {
  icon: string;
  onClick: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
  tooltipText?: string;
  tooltipId?: string;
}
