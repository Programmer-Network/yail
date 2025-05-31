export interface IConfirmDialogProps {
  onConfirm: () => void;
  isLoading?: boolean;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  iconName?: string;
  variant?: "destructive" | "info";
}

export type ConfirmDialogVariant = "destructive" | "info";
