import type { SVGProps } from "react";

const SvgArrowRightSmallOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m8.146 9.146-.353.354.707.707.354-.353zM10.5 7.5l.354.354.353-.354-.353-.354zM8.854 5.146 8.5 4.793l-.707.707.353.354zm0 4.708 2-2-.708-.708-2 2zm2-2.708-2-2-.708.708 2 2zM10.5 7H4v1h6.5z'
    />
  </svg>
);
export default SvgArrowRightSmallOutline;
