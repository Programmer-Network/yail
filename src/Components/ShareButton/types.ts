import { ReactElement, ReactNode } from "react";

export interface ShareData {
  title?: string;
  text?: string;
  url: string;
}

export interface ShareButtonProps {
  data: ShareData;
  targetName?: string;
  onCopied?: () => void;
  onShareLinkDialogOpened?: (data: ShareData) => void;
  onError: (error: string) => void;
  children:
    | ReactNode
    | ((onClickHandler: (e: React.MouseEvent) => void) => ReactElement);
}
