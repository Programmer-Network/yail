import type { SVGProps } from "react";

const SvgAdjustHorizontalOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M2.5 7.5H0m15 5h-2.5m2.5-10H8.5m-2 0H0m4.5 5H15m-4.5 5H0m10.5-2v4h2v-4zm-8-5v4h2v-4zm4-5v4h2v-4z'
    />
  </svg>
);
export default SvgAdjustHorizontalOutline;
