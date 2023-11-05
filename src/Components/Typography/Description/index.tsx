import classNames from 'classnames';
import { FC } from 'react';
import { IDescriptionProps } from './types';

const Description: FC<IDescriptionProps> = ({ children, className }) => {
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

export default Description;
