import type { SVGProps } from "react";

const SvgStackoverflowOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M2.5 9v5.5h10V9M4 12.5h7M4 10l7 .7M4.3 7.5 11 9M5.3 4.5l6.1 3.1M7 2l5 4.5M9.5.5l3.5 5'
    />
  </svg>
);
export default SvgStackoverflowOutline;
