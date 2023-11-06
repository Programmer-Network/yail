import classNames from 'classnames';
import { FC } from 'react';

interface IBadgeProps {
  title: string;
  className?: string;
}

const Badge: FC<IBadgeProps> = ({ title, className }) => {
  return (
    <span
      className={classNames(
        'border border-primary-text-color text-primary-text-color rounded px-1 pb-[2px] pt-[1px] text-[10px] relative top-[-2px]',
        className
      )}
    >
      {title}
    </span>
  );
};

export default Badge;
