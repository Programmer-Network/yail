import type { SVGProps } from "react";

const SvgLoopOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m14.5 3.5.354.354a.5.5 0 0 0 0-.708zm-14 8-.354-.354a.5.5 0 0 0 0 .708zM11.146.854l3 3 .708-.708-3-3zm3 2.292-3 3 .708.708 3-3zm-10.292 11-3-3-.708.708 3 3zm-3-2.292 3-3-.708-.708-3 3zM.5 12h11v-1H.5zM15 8.5V7h-1v1.5zM11.5 12A3.5 3.5 0 0 0 15 8.5h-1a2.5 2.5 0 0 1-2.5 2.5zm3-9h-11v1h11zM0 6.5V8h1V6.5zM3.5 3A3.5 3.5 0 0 0 0 6.5h1A2.5 2.5 0 0 1 3.5 4z'
    />
  </svg>
);
export default SvgLoopOutline;
