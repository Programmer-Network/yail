import type { SVGProps } from "react";

const SvgArrowLeftSmallOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m6.146 9.854.354.353.707-.707-.353-.354zM4.5 7.5l-.354-.354-.353.354.353.354zm2.354-1.646.353-.354-.707-.707-.354.353zm0 3.292-2-2-.708.708 2 2zm-2-1.292 2-2-.708-.708-2 2zM4.5 8H11V7H4.5z'
    />
  </svg>
);
export default SvgArrowLeftSmallOutline;
