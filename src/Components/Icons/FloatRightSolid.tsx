import type { SVGProps } from "react";

const SvgFloatRightSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M9.5 0A1.5 1.5 0 0 0 8 1.5v4A1.5 1.5 0 0 0 9.5 7h4A1.5 1.5 0 0 0 15 5.5v-4A1.5 1.5 0 0 0 13.5 0zM0 2h6V1H0zM0 6h6V5H0zM0 10h15V9H0zM0 14h15v-1H0z'
    />
  </svg>
);
export default SvgFloatRightSolid;
