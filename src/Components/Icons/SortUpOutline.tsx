import type { SVGProps } from "react";

const SvgSortUpOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m3.5.5.354-.354a.5.5 0 0 0-.708 0zM3.146.146l-3 3 .708.708 3-3zm0 .708 3 3 .708-.708-3-3zM3 .5V15h1V.5zM9 4h6V3H9zm0 4h4V7H9zm0 4h2v-1H9z'
    />
  </svg>
);
export default SvgSortUpOutline;
