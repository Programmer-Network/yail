import type { SVGProps } from "react";

const SvgAtSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 7.5a7.5 7.5 0 1 1 15 0v1a2.499 2.499 0 0 1-4.727 1.136A3.5 3.5 0 1 1 11 7.5v1a1.5 1.5 0 0 0 3 0v-1a6.5 6.5 0 1 0-2.786 5.335l.572.82A7.5 7.5 0 0 1 0 7.5m10 0a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgAtSolid;
