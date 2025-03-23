export interface IFormActionsProps {
  onSave: () => void;
  onCancel: () => void;
  onDelete?: () => void;
  dialogDeleteText?: string;
  className?: string;
}
