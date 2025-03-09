import type { SVGProps } from "react";

const SvgPowerOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinecap='square'
      d='M7.5 8.5v-8M2.618 2.499A6.96 6.96 0 0 0 .5 7.495c0 3.864 3.135 7.005 7 7.005 3.867 0 7-3.141 7-7.005A6.97 6.97 0 0 0 12.395 2.5'
    />
  </svg>
);
export default SvgPowerOutline;
