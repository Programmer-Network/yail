import type { SVGProps } from "react";

const SvgDeniedOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='m2.5 2.5 10 10m-5 2a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z'
    />
  </svg>
);
export default SvgDeniedOutline;
