export interface ITiptapLinkInputProps {
  isOpen: boolean;
  onClose: () => void;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onUnlink?: () => void;
  hasExistingLink?: boolean;
  triggerRef?: React.RefObject<HTMLElement | null>;
  anchorPosition?: { x: number; y: number };
}
