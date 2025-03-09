import type { SVGProps } from "react";

const SvgAddOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' d='M7.5 1v13M1 7.5h13' />
  </svg>
);
export default SvgAddOutline;
