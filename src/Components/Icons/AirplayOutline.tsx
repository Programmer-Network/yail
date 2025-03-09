import type { SVGProps } from "react";

const SvgAirplayOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinejoin='round'
      d='M3 11.5H.5v-10h14v10H12m-4.5-2-4 4h8z'
    />
  </svg>
);
export default SvgAirplayOutline;
