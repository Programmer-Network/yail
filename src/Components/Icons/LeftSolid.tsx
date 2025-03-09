import type { SVGProps } from "react";

const SvgLeftSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='M3 7.5 11 0v15z' />
  </svg>
);
export default SvgLeftSolid;
