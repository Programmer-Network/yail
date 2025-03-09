import type { SVGProps } from "react";

const SvgMinimiseOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M9.5 9.5H13m-3.5 0V13m0-3.5 4 4m-.5-8H9.5m0 0V2m0 3.5 4-4M2 5.5h3.5m0 0V2m0 3.5-4-4m4 11.5V9.5m0 0H2m3.5 0-4 4'
    />
  </svg>
);
export default SvgMinimiseOutline;
