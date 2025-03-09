import type { SVGProps } from "react";

const SvgFloatCenterSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M5.5 0A1.5 1.5 0 0 0 4 1.5v4A1.5 1.5 0 0 0 5.5 7h4A1.5 1.5 0 0 0 11 5.5v-4A1.5 1.5 0 0 0 9.5 0zM0 2h2V1H0zM13 2h2V1h-2zM0 6h2V5H0zM13 6h2V5h-2zM0 10h15V9H0zM0 14h15v-1H0z'
    />
  </svg>
);
export default SvgFloatCenterSolid;
