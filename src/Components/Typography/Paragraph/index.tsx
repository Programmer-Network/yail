import classNames from "classnames";
import { FC, MouseEvent, ReactElement, ReactNode } from "react";

const Paragraph: FC<{
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLParagraphElement>) => void;
}> = ({ children, className, onClick }): ReactElement => {
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
