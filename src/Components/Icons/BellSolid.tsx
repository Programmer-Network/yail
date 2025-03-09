import type { SVGProps } from "react";

const SvgBellSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M7.5 0A5.5 5.5 0 0 0 2 5.5V10H1v1h13v-1h-1V5.5A5.5 5.5 0 0 0 7.5 0M5 12.5V12h5v.5a2.5 2.5 0 0 1-5 0'
    />
  </svg>
);
export default SvgBellSolid;
