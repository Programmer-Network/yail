import type { SVGProps } from "react";

const SvgViewColumnOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' d='M9.5 0v15m4-15v15m-8-15v15m-4-15v15' />
  </svg>
);
export default SvgViewColumnOutline;
