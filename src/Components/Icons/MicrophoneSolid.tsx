import type { SVGProps } from "react";

const SvgMicrophoneSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M5 2.5a2.5 2.5 0 0 1 5 0v4a2.5 2.5 0 0 1-5 0z'
    />
    <path
      fill='currentColor'
      d='M2 4v2.5a5.5 5.5 0 0 0 5 5.478V14H5v1h5v-1H8v-2.022A5.5 5.5 0 0 0 13 6.5V4h-1v2.5a4.5 4.5 0 0 1-9 0V4z'
    />
  </svg>
);
export default SvgMicrophoneSolid;
