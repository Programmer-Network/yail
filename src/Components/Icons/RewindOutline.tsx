import type { SVGProps } from "react";

const SvgRewindOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinejoin='round'
      d='M14.5 12.5v-10l-7 5zM7.5 12.5v-10l-7 5z'
    />
  </svg>
);
export default SvgRewindOutline;
