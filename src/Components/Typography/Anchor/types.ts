export interface IAnchorProps {
  id?: string;
  className?: string;
  href?: string;
  target?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  "aria-label"?: string;
}
