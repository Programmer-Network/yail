import { StringUtils } from "Utils";
import BoringAvatars from "boring-avatars";
import classNames from "classnames";
import { FC } from "react";

import { IAvatarProps } from "./types";

const Avatar: FC<IAvatarProps> = ({
  src,
  alt = "John Doe",
  size = 50,
  colors = ["#6366f1", "#bae6fd"],
  className
}) => {
  const classes = classNames(
    "sm:yl-mt-0 yl-rounded-full yl-overflow-hidden",
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
        style={{ width: `${size}px`, height: `${size}px` }}
        src={src}
        alt={alt}
        loading='lazy'
      />
    </div>
  );
};

export default Avatar;
