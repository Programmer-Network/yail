import type { SVGProps } from "react";

const SvgD3Outline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M0 1.5h1.5a6 6 0 1 1 0 12H0m7-12h4.5a3 3 0 1 1 0 6m0 0H9m2.5 0h-2m2 0a3 3 0 1 1 0 6H7'
    />
  </svg>
);
export default SvgD3Outline;
