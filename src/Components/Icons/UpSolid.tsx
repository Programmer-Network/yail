import type { SVGProps } from "react";

const SvgUpSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='m7.5 3 7.5 8H0z' />
  </svg>
);
export default SvgUpSolid;
