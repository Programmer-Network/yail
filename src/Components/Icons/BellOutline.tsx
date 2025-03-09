import type { SVGProps } from "react";

const SvgBellOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M1 10.5h13m-11.5 0v-5a5 5 0 0 1 10 0v5m-7 1.5v.5a2 2 0 1 0 4 0V12'
    />
  </svg>
);
export default SvgBellOutline;
