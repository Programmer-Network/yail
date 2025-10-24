import classNames from "classnames";
import { FC, ReactElement } from "react";

import { typograyClassNames } from "../../Inputs/Tiptap/constants";
import { IParagraphProps } from "./types";

const Paragraph: FC<IParagraphProps> = ({
  children,
  className,
  onClick
}): ReactElement => {
  return (
    <p
      className={classNames(typograyClassNames.p(className))}
      onClick={onClick}
    >
      {children}
    </p>
  );
};

export default Paragraph;
