import classNames from 'classnames';
import { FC } from 'react';

interface ITitleProps {
  children?: React.ReactNode;
  className?: string;
}

export const Title: FC<ITitleProps> = ({ children, className }) => {
  return (
    <h1
      className={classNames(
        'text-xl md:text-3xl text-primary cursor-pointer break-all',
        className
      )}
    >
      {children}
    </h1>
  );
};
