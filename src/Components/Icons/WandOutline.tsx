import type { SVGProps } from "react";

const SvgWandOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m6.853 8.848.354-.353-.707-.707-.353.353zM9 10.493v.5h1v-.5zm1-.999v-.5H9v.5zM9 1.5V2h1v-.5zM10 .5V0H9v.5zM4.5 4.997H4v1h.5zm1 1H6v-1h-.5zm8-1H13v1h.5zm1 1h.5v-1h-.5zm-2.353-3.852-.354.354.707.707.353-.354zm1.706-.292.354-.353L13.5.792l-.353.354zm-8-.707L5.5.792l-.707.708.354.353zm.294 1.706.353.354.707-.707-.354-.354zm6.706 5.29-.353-.354-.707.707.354.353zm.294 1.706.353.353.707-.707-.354-.354zM.853 14.844l6-5.996-.706-.707-6 5.996zM10 10.495v-1H9v1zm0-8.995V.5H9v1zM4.5 5.997h1v-1h-1zm9 0h1v-1h-1zm-.647-3.145 1-.999-.706-.707-1 1zm-7.706-.999 1 1 .706-.708-1-1zm7 6.995 1 1 .706-.708-1-.999z'
    />
  </svg>
);
export default SvgWandOutline;
