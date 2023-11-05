import classNames from 'classnames';
import { FC } from 'react';
import { ITitleProps } from './types';

const Title: FC<ITitleProps> = ({ children, className }) => {
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

export default Title;
