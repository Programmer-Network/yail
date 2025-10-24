import classNames from "classnames";
import { FC } from "react";

import { typograyClassNames } from "../../Inputs/Tiptap/constants";
import { IAnchorProps } from "./types";

const Anchor: FC<IAnchorProps> = ({
  className,
  target,
  href,
  children,
  onClick
}: IAnchorProps) => {
  return (
    <a
      onClick={onClick}
      className={classNames(typograyClassNames.a(className))}
      target={target}
      href={href}
      rel='noreferrer'
    >
      {children}
    </a>
  );
};

export default Anchor;
