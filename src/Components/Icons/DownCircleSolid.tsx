import type { SVGProps } from "react";

const SvgDownCircleSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7.5 15a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15m4.207-9L7.5 10.207 3.293 6z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgDownCircleSolid;
