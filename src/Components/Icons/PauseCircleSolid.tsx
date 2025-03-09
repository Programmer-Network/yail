import type { SVGProps } from "react";

const SvgPauseCircleSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 7.5a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0M7 10H6V5h1zm2 0H8V5h1z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgPauseCircleSolid;
