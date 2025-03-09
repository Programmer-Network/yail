import type { SVGProps } from "react";

const SvgEuroOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M13.374 3A6 6 0 0 0 2.5 6.5v2A6 6 0 0 0 13.374 12M0 5.5h7m-7 4h7'
    />
  </svg>
);
export default SvgEuroOutline;
