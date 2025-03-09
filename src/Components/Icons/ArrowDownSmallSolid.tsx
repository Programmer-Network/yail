import type { SVGProps } from "react";

const SvgArrowDownSmallSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15 15'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M8 4v5.293l1.5-1.5.707.707L7.5 11.207 4.793 8.5l.707-.707 1.5 1.5V4z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgArrowDownSmallSolid;
