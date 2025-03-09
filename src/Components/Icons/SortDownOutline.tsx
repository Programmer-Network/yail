import type { SVGProps } from "react";

const SvgSortDownOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='m3.5 14.5-.354.354a.5.5 0 0 0 .708 0zm.354.354 3-3-.708-.708-3 3zm0-.708-3-3-.708.708 3 3zM3 0v14.5h1V0zm6 4h6V3H9zm0 4h4V7H9zm0 4h2v-1H9z'
    />
  </svg>
);
export default SvgSortDownOutline;
