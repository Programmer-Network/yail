import type { SVGProps } from "react";

const SvgArrowRightOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' d='m13.5 7.5-4-4m4 4-4 4m4-4H1' />
  </svg>
);
export default SvgArrowRightOutline;
