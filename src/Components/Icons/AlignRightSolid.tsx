import type { SVGProps } from "react";

const SvgAlignRightSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='M14 0v15h1V0zM12 3H4v4h8zM12 8H0v4h12z' />
  </svg>
);
export default SvgAlignRightSolid;
