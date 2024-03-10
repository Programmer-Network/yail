import classNames from "classnames";
import { FC, ReactElement } from "react";

import { IParagraphProps } from "./types";

const Paragraph: FC<IParagraphProps> = ({
  children,
  className,
  onClick
}): ReactElement => {
  return (
    <p
      className={classNames("mb-2 text-primary-text-color", className)}
      onClick={onClick}
    >
      {children}
    </p>
  );
};

export default Paragraph;
