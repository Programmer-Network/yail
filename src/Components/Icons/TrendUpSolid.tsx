import type { SVGProps } from "react";

const SvgTrendUpSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M8 3h7v7h-1V4.707l-6 6-3-3-4.146 4.147-.708-.708L5 6.293l3 3L13.293 4H8z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgTrendUpSolid;
