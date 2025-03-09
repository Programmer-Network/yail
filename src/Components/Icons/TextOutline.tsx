import type { SVGProps } from "react";

const SvgTextOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' d='M7.5 14V1.5M1.5 5V1.5h12V5m-10 8.5H11' />
  </svg>
);
export default SvgTextOutline;
