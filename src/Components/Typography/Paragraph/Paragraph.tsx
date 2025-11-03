import classNames from "classnames";
import { FC, ReactElement } from "react";

import { typograyClassNames } from "../../Inputs/Tiptap/constants";
import { IParagraphProps } from "./types";

const Paragraph: FC<IParagraphProps> = ({
  id,
  children,
  className,
  onClick,
  ariaLabel
}): ReactElement => {
  return (
    <p
      id={id}
      className={classNames(typograyClassNames.p(className))}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </p>
  );
};

export default Paragraph;
