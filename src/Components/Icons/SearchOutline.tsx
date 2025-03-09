import type { SVGProps } from "react";

const SvgSearchOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='m14.5 14.5-4-4m-4 2a6 6 0 1 1 0-12 6 6 0 0 1 0 12Z'
    />
  </svg>
);
export default SvgSearchOutline;
