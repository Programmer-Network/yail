import type { SVGProps } from "react";

const SvgArrowUpSmallOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m5.146 6.146-.353.354.707.707.354-.353zM7.5 4.5l.354-.354-.354-.353-.354.353zm1.646 2.354.354.353.707-.707-.353-.354zm-3.292 0 2-2-.708-.708-2 2zm1.292-2 2 2 .708-.708-2-2zM7 4.5V11h1V4.5z'
    />
  </svg>
);
export default SvgArrowUpSmallOutline;
