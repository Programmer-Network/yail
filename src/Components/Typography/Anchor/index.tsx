import { FC } from "react";

import { IAnchrProps } from "./types";

const Anchor: FC<IAnchrProps> = props => {
  const { href, target = "_blank", children } = props;

  return (
    <a className='text-primary' target={target} href={href} rel='noreferrer'>
      {children}
    </a>
  );
};

export default Anchor;
