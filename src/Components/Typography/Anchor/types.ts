export interface IAnchorProps {
  className?: string;
  href: string;
  target?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}
