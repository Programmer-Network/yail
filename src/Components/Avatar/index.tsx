import BoringAvatars from 'boring-avatars';
import classNames from 'classnames';
import { FC } from 'react';

interface IAvatarProps {
  src?: string;
  alt?: string;
  size?: number;
  colors?: string[];
}

const Avatar: FC<IAvatarProps> = ({
  src,
  alt = 'John Doe',
  size = 50,
  colors = ['#6366f1', '#bae6fd'],
}) => {
  const className = classNames('sm:m-0 rounded-full overflow-hidden');

  if (!src) {
    return (
      <div
        className={className}
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <BoringAvatars size={size} name={alt} variant="beam" colors={colors} />
      </div>
    );
  }

  return (
    <div
      className={className}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <img
        style={{ width: `${size}px`, height: `${size}px` }}
        src={src}
        alt={alt}
        loading="lazy"
      />
    </div>
  );
};

export default Avatar;
