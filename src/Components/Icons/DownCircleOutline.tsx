import type { SVGProps } from "react";

const SvgDownCircleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M4.854 6.146 4.5 5.793l-.707.707.353.354zM7.5 9.5l-.354.354.354.353.354-.353zm3.354-2.646.353-.354-.707-.707-.354.353zm-6.708 0 3 3 .708-.708-3-3zm3.708 3 3-3-.708-.708-3 3zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zM1 7.5A6.5 6.5 0 0 1 7.5 1V0A7.5 7.5 0 0 0 0 7.5zm-1 0A7.5 7.5 0 0 0 7.5 15v-1A6.5 6.5 0 0 1 1 7.5z'
    />
  </svg>
);
export default SvgDownCircleOutline;
