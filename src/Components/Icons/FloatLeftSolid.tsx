import type { SVGProps } from "react";

const SvgFloatLeftSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M1.5 0A1.5 1.5 0 0 0 0 1.5v4A1.5 1.5 0 0 0 1.5 7h4A1.5 1.5 0 0 0 7 5.5v-4A1.5 1.5 0 0 0 5.5 0zM9 2h6V1H9zM9 6h6V5H9zM0 10h15V9H0zM0 14h15v-1H0z'
    />
  </svg>
);
export default SvgFloatLeftSolid;
