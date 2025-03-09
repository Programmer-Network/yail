import type { SVGProps } from "react";

const SvgMinusCircleSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M0 7.5a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0M4 8h7V7H4z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgMinusCircleSolid;
