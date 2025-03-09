import type { SVGProps } from "react";

const SvgDividerLineOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' d='M0 7.5h15m-12-3h7m-7-3h9m-9 9h9m-9 3h7' />
  </svg>
);
export default SvgDividerLineOutline;
