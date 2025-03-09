import type { SVGProps } from "react";

const SvgRewindSmallOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinejoin='round'
      d='M6.5 9.5v-4L3 7.5zM10.5 9.5v-4L7 7.5z'
    />
  </svg>
);
export default SvgRewindSmallOutline;
