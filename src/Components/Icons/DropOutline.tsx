import type { SVGProps } from "react";

const SvgDropOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='m7.5.5 4.286 4.142a5.74 5.74 0 0 1 1.608 2.971 5.6 5.6 0 0 1-.363 3.334 5.85 5.85 0 0 1-2.21 2.584A6.15 6.15 0 0 1 7.5 14.5a6.15 6.15 0 0 1-3.32-.97 5.85 5.85 0 0 1-2.211-2.583 5.6 5.6 0 0 1-.363-3.334 5.74 5.74 0 0 1 1.608-2.97z'
    />
  </svg>
);
export default SvgDropOutline;
