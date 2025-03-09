import type { SVGProps } from "react";

const SvgAntiClockwiseSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='m8.145.146.708.708-1.149 1.148A6.5 6.5 0 0 1 14 8.495a6.5 6.5 0 0 1-6.5 6.496A6.5 6.5 0 0 1 1 8.495v-.5h1v.5a5.5 5.5 0 0 0 5.5 5.496c3.037 0 5.5-2.462 5.5-5.496a5.5 5.5 0 0 0-5.289-5.492l1.142 1.14-.708.708-2.352-2.352z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgAntiClockwiseSolid;
