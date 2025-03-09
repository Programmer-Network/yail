import type { SVGProps } from "react";

const SvgTargetSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='M7 7.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0' />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7.5 4a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3'
      clipRule='evenodd'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7.5 0a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15M3 7.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgTargetSolid;
