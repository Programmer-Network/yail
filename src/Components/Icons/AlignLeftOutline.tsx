import type { SVGProps } from "react";

const SvgAlignLeftOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path stroke='currentColor' d='M.5 0v15m3-11.5v3h7v-3zm0 5v3h11v-3z' />
  </svg>
);
export default SvgAlignLeftOutline;
