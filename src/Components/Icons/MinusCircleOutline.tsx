import type { SVGProps } from "react";

const SvgMinusCircleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      stroke='currentColor'
      d='M4 7.5h7m-3.5 7a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z'
    />
  </svg>
);
export default SvgMinusCircleOutline;
