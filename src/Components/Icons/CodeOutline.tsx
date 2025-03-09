import type { SVGProps } from "react";

const SvgCodeOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m10.146 10.146-.353.354.707.707.354-.353zM13.5 7.5l.354.354.353-.354-.353-.354zm-2.646-3.354-.354-.353-.707.707.353.354zm-6.708 6.708.354.353.707-.707-.353-.354zM1.5 7.5l-.354-.354-.353.354.353.354zm3.354-2.646.353-.354-.707-.707-.354.353zm6 6 3-3-.708-.708-3 3zm3-3.708-3-3-.708.708 3 3zm-9 3-3-3-.708.708 3 3zm-3-2.292 3-3-.708-.708-3 3zm6.153-6.436-2 12 .986.164 2-12z'
    />
  </svg>
);
export default SvgCodeOutline;
