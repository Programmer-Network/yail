import type { SVGProps } from "react";

const SvgCartSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      d='M.979.356.02.644 3.128 11H15V4.5A2.5 2.5 0 0 0 12.5 2H1.472z'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M5.5 12a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M5 13.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0M12.5 12a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-.5 1.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgCartSolid;
