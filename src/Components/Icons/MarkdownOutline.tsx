import type { SVGProps } from "react";

const SvgMarkdownOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m2.5 5.5.354-.354A.5.5 0 0 0 2 5.5zm2 2-.354.354.354.353.354-.353zm2-2H7a.5.5 0 0 0-.854-.354zm4 4-.354.354.354.353.354-.353zM1.5 3h12V2h-12zm12.5.5v8h1v-8zm-.5 8.5h-12v1h12zM1 11.5v-8H0v8zm.5.5a.5.5 0 0 1-.5-.5H0A1.5 1.5 0 0 0 1.5 13zm12.5-.5a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5zM13.5 3a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 13.5 2zm-12-1A1.5 1.5 0 0 0 0 3.5h1a.5.5 0 0 1 .5-.5zM3 10V5.5H2V10zm-.854-4.146 2 2 .708-.708-2-2zm2.708 2 2-2-.708-.708-2 2zM6 5.5V10h1V5.5zm4-.5v4.5h1V5zM8.146 7.854l2 2 .708-.708-2-2zm2.708 2 2-2-.708-.708-2 2z'
    />
  </svg>
);
export default SvgMarkdownOutline;
