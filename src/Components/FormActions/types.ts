export interface IFormActionsProps {
  onSave?: () => void | Promise<void>;
  onCancel?: () => void;
  onDelete?: () => void | Promise<void>;
  saveText?: string;
  cancelText?: string;
  deleteText?: string;
  dialogDeleteText?: string;
  dialogDeleteTitle?: string;
  isLoading?: boolean;
  isSaving?: boolean;
  isDeleting?: boolean;
  disabled?: boolean;
  showSave?: boolean;
  showCancel?: boolean;
  showDelete?: boolean;
  saveVariant?: "primary" | "secondary";
  className?: string;
  size?: "small" | "medium" | "large";
  alignment?: "left" | "center" | "right" | "space-between";
}
