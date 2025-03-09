import type { SVGProps } from "react";

const SvgClockwiseSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7.295 2.002 6.147.854l.706-.708L9.207 2.5 6.853 4.85l-.706-.707 1.141-1.141A5.5 5.5 0 0 0 2 8.495a5.5 5.5 0 0 0 5.5 5.496c3.037 0 5.5-2.462 5.5-5.496v-.5h1v.5a6.5 6.5 0 0 1-6.5 6.496A6.5 6.5 0 0 1 1 8.495a6.5 6.5 0 0 1 6.295-6.493'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgClockwiseSolid;
