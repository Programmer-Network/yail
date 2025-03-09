import type { SVGProps } from "react";

const SvgForwardSmallOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinejoin='round'
      d='M8.5 9.5v-4l3.5 2zM4.5 9.5v-4l3.5 2z'
    />
  </svg>
);
export default SvgForwardSmallOutline;
