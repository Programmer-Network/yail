import type { SVGProps } from "react";

const SvgLeftCircleSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 7.5a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0m9 4.207L4.793 7.5 9 3.293z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgLeftCircleSolid;
