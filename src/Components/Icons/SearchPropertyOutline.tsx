import type { SVGProps } from "react";

const SvgSearchPropertyOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M4.5 8.5H4a.5.5 0 0 0 .5.5zm4 0V9a.5.5 0 0 0 .5-.5zm0-2.5H9a.5.5 0 0 0-.146-.354zm-2-2 .354-.354a.5.5 0 0 0-.708 0zm-2 2-.354-.354A.5.5 0 0 0 4 6zm10.354 8.146-4-4-.708.708 4 4zM6.5 12A5.5 5.5 0 0 1 1 6.5H0A6.5 6.5 0 0 0 6.5 13zM12 6.5A5.5 5.5 0 0 1 6.5 12v1A6.5 6.5 0 0 0 13 6.5zM6.5 1A5.5 5.5 0 0 1 12 6.5h1A6.5 6.5 0 0 0 6.5 0zm0-1A6.5 6.5 0 0 0 0 6.5h1A5.5 5.5 0 0 1 6.5 1zm-2 9h4V8h-4zM9 8.5V6H8v2.5zm-.146-2.854-2-2-.708.708 2 2zm-2.708-2-2 2 .708.708 2-2zM4 6v2.5h1V6z'
    />
  </svg>
);
export default SvgSearchPropertyOutline;
