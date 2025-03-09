import type { SVGProps } from "react";

const SvgTagOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m.5 7.5-.354-.354a.5.5 0 0 0 0 .708zm7 7-.354.354a.5.5 0 0 0 .708 0zm7-7 .354.354A.5.5 0 0 0 15 7.5zm-7-7V0a.5.5 0 0 0-.354.146zM.146 7.854l7 7 .708-.708-7-7zm7.708 7 7-7-.708-.708-7 7zM15 7.5v-6h-1v6zM13.5 0h-6v1h6zM7.146.146l-7 7 .708.708 7-7zM15 1.5A1.5 1.5 0 0 0 13.5 0v1a.5.5 0 0 1 .5.5zM10.5 5a.5.5 0 0 1-.5-.5H9A1.5 1.5 0 0 0 10.5 6zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 12 4.5zm-.5-.5a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 10.5 3zm0-1A1.5 1.5 0 0 0 9 4.5h1a.5.5 0 0 1 .5-.5z'
    />
  </svg>
);
export default SvgTagOutline;
