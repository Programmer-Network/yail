import type { SVGProps } from "react";

const SvgBedSingleSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='M0 15h1v-4h13v4h1V4h-1v3H1V0H0z' />
    <path fill='currentColor' d='M6 6H2V5h4z' />
  </svg>
);
export default SvgBedSingleSolid;
