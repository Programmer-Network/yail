import type { SVGProps } from "react";

const SvgHeartSmallOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='m6.5 5.5 1 1 1-1a1.414 1.414 0 1 1 2 2l-3 3-3-3a1.414 1.414 0 1 1 2-2Z'
    />
  </svg>
);
export default SvgHeartSmallOutline;
