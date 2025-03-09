import type { SVGProps } from "react";

const SvgLocationOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinecap='square'
      d='M7.5.5v14m7-7.005H.5m13 0a6.006 6.006 0 0 1-6 6.005c-3.313 0-6-2.694-6-6.005a6 6 0 0 1 6-5.996c3.313 0 6 2.686 6 5.996Z'
    />
  </svg>
);
export default SvgLocationOutline;
