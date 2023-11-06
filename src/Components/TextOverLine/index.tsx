import { FC } from 'react';
import { ITextOverLineProps } from './types';
import classNames from 'classnames';

const TextOverLine: FC<ITextOverLineProps> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        'inline-flex items-center justify-center w-full relative',
        className
      )}
    >
      <hr className="w-64 h-[1px] bg-primary-text-color border-0 rounded" />
      <div className="absolute px-4 -translate-x-1/2 bg-primary-background-color left-1/2 text-primary-text-color">
        {children}
      </div>
    </div>
  );
};

export default TextOverLine;
