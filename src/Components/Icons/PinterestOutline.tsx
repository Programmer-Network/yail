import type { SVGProps } from "react";

const SvgPinterestOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='m4.5 13.5 3-7m-3.236 3a3 3 0 0 1-.764-2V7A3.5 3.5 0 0 1 7 3.5h1A3.5 3.5 0 0 1 11.5 7v.5a3 3 0 0 1-3 3 2.08 2.08 0 0 1-1.974-1.423L6.5 9m1 5.5a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z'
    />
  </svg>
);
export default SvgPinterestOutline;
