import classNames from "classnames";
import { FC } from "react";

import { IAnchorProps } from "./types";

const Anchor: FC<IAnchorProps> = ({
  className,
  target,
  href,
  children,
  onClick
}: IAnchorProps) => (
  <a
    onClick={onClick}
    className={classNames(
      "hover:yl-text-stroke yl-text-primary hover:yl-underline hover:yl-opacity-80 active:yl-opacity-50",
      className
    )}
    target={target}
    href={href}
    rel='noreferrer'
  >
    {children}
  </a>
);

export default Anchor;
