import { StringUtils } from "Utils";
import BoringAvatars from "boring-avatars";
import classNames from "classnames";
import { FC } from "react";

import { IAvatarProps } from "./types";

const Avatar: FC<IAvatarProps> = ({
  src,
  alt = "John Doe",
  size = 50,
  colors = ["#6366f1", "#bae6fd"]
}) => {
  const className = classNames("sm:m-0 rounded-full overflow-hidden");

  src && StringUtils.validateURL(src);

  if (!src) {
    return (
      <div
        data-testid='svg-avatar-parent'
        className={className}
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <BoringAvatars size={size} name={alt} variant='beam' colors={colors} />
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
        loading='lazy'
      />
    </div>
  );
};

export * from "./types";
export default Avatar;
