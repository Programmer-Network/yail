import type { SVGProps } from "react";

const SvgAlignLeftSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='M0 0v15h1V0zM11 3H3v4h8zM15 8H3v4h12z' />
  </svg>
);
export default SvgAlignLeftSolid;
