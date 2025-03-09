import type { SVGProps } from "react";

const SvgUserCircleSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='M5 5.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0' />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7.5 0a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15M1 7.5a6.5 6.5 0 1 1 10.988 4.702A3.5 3.5 0 0 0 8.5 9h-2a3.5 3.5 0 0 0-3.488 3.202A6.48 6.48 0 0 1 1 7.5'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgUserCircleSolid;
