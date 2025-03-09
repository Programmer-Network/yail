import type { SVGProps } from "react";

const SvgGlobeOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M7.5 15v-3M4 14.5h7M11.469 1A6 6 0 1 1 3.5 9.972m4-7.472a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z'
    />
  </svg>
);
export default SvgGlobeOutline;
