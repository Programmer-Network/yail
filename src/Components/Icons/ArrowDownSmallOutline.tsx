import type { SVGProps } from "react";

const SvgArrowDownSmallOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m9.854 8.854.353-.354-.707-.707-.354.353zM7.5 10.5l-.354.354.354.353.354-.353zM5.854 8.146 5.5 7.793l-.707.707.353.354zm3.292 0-2 2 .708.708 2-2zm-1.292 2-2-2-.708.708 2 2zM8 10.5V4H7v6.5z'
    />
  </svg>
);
export default SvgArrowDownSmallOutline;
