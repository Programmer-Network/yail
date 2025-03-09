import type { SVGProps } from "react";

const SvgArrowLeftOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' d='m1.5 7.5 4-4m-4 4 4 4m-4-4H14' />
  </svg>
);
export default SvgArrowLeftOutline;
