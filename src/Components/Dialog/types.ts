export interface IDialogProps {
  className?: string;
  isOpen?: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
  onOpen?: () => void;
  shouldCloseOnClickOutside?: boolean;
}
