import type { SVGProps } from "react";

const SvgAlignTopSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path fill='currentColor' d='M15 0H0v1h15zM7 3H3v12h4zM12 3H8v8h4z' />
  </svg>
);
export default SvgAlignTopSolid;
