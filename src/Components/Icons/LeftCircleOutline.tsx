import type { SVGProps } from "react";

const SvgLeftCircleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m8.854 4.854.353-.354-.707-.707-.354.353zM5.5 7.5l-.354-.354-.353.354.353.354zm2.646 3.354.354.353.707-.707-.353-.354zm0-6.708-3 3 .708.708 3-3zm-3 3.708 3 3 .708-.708-3-3zM7.5 14A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1z'
    />
  </svg>
);
export default SvgLeftCircleOutline;
