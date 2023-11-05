import classNames from 'classnames';
import { FC } from 'react';

interface IDescriptionProps {
  children?: React.ReactNode;
  className?: string;
}

export const Description: FC<IDescriptionProps> = ({ children, className }) => {
  return (
    <p
      className={classNames(
        'md:text-2xl text-primary-text-color break-all',
        className
      )}
    >
      {children}
    </p>
  );
};
