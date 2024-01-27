import classNames from "classnames";
import { FC, ReactNode } from "react";

const Paragraph: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className
}) => {
  return (
    <p className={classNames("mb-2 text-primary-text-color", className)}>
      {children}
    </p>
  );
};

export default Paragraph;
