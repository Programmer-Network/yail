import type { SVGProps } from "react";

const SvgArrowDownCircleSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7.5 0a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15m2.707 8.5L7.5 11.207 4.793 8.5l.707-.707 1.5 1.5V4h1v5.293l1.5-1.5z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgArrowDownCircleSolid;
