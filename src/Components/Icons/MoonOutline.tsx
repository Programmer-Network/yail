import type { SVGProps } from "react";

const SvgMoonOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinejoin='round'
      d='M1.66 11.362q.65.136 1.34.138A6.5 6.5 0 0 0 7.693.503 7 7 0 1 1 1.66 11.362Z'
    />
  </svg>
);
export default SvgMoonOutline;
