import BoringAvatars from "boring-avatars";
import classNames from "classnames";
import { FC } from "react";

import { StringUtils } from "../../Utils";
import { IAvatarProps } from "./types";

const Avatar: FC<IAvatarProps> = ({
  src,
  alt = "John Doe",
  size = 50,
  colors = ["#ad46ff", "#ffb900"],
  className
}) => {
  const classes = classNames(
    "yl:sm:mt-0 yl:rounded-full yl:overflow-hidden yl:flex yl:items-center yl:justify-center yl:flex-shrink-0",
    className
  );

  src && StringUtils.validateURL(src);

  if (!src) {
    return (
      <div
        data-testid='svg-avatar-parent'
        className={classes}
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <BoringAvatars size={size} name={alt} variant='beam' colors={colors} />
      </div>
    );
  }

  return (
    <div
      className={classes}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <img
        className='yl:bg-background yl:object-cover yl:object-center yl:w-full yl:h-full'
        src={src}
        alt={alt}
        loading='lazy'
      />
    </div>
  );
};

export default Avatar;
