import type { SVGProps } from "react";

const SvgLoopSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M13.293 3 11.146.854l.708-.708 3 3a.5.5 0 0 1 0 .708l-3 3-.708-.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5V8H0V6.5A3.5 3.5 0 0 1 3.5 3zM15 7v1.5a3.5 3.5 0 0 1-3.5 3.5H1.707l2.147 2.146-.708.708-3-3a.5.5 0 0 1 0-.707l3-3 .708.707L1.707 11H11.5A2.5 2.5 0 0 0 14 8.5V7z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgLoopSolid;
