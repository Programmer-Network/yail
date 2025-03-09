import type { SVGProps } from "react";

const SvgInfoSmallOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M7 4.5V5h1v-.5zm1-.01v-.5H7v.5zM8 11V7H7v4zm0-6.5v-.01H7v.01zM6 8h1.5V7H6zm0 3h3v-1H6z'
    />
  </svg>
);
export default SvgInfoSmallOutline;
