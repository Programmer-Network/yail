import classNames from "classnames";
import { FC } from "react";

import { typograyClassNames } from "../../Inputs/Tiptap/constants";
import { IAnchorProps } from "./types";

const Anchor: FC<IAnchorProps> = ({
  id,
  className,
  target,
  href,
  children,
  onClick,
  "aria-label": ariaLabel
}: IAnchorProps) => {
  return (
    <a
      id={id}
      onClick={onClick}
      className={classNames(typograyClassNames.a(className))}
      target={target}
      href={href}
      rel='noreferrer'
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
};

export default Anchor;
