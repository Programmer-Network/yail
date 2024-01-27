import { FC } from "react";

import { IAnchorProps } from "./types";

const Anchor: FC<IAnchorProps> = ({ target, href, children }: IAnchorProps) => (
  <a
    className='hover:text-stroke text-primary hover:underline hover:opacity-80 active:opacity-50'
    target={target}
    href={href}
    rel='noreferrer'
  >
    {children}
  </a>
);

export default Anchor;
