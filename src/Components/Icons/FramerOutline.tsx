import type { SVGProps } from "react";

const SvgFramerOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinejoin='round'
      d='M7.5 5.5h5v-5h-10zm0 0h-5v4l5 5v-4h5z'
    />
  </svg>
);
export default SvgFramerOutline;
